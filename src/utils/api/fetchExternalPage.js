import fetcher from "@/utils/api/fetcher";

export const fetchExternalPage = (id, locale) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'CardImage'
    }

    return fetcher(`external-page-jumps/${id}`, params)
}
