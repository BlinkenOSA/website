import fetcher from "@/utils/api/fetcher";

export const fetchCollectionHighlightsFrontPage = (locale) => {
    const params = {
        'sort[0]': 'rank:asc',
        'sort[1]': 'Title:asc',
        'populate[0]': 'Image',
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

export const fetchCollectionHighlightsDetail = (slug) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Images.Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher(`collections`, params)
}