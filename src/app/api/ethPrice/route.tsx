import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
  const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${etherscanApiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const path = request.nextUrl.searchParams.get("path") || "/";
    revalidatePath(path);
    // Assuming the Etherscan API returns the price in a 'result' object
    return new Response(JSON.stringify(data.result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Error fetching Ethereum price:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
