import dayjs from "dayjs";

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


const getDateString = (dateString, format, type = 'event') => {
    let template = ''
    switch (type) {
        case 'event':
            template = 'h:mm A MMMM DD'
            break
        case 'news':
            template = 'h:mm A · DD/MM/YYYY'
    }

    const dateTime = dayjs(dateString, format)

    return dateTime.format(template)
}

export default getDateString;