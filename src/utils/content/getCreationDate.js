import getDateString from "@/utils/content/getDateString";

const getCreationDate = (originalCreationDate, createdAt, lang='en') => {
    if (originalCreationDate !== null) {
        return getDateString(originalCreationDate, 'YYYY-MM-DD', 'news', lang)
    } else {
        return getDateString(createdAt, undefined, 'news', lang)
    }
}

export default getCreationDate