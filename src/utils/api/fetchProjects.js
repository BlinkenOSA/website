import fetcher from "@/utils/api/fetcher";

export const fetchPartnerProjects = () => {
    const params = {
        'filters[Profiles][$contains]': 'Partner',
        'populate[0]': 'Image',
        'populate[1]': 'StartDate',
        'populate[2]': 'EndDate',
        'populate[3]': 'locations',
        'populate[4]': 'localizations',
        'populate[5]': 'localizations.Image'
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
        'populate[7]': 'localizations',
        'populate[8]': 'localizations.Content',
        'populate[9]': 'localizations.Content.Image',
        'populate[10]': 'localizations.Content.Images.Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher('projects', params)
}

export const fetchArchivalProjects = () => {
    const params = {
        'filters[Profiles][$contains]': 'Archival',
        'populate[0]': 'Image',
        'populate[1]': 'StartDate',
        'populate[2]': 'EndDate',
        'populate[3]': 'locations',
        'populate[4]': 'localizations',
        'populate[5]': 'localizations.Image'
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
        'populate[7]': 'localizations',
        'populate[8]': 'localizations.Content',
        'populate[9]': 'localizations.Content.Image',
        'populate[10]': 'localizations.Content.Images.Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher('projects', params)
}


export const fetchPublicHistoryProjects = () => {
    const params = {
        'filters[Profiles][$contains]': 'Public',
        'populate[0]': 'Image',
        'populate[1]': 'StartDate',
        'populate[2]': 'EndDate',
        'populate[3]': 'locations',
        'populate[4]': 'localizations',
        'populate[5]': 'localizations.Image'
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
        'populate[7]': 'localizations',
        'populate[8]': 'localizations.Content',
        'populate[9]': 'localizations.Content.Image',
        'populate[10]': 'localizations.Content.Images.Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher('projects', params)
}