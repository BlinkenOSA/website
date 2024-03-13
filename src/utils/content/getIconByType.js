import {
    IconBlog, IconBookLaunch,
    IconConference,
    IconExhibition,
    IconFilm, IconInternship,
    IconMovieScreening, IconMusic, IconPodcast, IconPublication, IconResearch, IconScholarship,
    IconTalk, IconTeaching, IconTheatre, IconVideo, IconWorkshop
} from "@/components/Icon/Icon";

const getIconByEventType = (type, size) => {
    switch (type) {
        case 'Book Launch':
            return <IconBookLaunch size={size} />
        case 'Blog':
            return <IconBlog size={size} />
        case 'Conference':
            return <IconConference size={size} />
        case 'Concert':
            return <IconTheatre size={size} />
        case 'Exhibition':
            return <IconExhibition size={size} />
        case 'Film':
            return <IconVideo size={size} />
        case 'Film Screening':
            return <IconFilm size={size} />
        case 'Internship':
            return <IconInternship size={size} />
        case 'Lecture':
            return <IconTalk size={size} />
        case 'Movie Screening':
            return <IconMovieScreening size={size} />
        case 'Music':
            return <IconMusic size={size} />
        case 'Podcast':
            return <IconPodcast size={size} />
        case 'Performance':
            return <IconTheatre size={size} />
        case 'Publication':
            return <IconPublication size={size} />
        case 'Research':
            return <IconResearch size={size} />
        case 'Roundtable':
            return <IconTalk size={size} />
        case 'Scholarship':
            return <IconScholarship size={size} />
        case 'Talk':
            return <IconTalk size={size} />
        case 'Theatre':
            return <IconTheatre size={size} />
        case 'University Teaching':
            return <IconTeaching size={size} />
        case 'Video':
            return <IconVideo size={size} />
        case 'Workshop':
            return <IconWorkshop size={size} />
    }
}

export default getIconByEventType;