const getImageUrl = (imageData, size='large') => {
    const url = imageData['data']['attributes']['formats'][size]['url']

    const server = process.env.NEXT_PUBLIC_SOLR_STPAPI_DOMAIN;
    return `${server}/${url}`
}

export default getImageUrl;