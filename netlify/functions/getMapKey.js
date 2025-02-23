export async function handler () {
    return {
        statusCode: 200,
        body: JSON.stringify({ apiKey: process.env.GOOGLE_MAPS_API_KEY })
    };
}