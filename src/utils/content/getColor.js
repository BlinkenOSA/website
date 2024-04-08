const getColor = (profile) => {
    switch (profile) {
        case 'Archivum':
            return 'mustard'
        case 'Academic':
        case 'Academics':
            return 'aqua'
        case 'Collection':
        case 'Collections':
            return 'orange'
        case 'Public':
        case 'Public Programs':
            return 'sage'
        default:
            return 'mustard'
    }
}

export default getColor;