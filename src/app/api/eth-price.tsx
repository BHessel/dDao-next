import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const API_KEY = process.env.ETHERSCAN_API_KEY; // Set this in your .env.local file
  const apiUrl = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_KEY}`;

  console.log("inside HANDLER");
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("ETH PRICE: ", data);
    res.status(200).json({ ethPrice: data.result.ethusd });
  } catch (error) {
    res.status(500).json({ error: "Error fetching Ethereum price" });
  }
}
