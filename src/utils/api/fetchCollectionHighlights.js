import fetcher from "@/utils/api/fetcher";

export const fetchCollectionHighlightsList = (max) => {
    const params = {
        'sort[0]': 'rank:asc',
        'sort[1]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'ContentTypes',
        'fields[3]': 'MaterialTypes',
        'fields[4]': 'Size',
        'fields[5]': 'ContentTypes'
    }

    if (max) {
        params['pagination[limit]'] = max
    }

    return fetcher('collections', params)
}
