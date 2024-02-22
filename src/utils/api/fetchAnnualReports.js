import fetcher from "@/utils/api/fetcher";

export const fetchAnnualReports = () => {
    const params = {
        'sort[0]': 'Year:desc',
        'populate': 'Image'
    }

    return fetcher('annual-reports', params)
}
