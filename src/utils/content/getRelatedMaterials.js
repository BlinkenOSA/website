import getImageUrl from "@/utils/content/getImageUrl";

const getRelatedMaterials = (data, pageType) => {
    const relatedMaterialsData = []

    const dataSources = [
        'RelatedCollections', 'RelatedCollectionsSource', 'RelatedCollectionsDestination',
        'RelatedEntries', 'RelatedEntriesSource', 'RelatedEntriesDestination',
        'RelatedEvents', 'RelatedEventsSource', 'RelatedEventsDestination',
        'RelatedNews', 'RelatedNewsSource', 'RelatedNewsDestination',
        'RelatedPages', 'RelatedPagesSource', 'RelatedPagesDestination',
        'RelatedProjects', 'RelatedProjectsSource', 'RelatedProjectsDestination'
    ]

    const pageTypeConfig = {
        RelatedCollections: 'collection',
        RelatedCollectionsSource: 'collection',
        RelatedCollectionsDestination: 'collection',
        RelatedEntries: 'entry',
        RelatedEntriesSource: 'entry',
        RelatedEntriesDestination: 'entry',
        RelatedEvents: 'event',
        RelatedEventsSource: 'event',
        RelatedEventsDestination: 'event',
        RelatedNews: 'news',
        RelatedNewsSource: 'news',
        RelatedNewsDestination: 'news',
        RelatedPages: 'page',
        RelatedPagesSource: 'page',
        RelatedPagesDestination: 'page',
        RelatedProjects: 'project',
        RelatedProjectsSource: 'project',
        RelatedProjectsDestination: 'project'
    }

    dataSources.forEach(dataSource => {
        if (data.hasOwnProperty(dataSource)) {
            const relatedMaterials = data[dataSource]['data']
            if (relatedMaterials.length > 0) {
                relatedMaterials.forEach(rm => {
                    const result = {}
                    result['Title'] = rm['attributes']['Title']
                    result['CardText'] = rm['attributes']['CardText']
                    result['Type'] = pageTypeConfig[dataSource]
                    result['Slug'] = rm['attributes']['Slug']
                    result['createdAt'] = rm['attributes']['createdAt']

                    if (dataSource.includes('RelatedPages')) {
                        result['Image'] = getImageUrl(rm['attributes']['CardImage'], 'small')
                    } else {
                        result['Image'] = getImageUrl(rm['attributes']['Image'], 'small')
                    }

                    relatedMaterialsData.push(result)
                })
            }
        }
    })

    return relatedMaterialsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export default getRelatedMaterials;