
const getImageUrlSearch = (imageData, size='large') => {
    if (!imageData) {
        return undefined
    }

    if (imageData['data'] === null) {
        return undefined
    }

    let url;

    if (imageData['formats'] !== null) {
        if ('formats' in imageData) {
            if (size in imageData['formats']) {
                url = imageData['formats'][size]['url']
            }
        }
    }

    if (!url) {
        url = imageData['url']
    }

    const server = process.env.NEXT_PUBLIC_STPAPI_DOMAIN;
    return `${server}${url}`
}

export default getImageUrlSearch;