import fetcher from "@/utils/api/fetcher";
import dayjs from "dayjs";
import fetcherSlug from "@/utils/api/fetcherSlug";

export const fetchEventsFrontPage = () => {
    const params = {
        'sort[0]': 'rank:asc',
        'sort[1]': 'StartDate:desc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'pagination[start]': 0,
        'pagination[limit]': 4,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'StartDate',
        'fields[3]': 'EventType',
        'fields[4]': 'Profile',
        'fields[5]': 'Slug',
        'filters[StartDate][$gte]': dayjs().format('YYYY-MM-DD')
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

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`news-items`, params)
    } else {
        return fetcher(`news-items/${id}`, params)
    }
}