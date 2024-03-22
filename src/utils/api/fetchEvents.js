import fetcher from "@/utils/api/fetcher";

export const fetchEventsFrontPage = (locale) => {
    const params = {
        'sort[0]': 'rank:asc',
        'sort[1]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 3,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'StartDate',
        'fields[3]': 'EventType',
        'fields[4]': 'Profile'
    }

    return fetcher('events', params)
}

export const fetchEventDetail = (id) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Images.Image',
    }

    return fetcher(`events/${id}`, params)
}