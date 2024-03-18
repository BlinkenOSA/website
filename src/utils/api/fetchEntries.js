import fetcher from "@/utils/api/fetcher";

export const fetchEntriesFrontPage = (locale) => {
    const params = {
        'sort[0]': 'rank:asc',
        'sort[1]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 9,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'Profile',
        'fields[4]': 'EntryType',
        'fields[5]': 'EventType',
        'fields[6]': 'OriginalCreationDate',
        'fields[7]': 'createdAt'
    }

    return fetcher('entries', params)
}

export const fetchEntriesDetail = (id) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Images.Image',
        'populate[4]': 'AuthorStaff',
        'populate[5]': 'AuthorStaff.Image'
    }

    return fetcher(`entries/${id}`, params)
}