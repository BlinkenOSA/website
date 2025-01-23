import fetcher from "@/utils/api/fetcher";
import dayjs from "dayjs";
import fetcherSlug from "@/utils/api/fetcherSlug";
import addRelatedEntries from "@/utils/api/addRelatedEntries";

export const fetchEventsFrontPage = () => {
    const params = {
        'sort[0]': 'StartDate:asc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'pagination[start]': 0,
        'pagination[limit]': 4,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'StartDate',
        'fields[3]': 'EndDate',
        'fields[4]': 'EventType',
        'fields[5]': 'Profile',
        'fields[6]': 'Slug',
        'filters[$or][0][StartDate][$gte]': dayjs().format('YYYY-MM-DD'),
        'filters[$or][1][EndDate][$gte]': dayjs().format('YYYY-MM-DD')
    }

    return fetcher('events', params)
}

export const fetchEventDetail = (id) => {
    let params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Image.Image',
        'populate[4]': 'Content.Images.Image',
        'populate[5]': 'localizations',
        'populate[6]': 'localizations.Content',
        'populate[7]': 'localizations.Content.Image',
        'populate[8]': 'localizations.Content.Image.Image',
        'populate[9]': 'localizations.Content.Images.Image',
        'populate[10]': 'localizations.Content.Images.Image',
        'populate[11]': 'Content.PDF'
    }

    params = addRelatedEntries(params, 12, 'event')

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`events`, params)
    } else {
        return fetcher(`events/${id}`, params)
    }
}