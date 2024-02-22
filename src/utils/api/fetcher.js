const fetcher = (url, params) => {
    // Authentication
    let headers = new Headers();
    headers.set('Authorization', `bearer ${process.env.STRAPI_API_KEY}`)

    const urlParams = new URLSearchParams(params)

    console.log(`${process.env.STRAPI_URL}/${url}?${urlParams}`)

    return fetch(`${process.env.STRAPI_URL}/${url}?${urlParams}`, {
        headers: headers
    })
}

export default fetcher;