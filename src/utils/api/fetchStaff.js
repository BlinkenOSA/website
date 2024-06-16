import fetcher from "@/utils/api/fetcher";

export const fetchStaffList = (OSAUnit) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
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
        'populate[6]': 'localizations',
        'populate[7]': 'localizations.Image',
        'populate[8]': 'Appearances.localizations',
        'populate[9]': 'Courses.localizations',
        'populate[10]': 'Entries.localizations',
        'populate[11]': 'Publications.localizations',
        'populate[12]': 'Entries.localizations.Image',
        'filters[Slug][$eq]': slug
    }

    return fetcher(`staff-records`, params)
}
