import fetcher from "@/utils/api/fetcher";

export const fetchHero = () => {
    const params = {
        'sort[0]': 'FrontPageSequence:asc',
        'populate': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 5
    }

    return fetcher('home-page-carousel-items', params)
}
