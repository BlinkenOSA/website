import fetcher from "@/utils/api/fetcher";
import {toCapitalize} from "@/utils/toCapitalize";
import fetcherSlug from "@/utils/api/fetcherSlug";
import addRelatedEntries from "@/utils/api/addRelatedEntries";

export const fetchNewsFrontPage = () => {
    const params = {
        'sort[0]': 'OriginalCreationDate:desc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'pagination[start]': 0,
        'pagination[limit]': 9,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'Profile',
        'fields[3]': 'ActivityType',
        'fields[4]': 'Slug',
        'fields[5]': 'OriginalCreationDate',
        'fields[6]': 'createdAt'
    }

    return fetcher('news-items', params)
}


export const fetchNewsDetail = (id) => {
    let params = {
        'populate[0]': 'Image',
        'populate[1]': 'Content',
        'populate[2]': 'Content.Image',
        'populate[3]': 'Content.Image.Image',
        'populate[4]': 'Content.Images.Image',
        'populate[5]': 'AuthorStaff',
        'populate[6]': 'AuthorStaff.Image',
        'populate[8]': 'localizations',
        'populate[9]': 'localizations.Content',
        'populate[10]': 'localizations.Content.Image',
        'populate[11]': 'localizations.Content.Image.Image',
        'populate[12]': 'localizations.Content.Images.Image',
        'populate[13]': 'Content.PDF',
        'populate[14]': 'localizations.Content.PDF'
    }

    params = addRelatedEntries(params, 15, 'news')

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`news-items`, params)
    } else {
        return fetcher(`news-items/${id}`, params)
    }
}

export const fetchNewsList = (page, profile, activityType) => {
    const params = {
        'sort[0]': 'createdAt:desc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'pagination[page]': 1,
        'pagination[pageSize]': 12,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'Profile',
        'fields[4]': 'ActivityType',
        'fields[5]': 'OriginalCreationDate',
        'fields[6]': 'createdAt',
        'fields[7]': 'Slug'
    }

    if (profile) {
        if (profile === 'all') {
            params['filters[Profile][$eq]'] = profile
        } else {
            params['filters[Profile][$eq]'] = toCapitalize(profile)
        }
    }

    if (activityType) {
        params['filters[ActivityType][$eq]'] = toCapitalize(activityType)
    }

    if (page) {
        params['pagination[page]'] = page
    }

    return ['news-items', params]
}