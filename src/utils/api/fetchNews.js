import fetcher from "@/utils/api/fetcher";

export const fetchNewsFrontPage = () => {
    const params = {
        'sort[0]': 'rank:asc',
        'sort[1]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 6,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'Profile',
        'fields[3]': 'ActivityType',
        'fields[4]': 'createdAt'
    }

    return fetcher('news-items', params)
}


export const fetchNewsDetail = (id) => {
    const params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Images.Image',
        'populate[4]': 'AuthorStaff',
        'populate[5]': 'AuthorStaff.Image'
    }

    return fetcher(`news-items/${id}`, params)
}