import fetcher from "@/utils/api/fetcher";

export const fetchStaticPage = (slug, locale) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Images.Image',
        'populate[4]': 'CardImage',
        'filters[Slug][$eq]': slug
    }

    return fetcher(`static-pages`, params)
}
