import fetcher from "@/utils/api/fetcher";

export const fetchPartnerProjects = () => {
    const params = {
        'filters[Profiles][$contains]': 'Partner',
        'populate[0]': 'Image',
        'populate[1]': 'StartDate',
        'populate[2]': 'EndDate'
    }

    return fetcher('projects', params)
}

export const fetchArchivalProjects = () => {
    const params = {
        'filters[Profiles][$contains]': 'Archival',
        'populate[0]': 'Image',
        'populate[1]': 'StartDate',
        'populate[2]': 'EndDate'
    }

    return fetcher('projects', params)
}

export const fetchPublicHistoryProjects = () => {
    const params = {
        'filters[Profiles][$contains]': 'Public',
        'populate[0]': 'Image',
        'populate[1]': 'StartDate',
        'populate[2]': 'EndDate'
    }

    return fetcher('projects', params)
}