import dayjs from "dayjs";
import fetcher from "@/utils/api/fetcher";

export const fetchCurrentInternsList = (OSAUnits) => {
    const params = {
        'populate': 'Image',
        'sort[0]': 'Name',
        'filters[EndDate][$gte]': dayjs().format('YYYY-MM-DD'),
        'pagination[pageSize]': 100
    }

    return ['interns', params]
}

export const fetchPastInternsList = (page) => {
    const params = {
        'populate': 'Image',
        'sort[0]': 'Name',
        'filters[EndDate][$lte]': dayjs().format('YYYY-MM-DD'),
        'pagination[page]': 1,
        'pagination[pageSize]': 12,
    }

    if (page) {
        params['pagination[page]'] = page
    }

    return ['interns', params]
}


export const fetchInternDetails = (slug) => {
    const params = {
        'populate[0]': 'Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher(`interns`, params)
}