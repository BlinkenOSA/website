import dayjs from "dayjs";
import hu from "dayjs/locale/hu";
import en from "dayjs/locale/en";

var customParseFormat = require('dayjs/plugin/customParseFormat')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone')
var updateLocale = require('dayjs/plugin/updateLocale')

dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(updateLocale)

const getDateString = (dateString, format, type = 'event', lang='en') => {
    let dateTime;

    dayjs.locale(lang === 'en' ? en : hu);

    if (dateString === null) {
        return ''
    }

    let template = ''
    switch (type) {
        case 'event':
            dayjs.updateLocale('hu', {
                months: [
                    "Január", "Február", "Március", "Április", "Május", "Június", "Július",
                    "Augusztus", "Szeptember", "Október", "November", "December"
                ]
            })
            template = lang === 'en' ? 'h:mm A, MMMM DD' : 'MMMM D. HH:mm'
            break
        case 'eventFull':
            template = lang === 'en' ? 'MMMM D, YYYY - h:mm A' : 'YYYY. MMMM D. HH:mm'
            break
        case 'fellow':
            template = lang === 'en' ? 'MMMM/YYYY' : 'YYYY/MMMM'
            break
        case 'news':
            template = lang === 'en' ? 'DD/MM/YYYY' : 'YYYY/MM/DD'
            break
        case 'date_only':
            template = lang === 'en' ? 'DD/MM/YYYY' : 'YYYY/MM/DD'
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