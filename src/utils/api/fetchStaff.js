import fetcher from "@/utils/api/fetcher";

export const fetchStaffList = (OSAUnit) => {
    const params = {
        'populate': 'Image',
        'sort[0]': 'LastName',
        'sort[1]': 'FirstName',
        'pagination[pageSize]': 100
    }

    if (OSAUnit) {
        params[`filters[Unit][$eq]`] = OSAUnit
    }

    return ['staff-records', params]
}


export const fetchStaffDetails = (slug) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'Appearances',
        'populate[2]': 'Courses',
        'populate[3]': 'Entries',
        'populate[4]': 'Publications',
        'populate[5]': 'Entries.Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher(`staff-records`, params)
}
