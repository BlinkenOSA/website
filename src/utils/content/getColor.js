const getColor = (profile) => {
    switch (profile) {
        case 'Archivum':
            return 'mustard'
        case 'Academic':
            return 'aqua'
        case 'Collection':
            return 'orange'
        case 'Public':
            return 'sage'
        default:
            return 'mustard'
    }
}

export default getColor;