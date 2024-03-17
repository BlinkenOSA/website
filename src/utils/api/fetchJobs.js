export const fetchJobs = (jobType) => {
    const params = {
        'sort[0]': 'createdAt:desc',
        'populate[0]': 'Image'
    }

    if (jobType) {
        if (jobType.length === 1) {
            params[`filters[JobType][$eq]`] = jobType[0]
        } else {
            jobType.map((jt, idx) => {
                params[`filters[$or][${idx}][JobType][$eq]`] = jt
            })
        }
    }

    return ['jobs', params]
}
