import fetcher from "@/utils/api/fetcher";

export const fetchJobs = (jobType) => {
    const params = {
        'sort[0]': 'createdAt:desc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image'
    }

    if (jobType) {
        params[`filters[JobType][$eq]`] = jobType
    }

    return ['jobs', params]
}

export const fetchJobDetail = (slug) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher(`jobs`, params)
}