import fetcher from "@/utils/api/fetcher";
import dayjs from "dayjs";

export const fetchPrograms = (type='All', language, hostingType) => {
	const params = {
		'fields[0]': 'Title',
		'fields[1]': 'StartDate',
		'fields[2]': 'EndDate',
		'fields[3]': 'EventType',
		'fields[4]': 'Language',
		'fields[5]': 'HostingType',
		'fields[6]': 'Profile',
		'fields[7]': 'CardText',
		'fields[8]': 'RegistrationLink',
		'fields[9]': 'DescriptionShort',
		'fields[10]': 'Slug',
		'populate[0]': 'Image',
		'sort[0]': 'StartDate:desc',
		'pagination[start]': 0,
		'pagination[limit]': 100,
	}

	if (type !== '') {
		params['filters[Profile][$eq]'] = type
	}

	if (language) {
		params['filters[Language][$eq]'] = language
	}

	if (hostingType) {
		params['filters[HostingType][$eq]'] = hostingType
	}

	return ['events', params]
}
