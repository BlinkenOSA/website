import fetcher from "@/utils/api/fetcher";

export const fetchPartnerProjects = () => {
    const params = {
        'filters[Profiles][$contains]': 'Partner',
        'populate': 'Image'
    }

    return fetcher('projects', params)
}

export const fetchArchivalProjects = () => {
    const params = {
        'filters[Profiles][$contains]': 'Archival',
        'populate': 'Image'
    }

    return fetcher('projects', params)
}

export const fetchPublicHistoryProjects = () => {
    const params = {
        'filters[Profiles][$contains]': 'Public',
        'populate': 'Image'
    }

    return fetcher('projects', params)
}