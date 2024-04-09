import dayjs from "dayjs";

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


const getDateString = (dateString, format='YYYY-MM-DDTHH:MM:SS', type = 'event') => {
    if (dateString === null) {
        return ''
    }

    let template = ''
    switch (type) {
        case 'event':
            template = 'h:mm A, MMMM DD'
            break
        case 'eventFull':
            template = 'MMMM D, YYYY - h:mm A'
            break
        case 'fellow':
            template = 'MMMM/YYYY'
            break
        case 'news':
            template = 'DD/MM/YYYY'
            break
        case 'date_only':
            template = 'DD/MM/YYYY'
            break
    }

    const dateTime = dayjs(dateString, format)
    return dateTime.format(template)
}

export default getDateString;