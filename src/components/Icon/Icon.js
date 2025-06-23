import academic_news from "../../../public/icons/categories/academics.svg";
import announcement from "../../../public/icons/osa/announcement.svg"
import archivum_news from "../../../public/icons/categories/archivum.svg";
import book_launch from "../../../public/icons/osa/book_launch.svg";
import collection_news from "../../../public/icons/categories/collections.svg";
import community from "../../../public/icons/osa/community.svg";
import conference from "../../../public/icons/osa/conference.svg";
import edupro from "../../../public/icons/osa/edupro.svg";
import exhibition from "../../../public/icons/osa/exhibition.svg";
import film_screening from "../../../public/icons/osa/film_screening.svg"
import internship from "../../../public/icons/osa/internship.svg";
import job from "../../../public/icons/osa/job.svg";
import join_us from "../../../public/icons/osa/join_us.svg";
import lecture from "../../../public/icons/osa/lecture.svg";
import library from "../../../public/icons/osa/library.svg";
import music from "../../../public/icons/osa/music.svg";
import partner_projects from "../../../public/icons/osa/partner_projects.svg";
import performance from "../../../public/icons/osa/performance.svg";
import program_series from "../../../public/icons/osa/program_series.svg";
import public_program_news from "../../../public/icons/categories/public_programs.svg"
import publication from "../../../public/icons/osa/publication.svg";
import research from "../../../public/icons/osa/research.svg";
import round_table from "../../../public/icons/osa/round_table.svg";
import scholarship from "../../../public/icons/osa/scholarship.svg";
import talk from "../../../public/icons/osa/talk.svg";
import teaching from "../../../public/icons/osa/teaching.svg";
import theatre from "../../../public/icons/osa/theatre.svg";
import university_course from "../../../public/icons/osa/university_course.svg";
import workshop from "../../../public/icons/osa/workshop.svg";

import blog from "../../../public/icons/osa/blog.svg";
import podcast from "../../../public/icons/osa/podcast.svg";
import video from "../../../public/icons/osa/video.svg";

import audio from "../../../public/icons/osa/audio.svg";
import document from "../../../public/icons/osa/document.svg";
import photo from "../../../public/icons/osa/photo.svg";
import moving_image from "../../../public/icons/osa/video.svg";

import curated_collections from "../../../public/icons/osa/curated_collections.svg";
import digital_repository from "../../../public/icons/osa/digital_repository.svg";

import style from "./Icon.module.scss";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const IconBase = ({src, size, color, alt}) => {
	const { t } = useTranslation('accessibility');

	const getSize = () => {
		switch (size) {
			case 'small':
				return 24
			case 'normal':
				return 32
			case 'large':
				return 48
		}
	}

	return (
		<div className={style[color]}>
			<Image
				src={src}
				width={getSize()}
				height={getSize()}
				alt={t(alt)}
			/>
		</div>)
}

export const IconAcademicNews = ({size='normal', color='neutral'}) => {
	return <IconBase src={academic_news} size={size} color={color} alt={'alt_text__academic_news_icon'} />
}

export const IconAnnouncement = ({size='normal', color='neutral'}) => {
	return <IconBase src={announcement} size={size} color={color} alt={'alt_text__announcement_icon'} />
}

export const IconArchivumNews = ({size='normal', color='neutral'}) => {
	return <IconBase src={archivum_news} size={size} color={color} alt={'alt_text__archivum_news_icon'} />
}

export const IconBookLaunch = ({size='normal', color='neutral'}) => {
	return <IconBase src={book_launch} size={size} color={color} alt={'alt_text__book_launch_icon'} />
}

export const IconCollectionNews = ({size='normal', color='neutral'}) => {
	return <IconBase src={collection_news} size={size} color={color} alt={'alt_text__collection_news_icon'}/>
}

export const IconCommunity = ({size='normal', color='neutral'}) => {
	return <IconBase src={community} size={size} color={color} alt={'alt_text__community_icon'} />
}

export const IconConference = ({size='normal', color='neutral'}) => {
	return <IconBase src={conference} size={size} color={color} alt={'alt_text__conference_icon'} />
}

export const IconEduPro = ({size='normal', color='neutral'}) => {
	return <IconBase src={edupro} size={size} color={color} alt={'alt_text__education_program_icon'} />
}

export const IconExhibition = ({size='normal', color='neutral'}) => {
	return <IconBase src={exhibition} size={size} color={color} alt={'alt_text__exhibition_icon'} />
}

export const IconFilmScreening = ({size='normal', color='neutral'}) => {
	return <IconBase src={film_screening} size={size} color={color} alt={'alt_text__film_screening_icon'} />
}

export const IconInternship = ({size='normal', color='neutral'}) => {
	return <IconBase src={internship} size={size} color={color} alt={'alt_text__internship_icon'} />
}

