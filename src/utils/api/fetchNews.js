import fetcher from "@/utils/api/fetcher";

export const fetchNewsFrontPage = () => {
    const params = {
        'sort[0]': 'rank:desc',
        'sort[1]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 6,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'Profile',
        'fields[3]': 'EventType',
        'fields[4]': 'createdAt',
        'filters[EntryType][$eq]': 'News',
    }

    return fetcher('entries', params)
}
