const getImageData = (imageData, size='large') => {
    if (imageData['data'] === null) {
        return undefined
    }

    let data={};

    if (imageData['data']['attributes']['formats'] !== null) {
        if (size in imageData['data']['attributes']['formats']) {
            data['url'] = imageData['data']['attributes']['formats'][size]['url']
            data['width'] = imageData['data']['attributes']['formats'][size]['width']
            data['height'] = imageData['data']['attributes']['formats'][size]['height']
        } else {
            data['url'] = imageData['data']['attributes']['url']
            data['width'] = imageData['data']['attributes']['width']
            data['height'] = imageData['data']['attributes']['height']
        }
    } else {
        data['url'] = imageData['data']['attributes']['url']
        data['width'] = imageData['data']['attributes']['width']
        data['height'] = imageData['data']['attributes']['height']
    }

    const server = process.env.NEXT_PUBLIC_SOLR_STPAPI_DOMAIN;
    data['url'] = `${server}${data['url']}`

    return data
}

export default getImageData;