const getLocalizedContent = (content, lang) => {
	if (lang !== 'en') {
		if ('localizations' in content) {
			const localizationData = content['localizations']['data'].filter(c => c['attributes']['locale'] === lang)
			if (localizationData.length > 0) {
				return localizationData[0]['attributes']
			}
		}
	}

	return content
}

export default getLocalizedContent