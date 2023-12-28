export async function GET() {
  const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
  const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${etherscanApiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Assuming the Etherscan API returns the price in a 'result' object
    return new Response(JSON.stringify(data.result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching Ethereum price:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
