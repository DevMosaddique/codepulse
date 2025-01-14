import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapedAmazonProduct(url: string) {
    if(!url) return;

    // BrightData proxy configuration
    const username = process.env.BRIGHT_DATA_USERNAME;
    const password = process.env.BRIGHT_DATA_PASSWORD;
    const port = 33335;
    const session_id = (1000000 * Math.random()) | 0;

    // BrightData proxy
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password: password!,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }

    //
    try {
        // fetch the product data
        const response = await axios.get(url, options);

        console.log(response.data)
    } catch (error: any) {
        throw new Error(`Failed to scrape and store product: ${error.message}`)
    }
}