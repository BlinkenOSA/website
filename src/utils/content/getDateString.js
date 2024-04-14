import dayjs from "dayjs";

var customParseFormat = require('dayjs/plugin/customParseFormat')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone')

dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

const getDateString = (dateString, format, type = 'event') => {
    let dateTime;

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

    if (format) {
        dateTime = dayjs(dateString)
    } else {
        dateTime = dayjs(dateString, format)
    }

    const dayjsHungary = dateTime.tz('Europe/Berlin')
    return dayjsHungary.format(template)
}

export default getDateString;