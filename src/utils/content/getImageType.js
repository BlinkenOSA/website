const getImageType = (imageData) => {
    if (imageData['data'] === null) {
        return 'landscape'
    } else {
        const width = imageData['data']['attributes']['width']
        const height = imageData['data']['attributes']['height']

        if (width > height) {
            return 'landscape'
        }

        if (height > width) {
            return 'portrait'
        }

        if (width === height) {
            return 'square'
        }
    }
}

export default getImageType;