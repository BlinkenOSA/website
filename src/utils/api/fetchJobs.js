import fetcher from "@/utils/api/fetcher";

export const fetchJobs = () => {
    const params = {
        'sort[0]': 'createdAt:desc',
        'populate[0]': 'Image'
    }

    return fetcher('jobs', params)
}
