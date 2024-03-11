import fetcher from "@/utils/api/fetcher";

export const fetchPartnerProjects = () => {
    const params = {
        'filters[ProjectType][$eq]': 'Partner',
        'populate': 'Image'
    }

    return fetcher('projects', params)
}