export const IconJob = ({size='normal', color='neutral'}) => {
	return <IconBase src={job} size={size} color={color} alt={'alt_text__job_posting_icon'} />
}

export const IconJoinUs = ({size='normal', color='neutral'}) => {
	return <IconBase src={join_us} size={size} color={color} alt={'alt_text__join_us_icon'} />
}

export const IconLecture = ({size='normal', color='neutral'}) => {
	return <IconBase src={lecture} size={size} color={color} alt={'alt_text__lecture_icon'} />
}

export const IconLibrary = ({size='normal', color='neutral'}) => {
	return <IconBase src={library} size={size} color={color} alt={'alt_text__library_icon'} />
}

export const IconMusic = ({size='normal', color='neutral'}) => {
	return <IconBase src={music} size={size} color={color} alt={'alt_text__music_icon'} />
}

export const IconPartnerProjects = ({size='normal', color='neutral'}) => {
	return <IconBase src={partner_projects} size={size} color={color} alt={'alt_text__partner_projects_icon'} />
}

export const IconPerformance = ({size='normal', color='neutral'}) => {
	return <IconBase src={performance} size={size} color={color} alt={'alt_text__performance_icon'} />
}

export const IconProgramSeries = ({size='normal', color='neutral'}) => {
	return <IconBase src={program_series} size={size} color={color} alt={'alt_text__program_series_icon'} />
}

export const IconPublicProgramNews = ({size='normal', color='neutral'}) => {
	return <IconBase src={public_program_news} size={size} color={color} alt={'alt_text__public_program_news_icon'} />
}

export const IconPublication = ({size='normal', color='neutral'}) => {
	return <IconBase src={publication} size={size} color={color} alt={'alt_text__publication_icon'} />
}

export const IconResearch = ({size='normal', color='neutral'}) => {
	return <IconBase src={research} size={size} color={color} alt={'alt_text__research_icon'} />
}

export const IconRoundTable = ({size='normal', color='neutral'}) => {
	return <IconBase src={round_table} size={size} color={color} alt={'alt_text__round_table_icon'} />
}

export const IconScholarship = ({size='normal', color='neutral'}) => {
	return <IconBase src={scholarship} size={size} color={color} alt={'alt_text__scholarship_icon'} />
}

export const IconTalk = ({size='normal', color='neutral'}) => {
	return <IconBase src={talk} size={size} color={color} alt={'alt_text__talk_icon'} />
}

export const IconTeaching = ({size='normal', color='neutral'}) => {
	return <IconBase src={teaching} size={size} color={color} alt={'alt_text__teaching_icon'} />
}

export const IconTheatre = ({size='normal', color='neutral'}) => {
	return <IconBase src={theatre} size={size} color={color} alt={'alt_text__theatre_icon'} />
}

export const IconUniversityCourse = ({size='normal', color='neutral'}) => {
	return <IconBase src={university_course} size={size} color={color} alt={'alt_text__university_course_icon'} />
}

export const IconWorkshop = ({size='normal', color='neutral'}) => {
	return <IconBase src={workshop} size={size} color={color} alt={'alt_text__workshop_icon'} />
}

// Entry Types
export const IconBlog = ({size='normal', color='neutral'}) => {
	return <IconBase src={blog} size={size} color={color} alt={'alt_text__blog_icon'} />
}

export const IconPodcast = ({size='normal', color='neutral'}) => {
	return <IconBase src={podcast} size={size} color={color} alt={'alt_text__podcast_icon'} />
}

export const IconVideo = ({size='normal', color='neutral'}) => {
	return <IconBase src={video} size={size} color={color} alt={'alt_text__video_icon'} />
}

// Primary Types

export const IconAudio = ({size='normal', color='neutral'}) => {
	return <IconBase src={audio} size={size} color={color} alt={'alt_text__audio_icon'} />
}

export const IconDocument = ({size='normal', color='neutral'}) => {
	return <IconBase src={document} size={size} color={color} alt={'alt_text__document_icon'} />
}

export const IconMovingImage = ({size='normal', color='neutral'}) => {
	return <IconBase src={moving_image} size={size} color={color} alt={'alt_text__moving_image_icon'} />
}

export const IconPhoto = ({size='normal', color='neutral'}) => {
	return <IconBase src={photo} size={size} color={color} alt={'alt_text__photo_icon'} />
}


// Collections

export const IconCuratedCollections = ({size='normal', color='neutral'}) => {
	return <IconBase src={curated_collections} size={size} color={color} alt={'alt_text__collections_icon'} />
}

export const IconDigitalRepository = ({size='normal', color='neutral'}) => {
	return <IconBase src={digital_repository} size={size} color={color} alt={'alt_text__digital_repository_icon'} />
}