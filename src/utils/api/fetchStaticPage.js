import fetcher from "@/utils/api/fetcher";

export const fetchStaticPage = (id, locale) => {
    console.log(id)

    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Images.Image',
    }

    return fetcher(`static-pages/${id}`, params)
}
