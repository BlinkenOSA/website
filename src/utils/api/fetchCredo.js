import fetcher from "@/utils/api/fetcher";

export const fetchCredo = ({locale}) => {
	const params = {
		'sort[0]': 'rank:asc',
		'sort[1]': 'createdAt:desc',
		'fields[0]': 'WeAre',
		'fields[1]': 'CredoText',
		'fields[2]': 'Type',
	}

	return fetcher('credos', params)
}
