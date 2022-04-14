import dotenv from 'dotenv'
import fetch from "node-fetch"
dotenv.config()

const auth = Buffer.from(
    process.env.WP_HEADLESS_GRAPHQL_AUTH_USER + ':' + process.env.WP_HEADLESS_GRAPHQL_AUTH_PASS
).toString('base64');

export default async function wp(query, variables) {
    try {
        const res = await fetch(process.env.WP_HEADLESS_GRAPHQL_URI, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${auth}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables }),
        });
        const data = await res.json();
        return data
    } catch (error) {
        console.log('error', error);
        return;
    }
}