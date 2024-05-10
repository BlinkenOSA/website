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

export const fetchPartnerProjectsDetail = (slug) => {
    const params = {
        'filters[Profiles][$contains]': 'Partner',
        'populate[0]': 'Image',
        'populate[1]': 'StartDate',
        'populate[2]': 'EndDate',
        'populate[3]': 'Content',
        'populate[4]': 'Content.Image',
        'populate[5]': 'Content.Images.Image',
        'populate[6]': 'Content.Image.Image',
        'filters[Slug][$eq]': slug
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

export const fetchArchivalProjectsDetail = (slug) => {
    const params = {
        'filters[Profiles][$contains]': 'Archival',
        'populate[0]': 'Image',
        'populate[1]': 'StartDate',
        'populate[2]': 'EndDate',
        'populate[3]': 'Content',
        'populate[4]': 'Content.Image',
        'populate[5]': 'Content.Images.Image',
        'populate[6]': 'Content.Image.Image',
        'filters[Slug][$eq]': slug
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

export const fetchPublicHistoryProjectsDetail = (slug) => {
    const params = {
        'filters[Profiles][$contains]': 'Public',
        'populate[0]': 'Image',
        'populate[1]': 'StartDate',
        'populate[2]': 'EndDate',
        'populate[3]': 'Content',
        'populate[4]': 'Content.Image',
        'populate[5]': 'Content.Images.Image',
        'populate[6]': 'Content.Image.Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher('projects', params)
}