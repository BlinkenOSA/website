import fetcher from "@/utils/api/fetcher";

export const fetchHero = () => {
    const params = {
        'sort[0]': 'rank:asc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'pagination[start]': 0,
        'pagination[limit]': 5
    }

    return fetcher('home-page-carousel-items', params)
}
