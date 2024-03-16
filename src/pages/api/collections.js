export default async function handler(req, res) {
    // Authentication
    let headers = new Headers();
    headers.set('Authorization', `bearer ${process.env.STRAPI_API_KEY}`)

    const urlParams = new URLSearchParams(req.query)

    const results = await fetch(`${process.env.STRAPI_URL}/collections?${urlParams}`, {
        headers: headers
    }).then(r => r.json())

    return res.status(200).json(results)
}