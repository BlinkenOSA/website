import fetcher from "@/utils/api/fetcher";
import addRelatedEntries from "@/utils/api/addRelatedEntries";

export const fetchCollectionHighlightsFrontPage = () => {
    const params = {
        'sort[0]': 'rank:asc',
        'sort[1]': 'Title:asc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'pagination[start]': 0,
        'pagination[limit]': 9,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'ContentTypes',
        'fields[3]': 'MaterialTypes',
        'fields[4]': 'Size',
        'fields[5]': 'ContentTypes',
        'fields[6]': 'Slug'
    }

    return fetcher('collections', params)
}


export const fetchCollectionHighlightsList = (max, contentType) => {
    const params = {
        'sort[0]': 'Title:asc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'pagination[start]': 0,
        'pagination[limit]': 100,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'ContentTypes',
        'fields[3]': 'MaterialTypes',
        'fields[4]': 'Size',
        'fields[5]': 'ContentTypes',
        'fields[6]': 'Slug'
    }

    if (contentType) {
        if (contentType !== 'All') {
            params['filters[ContentTypes][$contains]'] = contentType
        }
    }

    if (max) {
        params['pagination[limit]'] = max
    }

    return ['collections', params]
}

export const fetchCollectionHighlightsDetail = (slug, contentType) => {
    let params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Images.Image',
        'populate[4]': 'localizations',
        'populate[5]': 'localizations.Content',
        'populate[6]': 'localizations.Content.Image',
        'populate[7]': 'localizations.Content.Images.Image',
        'filters[Slug][$eq]': slug,
        'filters[ContentTypes][$contains]': contentType
    }

    params = addRelatedEntries(params, 8, 'collection')

    return fetcher(`collections`, params)
}