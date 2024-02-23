import dayjs from "dayjs";

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


const getDateString = (dateString, format) => {
    const dateTime = dayjs(dateString, format)

    return dateTime.format('h:mm A MMMM DD')
}

export default getDateString;