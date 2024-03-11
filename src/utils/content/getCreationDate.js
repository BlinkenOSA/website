import getDateString from "@/utils/content/getDateString";

const getCreationDate = (originalCreationDate, createdAt) => {
    if (originalCreationDate !== null) {
        return getDateString(originalCreationDate, 'YYYY-MM-DD', 'news')
    } else {
        return getDateString(createdAt, 'YYYY-MM-DDTHH:mm:ss', 'news')
    }
}

export default getCreationDate