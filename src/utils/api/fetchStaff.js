import fetcher from "@/utils/api/fetcher";

export const fetchStaffList = (OSAUnit) => {
    const params = {
        'populate': 'Image',
        'sort[0]': 'Name'
    }

    if (OSAUnit) {
        params['filters[ProjectType][$eq]'] = OSAUnit
    }

    return fetcher('staff-records', params)
}
