import audio from "../../../public/icons/osa/audio.svg";
import book_launch from "../../../public/icons/osa/book_launch.svg";
import blog from "../../../public/icons/osa/blog.svg";
import community from "../../../public/icons/osa/community.svg";
import conference from "../../../public/icons/osa/conference.svg";
import curated_collections from "../../../public/icons/osa/curated_collections.svg";
import digital_repository from "../../../public/icons/osa/digital_repository.svg";
import document from "../../../public/icons/osa/document.svg";
import edupro from "../../../public/icons/osa/edupro.svg";
import exhibition from "../../../public/icons/osa/exhibition.svg";
import film from "../../../public/icons/osa/film.svg";
import internship from "../../../public/icons/osa/internship.svg";
import library from "../../../public/icons/osa/library.svg";
import movie_screening from "../../../public/icons/osa/movie_screening.svg";
import music from "../../../public/icons/osa/music.svg";
import photo from "../../../public/icons/osa/photo.svg";
import programs from "../../../public/icons/osa/programs.svg";
import publication from "../../../public/icons/osa/publication.svg";
import podcast from "../../../public/icons/osa/podcast.svg";
import research from "../../../public/icons/osa/research.svg";
import scholarship from "../../../public/icons/osa/scholarship.svg";
import talk from "../../../public/icons/osa/talk.svg";
import teaching from "../../../public/icons/osa/teaching.svg";
import theatre from "../../../public/icons/osa/theatre.svg";
import video from "../../../public/icons/osa/video.svg";
import workshop from "../../../public/icons/osa/workshop.svg";

import close from "../../../public/icons/general/close.svg";
import down from "../../../public/icons/general/down.svg";
import eye from "../../../public/icons/general/eye.svg";
import help from "../../../public/icons/general/help.svg";
import info from "../../../public/icons/general/info.svg";
import left from "../../../public/icons/general/left.svg";
import menu from "../../../public/icons/general/menu.svg";
import minus from "../../../public/icons/general/minus.svg";
import more from "../../../public/icons/general/more.svg";
import plus from "../../../public/icons/general/plus.svg";
import right from "../../../public/icons/general/right.svg";
import search from "../../../public/icons/general/search.svg";
import trash from "../../../public/icons/general/trash.svg";
import up from "../../../public/icons/general/up.svg";
import warning from "../../../public/icons/general/warning.svg";

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

export const IconAudio = ({size='normal', color='neutral'}) => {
	return <IconBase src={audio} size={size} color={color} />
}

export const IconBookLaunch = ({size='normal', color='neutral'}) => {
	return <IconBase src={book_launch} size={size} color={color} />
}

export const IconBlog = ({size='normal', color='neutral'}) => {
	return <IconBase src={blog} size={size} color={color} />
}

export const IconCommunity = ({size='normal', color='neutral'}) => {
	return <IconBase src={community} size={size} color={color} />
}

export const IconConference = ({size='normal', color='neutral'}) => {
	return <IconBase src={conference} size={size} color={color} />
}

export const IconCuratedCollections = ({size='normal', color='neutral'}) => {
	return <IconBase src={curated_collections} size={size} color={color} />
}

export const IconDigitalRepository = ({size='normal', color='neutral'}) => {
	return <IconBase src={digital_repository} size={size} color={color} />
}

export const IconDocument = ({size='normal', color='neutral'}) => {
	return <IconBase src={document} size={size} color={color} />
}

export const IconEduPro = ({size='normal', color='neutral'}) => {
	return <IconBase src={edupro} size={size} color={color} />
}

export const IconExhibition = ({size='normal', color='neutral'}) => {
	return <IconBase src={exhibition} size={size} color={color} />
}

export const IconFilm = ({size='normal', color='neutral'}) => {
	return <IconBase src={film} size={size} color={color} />
}

export const IconInternship = ({size='normal', color='neutral'}) => {
	return <IconBase src={internship} size={size} color={color} />
}

export const IconLibrary = ({size='normal', color='neutral'}) => {
	return <IconBase src={library} size={size} color={color} />
}

export const IconMovieScreening = ({size='normal', color='neutral'}) => {
	return <IconBase src={movie_screening} size={size} color={color} />
}

export const IconMusic = ({size='normal', color='neutral'}) => {
	return <IconBase src={music} size={size} color={color} />
}

export const IconPhoto = ({size='normal', color='neutral'}) => {
	return <IconBase src={photo} size={size} color={color} />
}

export const IconPodcast = ({size='normal', color='neutral'}) => {
	return <IconBase src={podcast} size={size} color={color} />
}

export const IconPrograms = ({size='normal', color='neutral'}) => {
	return <IconBase src={programs} size={size} color={color} />
}

export const IconPublication = ({size='normal', color='neutral'}) => {
	return <IconBase src={publication} size={size} color={color} />
}

export const IconResearch = ({size='normal', color='neutral'}) => {
	return <IconBase src={research} size={size} color={color} />
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

export const IconVideo = ({size='normal', color='neutral'}) => {
	return <IconBase src={video} size={size} color={color} />
}

export const IconWorkshop = ({size='normal', color='neutral'}) => {
	return <IconBase src={workshop} size={size} color={color} />
}

export const IconGeneralClose = ({size='normal', color='neutral'}) => {
	return <IconBase src={close} size={size} color={color} />
}

export const IconGeneralDown = ({size='normal', color='neutral'}) => {
	return <IconBase src={down} size={size} color={color} />
}

export const IconGeneralEye = ({size='normal', color='neutral'}) => {
	return <IconBase src={eye} size={size} color={color} />
}

export const IconGeneralHelp = ({size='normal', color='neutral'}) => {
	return <IconBase src={help} size={size} color={color} />
}

export const IconGeneralInfo = ({size='normal', color='neutral'}) => {
	return <IconBase src={info} size={size} color={color} />
}

export const IconGeneralLeft = ({size='normal', color='neutral'}) => {
	return <IconBase src={left} size={size} color={color} />
}

export const IconGeneralMenu = ({size='normal', color='neutral'}) => {
	return <IconBase src={menu} size={size} color={color} />
}

export const IconGeneralMinus = ({size='normal', color='neutral'}) => {
	return <IconBase src={minus} size={size} color={color} />
}

export const IconGeneralMore = ({size='normal', color='neutral'}) => {
	return <IconBase src={more} size={size} color={color} />
}

export const IconGeneralPlus = ({size='normal', color='neutral'}) => {
	return <IconBase src={plus} size={size} color={color} />
}

export const IconGeneralRight = ({size='normal', color='neutral'}) => {
	return <IconBase src={right} size={size} color={color} />
}

export const IconGeneralSearch = ({size='normal', color='neutral'}) => {
	return <IconBase src={search} size={size} color={color} />
}

export const IconGeneralTrash = ({size='normal', color='neutral'}) => {
	return <IconBase src={trash} size={size} color={color} />
}

export const IconGeneralUp = ({size='normal', color='neutral'}) => {
	return <IconBase src={up} size={size} color={color} />
}

export const IconGeneralWarning = ({size='normal', color='neutral'}) => {
	return <IconBase src={warning} size={size} color={color} />
}