import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
  const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${etherscanApiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const path = "/api/ethPrice";
    revalidatePath(path);

    console.log("ROUTE ETH PRICE: ", data.result.ethusd);

    return NextResponse.json({
      ethPrice: data.result.ethusd,
      ethUsdTime: data.result.ethusd_timestamp,
    });
  } catch (error) {
    console.error("Error fetching Ethereum price:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
