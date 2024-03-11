import dayjs from "dayjs";

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


const getDateString = (dateString, format, type = 'event') => {
    if (dateString === null) {
        return ''
    }

    let template = ''
    switch (type) {
        case 'event':
            template = 'h:mm A MMMM DD'
            break
        case 'eventFull':
            template = 'h:mm A MMMM DD YYYY'
            break
        case 'news':
            template = 'h:mm A · DD/MM/YYYY'
            break
        case 'date_only':
            template = 'YYYY-MM-DD'
            break
    }

    const dateTime = dayjs(dateString, format)
    return dateTime.format(template)
}

export default getDateString;