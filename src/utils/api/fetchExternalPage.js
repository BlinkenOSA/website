import fetcher from "@/utils/api/fetcher";

export const fetchExternalPage = (id, locale) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Images.Image',
        'populate[4]': 'CardImage',
        'populate[5]': 'localizations',
        'populate[6]': 'localizations.Content',
        'populate[7]': 'localizations.Content.Image',
        'populate[8]': 'localizations.Content.Images.Image'
    }

    return fetcher(`external-page-jumps/${id}`, params)
}
