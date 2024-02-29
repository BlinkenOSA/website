import fetcher from "@/utils/api/fetcher";

export const fetchCollectionHighlightsFrontPage = () => {
    const params = {
        'sort[0]': 'FrontPageSequence:desc',
        'sort[1]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 6,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'ContentTypes',
        'fields[3]': 'MaterialTypes'
    }

    return fetcher('collections', params)
}
