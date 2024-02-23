import {IconConference, IconExhibition, IconFilm, IconLibrary} from "@/components/Icon/Icon";

const getIconByEventType = (type, size) => {
    switch (type) {
        case 'Book Launch':
            return <IconLibrary size={size} />
        case 'Conference':
            return <IconConference size={size} />
        case 'Exhibition':
            return <IconExhibition size={size} />
        case 'Film':
            return <IconFilm size={size} />

    }
}

export default getIconByEventType;