const addRelatedEntries = (params, fromIndex, type) => {
	let index = fromIndex;
	const newParams = {...params};

	const relationTypes = {
		'collection': ['RelatedCollections', 'RelatedCollections.Image'],
		'entry': ['RelatedEntries', 'RelatedEntries.Image'],
		'event': ['RelatedEvents', 'RelatedEvents.Image'],
		'news': ['RelatedNews', 'RelatedNews.Image'],
		'page': ['RelatedPages', 'RelatedPages.CardImage'],
		'project': ['RelatedProjects', 'RelatedProjects.Image']
	}

	for (const [key, value] of Object.entries(relationTypes)) {
		if (type === key) {
			newParams[`populate[${index}]`] = `${value[0]}Source`;
			newParams[`populate[${index+1}]`] = value[1].replace(value[0], `${value[0]}Source`);
			newParams[`populate[${index+2}]`] = `${value[0]}Destination`;
			newParams[`populate[${index+3}]`] = value[1].replace(value[0], `${value[0]}Destination`);
			index += 4;
		} else {
			newParams[`populate[${index}]`] = value[0];
			newParams[`populate[${index+1}]`] = value[1];
			index += 2;
		}
	}

	console.log(newParams);
	return newParams
}

export default addRelatedEntries;