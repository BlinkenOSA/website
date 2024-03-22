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

const IconBase = ({src, size, color}) => {
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
				alt="Icon"
			/>
		</div>)
}

export const IconAcademicNews = ({size='normal', color='neutral'}) => {
	return <IconBase src={academic_news} size={size} color={color} />
}

export const IconAnnouncement = ({size='normal', color='neutral'}) => {
	return <IconBase src={announcement} size={size} color={color} />
}

export const IconArchivumNews = ({size='normal', color='neutral'}) => {
	return <IconBase src={archivum_news} size={size} color={color} />
}

export const IconBookLaunch = ({size='normal', color='neutral'}) => {
	return <IconBase src={book_launch} size={size} color={color} />
}

export const IconCollectionNews = ({size='normal', color='neutral'}) => {
	return <IconBase src={collection_news} size={size} color={color}/>
}

export const IconCommunity = ({size='normal', color='neutral'}) => {
	return <IconBase src={community} size={size} color={color} />
}

export const IconConference = ({size='normal', color='neutral'}) => {
	return <IconBase src={conference} size={size} color={color} />
}

export const IconEduPro = ({size='normal', color='neutral'}) => {
	return <IconBase src={edupro} size={size} color={color} />
}

export const IconExhibition = ({size='normal', color='neutral'}) => {
	return <IconBase src={exhibition} size={size} color={color} />
}

export const IconFilmScreening = ({size='normal', color='neutral'}) => {
	return <IconBase src={film_screening} size={size} color={color} />
}

export const IconInternship = ({size='normal', color='neutral'}) => {
	return <IconBase src={internship} size={size} color={color} />
}

export const IconJob = ({size='normal', color='neutral'}) => {
	return <IconBase src={job} size={size} color={color} />
}

export const IconJoinUs = ({size='normal', color='neutral'}) => {
	return <IconBase src={join_us} size={size} color={color} />
}

export const IconLecture = ({size='normal', color='neutral'}) => {
	return <IconBase src={lecture} size={size} color={color} />
}

export const IconLibrary = ({size='normal', color='neutral'}) => {
	return <IconBase src={library} size={size} color={color} />
}

export const IconMusic = ({size='normal', color='neutral'}) => {
	return <IconBase src={music} size={size} color={color} />
}

export const IconPartnerProjects = ({size='normal', color='neutral'}) => {
	return <IconBase src={partner_projects} size={size} color={color} />
}

export const IconPerformance = ({size='normal', color='neutral'}) => {
	return <IconBase src={performance} size={size} color={color} />
}

export const IconProgramSeries = ({size='normal', color='neutral'}) => {
	return <IconBase src={program_series} size={size} color={color} />
}

export const IconPublicProgramNews = ({size='normal', color='neutral'}) => {
	return <IconBase src={public_program_news} size={size} color={color} />
}

export const IconPublication = ({size='normal', color='neutral'}) => {
	return <IconBase src={publication} size={size} color={color} />
}

export const IconResearch = ({size='normal', color='neutral'}) => {
	return <IconBase src={research} size={size} color={color} />
}

export const IconRoundTable = ({size='normal', color='neutral'}) => {
	return <IconBase src={round_table} size={size} color={color} />
}

export const IconScholarship = ({size='normal', color='neutral'}) => {
	return <IconBase src={scholarship} size={size} color={color} />
}

export const IconTalk = ({size='normal', color='neutral'}) => {
	return <IconBase src={talk} size={size} color={color} />
}

export const IconTeaching = ({size='normal', color='neutral'}) => {
	return <IconBase src={teaching} size={size} color={color} />
}

export const IconTheatre = ({size='normal', color='neutral'}) => {
	return <IconBase src={theatre} size={size} color={color} />
}

export const IconUniversityCourse = ({size='normal', color='neutral'}) => {
	return <IconBase src={university_course} size={size} color={color} />
}

export const IconWorkshop = ({size='normal', color='neutral'}) => {
	return <IconBase src={workshop} size={size} color={color} />
}

// Entry Types
export const IconBlog = ({size='normal', color='neutral'}) => {
	return <IconBase src={blog} size={size} color={color} />
}

export const IconPodcast = ({size='normal', color='neutral'}) => {
	return <IconBase src={podcast} size={size} color={color} />
}

export const IconVideo = ({size='normal', color='neutral'}) => {
	return <IconBase src={video} size={size} color={color} />
}

// Primary Types

export const IconAudio = ({size='normal', color='neutral'}) => {
	return <IconBase src={audio} size={size} color={color} />
}

export const IconDocument = ({size='normal', color='neutral'}) => {
	return <IconBase src={document} size={size} color={color} />
}

export const IconMovingImage = ({size='normal', color='neutral'}) => {
	return <IconBase src={moving_image} size={size} color={color} />
}

export const IconPhoto = ({size='normal', color='neutral'}) => {
	return <IconBase src={photo} size={size} color={color} />
}


// Collections

export const IconCuratedCollections = ({size='normal', color='neutral'}) => {
	return <IconBase src={curated_collections} size={size} color={color} />
}

export const IconDigitalRepository = ({size='normal', color='neutral'}) => {
	return <IconBase src={digital_repository} size={size} color={color} />
}