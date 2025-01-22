import getImageUrl from "@/utils/content/getImageUrl";
import id from "@/pages/news/[id]";
import {menuConfig} from "@/config/menuConfig";

const getRelatedMaterials = (id, data) => {
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

    const getColorDefine = (data, pageType) => {
        switch (pageType) {
            case 'collection':
                return 'Collections'
            case 'entry':
            case 'event':
            case 'news':
                return data['Profile'];
            case 'page':
                return 'Archivum';
            case 'project':
                return data['Profiles'][0]
        }
    }

    const getIconDefine = (data, pageType) => {
        switch (pageType) {
            case 'collection':
                return 'Collections News'
            case 'entry':
                return data['EntryType']
            case 'event':
                return data['EventType']
            case 'news':
                return data['ActivityType'];
            case 'page':
                return 'Archivum News';
            case 'project':
                return 'Partner Projects'
        }
    }

    const getURL = (data, pageType) => {
        const suffix = data['Slug'] ? data['Slug'] : id

        switch (pageType) {
            case 'collection':
                const getCollectionsURL = () => {
                    switch (data['ContentTypes'][0]) {
                        case 'Curated':
                            return 'curated-collections'
                        case 'Digital':
                        case 'Online':
                            return 'online-collections'
                        case 'AV':
                            return 'av-collections'
                    }
                }
                return `/collections/${getCollectionsURL()}/${suffix}`
            case 'entry':
                const url = data['EntryType'].toLowerCase();
                return `/entries/${url}/${suffix}`
            case 'event':
                return `/events/${suffix}`
            case 'news':
                return `/news/${suffix}`
            case 'page':
                const slug = data['Slug']
                let staticPageLink = ''

                menuConfig.forEach(mainMenu => {
                    mainMenu.menuItems.forEach(menuItem => {
                        if (menuItem.hasOwnProperty('submenu')) {
                            menuItem['submenu'].forEach(submenu => {
                                if (submenu['url'].includes(slug)) {
                                    staticPageLink = submenu['url']
                                }
                            })
                        } else {
                            if (menuItem['url'].includes(slug)) {
                                staticPageLink = menuItem['url']
                            }
                        }
                    })
                })

                return staticPageLink
            case 'project':
                const getProjectURL = () => {
                    switch (data['Profiles'][0]) {
                        case 'Partner':
                            return '/about-us/partner-projects'
                        case 'Archival':
                            return '/collections/archival-projects'
                        case 'Public':
                            return '/public-programs/public-history-projects'
                    }
                }
                return `${getProjectURL()}/${suffix}`
        }
    }

    dataSources.forEach(dataSource => {
        if (data.hasOwnProperty(dataSource)) {
            const relatedMaterials = data[dataSource]['data']
            const pageType = pageTypeConfig[dataSource]
            if (relatedMaterials.length > 0) {
                relatedMaterials.forEach(rm => {
                    const result = {}
                    result['Title'] = rm['attributes']['Title']
                    result['URL'] = getURL(rm['attributes'], pageType)
                    result['CardText'] = rm['attributes']['CardText']
                    result['Type'] = pageType
                    result['Slug'] = rm['attributes']['Slug']
                    result['ColorDefine'] = getColorDefine(rm['attributes'], pageType)
                    result['IconDefine'] = getIconDefine(rm['attributes'], pageType)
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