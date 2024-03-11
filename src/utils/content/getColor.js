const getColor = (profile) => {
    switch (profile) {
        case 'Academic':
            return 'aqua'
        case 'Archival':
            return 'orange'
        case 'Public':
            return 'sage'
        default:
            return 'mustard'
    }
}

export default getColor;