import fetcher from "@/utils/api/fetcher";

export const fetchPrograms = (type='all', language, hostingType) => {
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
		'populate[0]': 'Image'
	}

	if (type !== 'all') {
		params['filters[Profile][$eq]'] = type
	}

	if (language) {
		params['filters[Language][$eq]'] = language
	}

	if (hostingType) {
		params['filters[HostingType][$eq]'] = hostingType
	}

	return fetcher('projects', params)
}
