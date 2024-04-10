const getImageUrl = (imageData, size='large') => {
    if (imageData['data'] === null) {
        return undefined
    }

    let url;

    if (imageData['data']['attributes']['formats'] !== null) {
        if (size in imageData['data']['attributes']['formats']) {
            url = imageData['data']['attributes']['formats'][size]['url']
        } else {
            url = imageData['data']['attributes']['url']
        }
    } else {
        url = imageData['data']['attributes']['url']
    }


    const server = process.env.NEXT_PUBLIC_SOLR_STPAPI_DOMAIN;
    return `${server}${url}`
}

export default getImageUrl;