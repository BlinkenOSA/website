import fetcher from "@/utils/api/fetcher";

export const fetchEntriesFrontPage = () => {
    const params = {
        'sort[0]': 'rank:asc',
        'sort[1]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 3,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'Profile',
        'fields[4]': 'EntryType',
        'fields[5]': 'EventType',
        'fields[6]': 'createdAt'
    }

    return fetcher('entries', params)
}