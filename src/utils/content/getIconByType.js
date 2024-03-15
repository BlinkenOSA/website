import {
    IconBlog, IconBookLaunch,
    IconConference,
    IconExhibition,
    IconFilm, IconInternship,
    IconMovieScreening, IconMusic, IconPodcast, IconPublication, IconResearch, IconScholarship,
    IconTalk, IconTeaching, IconTheatre, IconVideo, IconWorkshop
} from "@/components/Icon/Icon";

const getIconByEventType = (type, size, color='neutral') => {
    switch (type) {
        case 'Book Launch':
            return <IconBookLaunch size={size} color={color}/>
        case 'Blog':
            return <IconBlog size={size} color={color} />
        case 'Conference':
            return <IconConference size={size} color={color} />
        case 'Concert':
            return <IconTheatre size={size} color={color} />
        case 'Exhibition':
            return <IconExhibition size={size} color={color} />
        case 'Film':
            return <IconVideo size={size} color={color} />
        case 'Film Screening':
            return <IconFilm size={size} color={color} />
        case 'Internship':
            return <IconInternship size={size} color={color} />
        case 'Lecture':
            return <IconTalk size={size} color={color} />
        case 'Movie Screening':
            return <IconMovieScreening size={size} color={color} />
        case 'Music':
            return <IconMusic size={size} color={color} />
        case 'Podcast':
            return <IconPodcast size={size} color={color} />
        case 'Performance':
            return <IconTheatre size={size} color={color} />
        case 'Publication':
            return <IconPublication size={size} color={color} />
        case 'Research':
            return <IconResearch size={size} color={color} />
        case 'Roundtable':
            return <IconTalk size={size} color={color} />
        case 'Scholarship':
            return <IconScholarship size={size} color={color} />
        case 'Talk':
            return <IconTalk size={size} color={color} />
        case 'Theatre':
            return <IconTheatre size={size} color={color} />
        case 'University Teaching':
            return <IconTeaching size={size} color={color} />
        case 'Video':
            return <IconVideo size={size} color={color} />
        case 'Workshop':
            return <IconWorkshop size={size} color={color} />
    }
}

export default getIconByEventType;