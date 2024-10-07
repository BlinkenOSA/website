import fetcher from "@/utils/api/fetcher";
import {toCapitalize} from "@/utils/toCapitalize";
import fetcherSlug from "@/utils/api/fetcherSlug";

export const fetchEntriesFrontPage = () => {
    const params = {
        'sort[0]': 'OriginalCreationDate:desc',
        'sort[1]': 'createdAt:desc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'pagination[start]': 0,
        'pagination[limit]': 9,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'Profile',
        'fields[4]': 'EntryType',
        'fields[5]': 'OriginalCreationDate',
        'fields[6]': 'createdAt',
        'fields[7]': 'Slug'
    }

    return fetcher('entries', params)
}

export const fetchEntriesDetail = (id) => {
    const params = {
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
        'populate[13]': 'Content.PDF'
    }

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`entries`, params)
    } else {
        return fetcher(`entries/${id}`, params)
    }
}

export const fetchEntriesList = (page, profile, entryType) => {
    const params = {
        'sort[0]': 'OriginalCreationDate:desc',
        'sort[1]': 'createdAt:desc',
        'populate[0]': 'Image',
        'populate[1]': 'localizations',
        'populate[2]': 'localizations.Image',
        'pagination[page]': 1,
        'pagination[pageSize]': 12,
        'fields[0]': 'Title',
        'fields[1]': 'CardText',
        'fields[2]': 'Profile',
        'fields[4]': 'EntryType',
        'fields[5]': 'OriginalCreationDate',
        'fields[6]': 'createdAt',
        'fields[7]': 'Slug',
    }

    if (profile) {
        if (profile === 'all') {
            params['filters[Profile][$eq]'] = profile
        } else {
            params['filters[Profile][$eq]'] = toCapitalize(profile)
        }
    }

    if (entryType) {
        params['filters[EntryType][$eq]'] = toCapitalize(entryType)
    }

    if (page) {
        params['pagination[page]'] = page
    }

    return ['entries', params]
}