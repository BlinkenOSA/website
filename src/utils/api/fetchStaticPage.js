import fetcher from "@/utils/api/fetcher";
import addRelatedEntries from "@/utils/api/addRelatedEntries";

export const fetchStaticPage = (slug, locale) => {
    let params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Images.Image',
        'populate[4]': 'CardImage',
        'populate[5]': 'localizations',
        'populate[6]': 'localizations.Content',
        'populate[7]': 'localizations.Content.Image',
        'populate[8]': 'localizations.Content.Images.Image',
        'populate[9]': 'Content.PDF',
        'filters[Slug][$eq]': slug
    }

    params = addRelatedEntries(params, 10, 'page')

    return fetcher(`static-pages`, params)
}
