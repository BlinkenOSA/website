import dayjs from "dayjs";
import fetcher from "@/utils/api/fetcher";

export const fetchCurrentFellowsList = (OSAUnits) => {
    const params = {
        'populate': 'Image',
        'sort[0]': 'LastName',
        'sort[1]': 'FirstName',
        'filters[EndDate][$gte]': dayjs().format('YYYY-MM-DD'),
        'pagination[pageSize]': 100
    }

    return ['fellows', params]
}

export const fetchPastFellowsList = (OSAUnits) => {
    const params = {
        'populate': 'Image',
        'sort[0]': 'LastName',
        'sort[1]': 'FirstName',
        'filters[EndDate][$lte]': dayjs().format('YYYY-MM-DD'),
        'pagination[pageSize]': 100
    }

    return ['fellows', params]
}


export const fetchFellowDetails = (slug) => {
    const params = {
        'populate[0]': 'Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher(`fellows`, params)
}