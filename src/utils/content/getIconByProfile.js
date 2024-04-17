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
import {IconAcademics, IconArchivum, IconCollections, IconPublicPrograms} from "@/components/Icon/CategoriesIcon";

const getIconByProfile = (profile, size, color='neutral') => {
    switch (profile) {
        case 'Archivum':
            return <IconArchivum size={size} color={color} />
        case 'Academic':
        case 'Academics':
            return <IconAcademics size={size} color={color} />
        case 'Collection':
        case 'Collections':
            return <IconCollections size={size} color={color} />
        case 'Public':
        case 'Public Programs':
            return <IconPublicPrograms size={size} color={color} />
        default:
            return <IconArchivum size={size} color={color} />
    }
}

export default getIconByProfile;