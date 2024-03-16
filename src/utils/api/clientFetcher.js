const fetcher = (url, params) => {
    // Authentication
    let headers = new Headers();
    headers.set('Authorization', `bearer ${process.env.STRAPI_API_KEY}`)

    const urlParams = new URLSearchParams(params)

    return fetch(`/api/${url}?${urlParams}`, {
        headers: headers
    }).then(r => r.json())
}

export default fetcher;