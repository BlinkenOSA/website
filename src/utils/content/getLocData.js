const getLocData = (data, label, lang) => {
    if (lang !== 'en') {
        if ('localizations' in data) {
            const localizationData = data['localizations']['data'].filter(c => c['attributes']['locale'] === lang)
            if (localizationData.length > 0) {
                const locData = localizationData[0]['attributes']
                return locData[label] ? locData[label] : data[label]
            }
        }
    }

    return data[label]
}

export default getLocData;