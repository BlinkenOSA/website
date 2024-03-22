import {
    IconAcademicNews,
    IconAnnouncement,
    IconArchivumNews,
    IconBlog,
    IconBookLaunch,
    IconCollectionNews,
    IconCommunity,
    IconConference,
    IconEduPro,
    IconExhibition,
    IconFilmScreening,
    IconInternship,
    IconJob,
    IconJoinUs,
    IconLibrary,
    IconMusic,
    IconPartnerProjects,
    IconPodcast,
    IconProgramSeries,
    IconPublication,
    IconResearch,
    IconRoundTable,
    IconScholarship,
    IconTalk,
    IconTheatre,
    IconUniversityCourse,
    IconVideo,
    IconWorkshop
} from "@/components/Icon/Icon";

const getIconByType = (type, size, color='neutral') => {
    switch (type) {
        case 'Academic News':
            return <IconAcademicNews size={size} color={color}/>
        case 'Announcement':
            return <IconAnnouncement size={size} color={color}/>
        case 'Archivum News':
            return <IconArchivumNews size={size} color={color}/>
        case 'Book Launch':
            return <IconBookLaunch size={size} color={color}/>
        case 'Collections News':
            return <IconCollectionNews size={size} color={color}/>
        case 'Community':
            return <IconCommunity size={size} color={color}/>
        case 'Conference':
            return <IconConference size={size} color={color} />
        case 'Education Prgram':
            return <IconEduPro size={size} color={color} />
        case 'Exhibition':
            return <IconExhibition size={size} color={color} />
        case 'Film Screening':
            return <IconFilmScreening size={size} color={color} />
        case 'Internship':
            return <IconInternship size={size} color={color} />
        case 'Job':
            return <IconJob size={size} color={color} />
        case 'Join Us':
            return <IconJoinUs size={size} color={color} />
        case 'Lecture':
            return <IconTalk size={size} color={color} />
        case 'Library':
            return <IconLibrary size={size} color={color} />
        case 'Music':
            return <IconMusic size={size} color={color} />
        case 'Partner Projects':
            return <IconPartnerProjects size={size} color={color} />
        case 'Performance':
            return <IconTheatre size={size} color={color} />
        case 'Program Series':
            return <IconProgramSeries size={size} color={color} />
        case 'Publication':
            return <IconPublication size={size} color={color} />
        case 'Research':
            return <IconResearch size={size} color={color} />
        case 'Round Table':
            return <IconRoundTable size={size} color={color} />
        case 'Scholarship':
            return <IconScholarship size={size} color={color} />
        case 'Talk':
            return <IconTalk size={size} color={color} />
        case 'Theatre':
            return <IconTheatre size={size} color={color} />
        case 'University Course':
            return <IconUniversityCourse size={size} color={color} />
        case 'Workshop':
            return <IconWorkshop size={size} color={color} />

        case 'Blog':
            return <IconBlog size={size} color={color} />
        case 'Podcast':
            return <IconPodcast size={size} color={color} />
        case 'Video':
            return <IconVideo size={size} color={color} />
    }
}

export default getIconByType;