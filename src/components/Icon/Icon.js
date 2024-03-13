import audio from "../../../public/icons/osa/audio.svg";
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

import Image from "next/image";

const IconBase = ({src, size}) => {
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

	return <Image
			priority
			src={src}
			width={getSize()}
			height={getSize()}
			alt="Icon"
		/>
}

export const IconAudio = ({size='normal'}) => {
	return <IconBase src={audio} size={size} />
}

export const IconBlog = ({size='normal'}) => {
	return <IconBase src={blog} size={size} />
}

export const IconCommunity = ({size='normal'}) => {
	return <IconBase src={community} size={size} />
}

export const IconConference = ({size='normal'}) => {
	return <IconBase src={conference} size={size} />
}

export const IconCuratedCollections = ({size='normal'}) => {
	return <IconBase src={curated_collections} size={size} />
}

export const IconDigitalRepository = ({size='normal'}) => {
	return <IconBase src={digital_repository} size={size} />
}

export const IconDocument = ({size='normal'}) => {
	return <IconBase src={document} size={size} />
}

export const IconEduPro = ({size='normal'}) => {
	return <IconBase src={edupro} size={size} />
}

export const IconExhibition = ({size='normal'}) => {
	return <IconBase src={exhibition} size={size} />
}

export const IconFilm = ({size='normal'}) => {
	return <IconBase src={film} size={size} />
}

export const IconInternship = ({size='normal'}) => {
	return <IconBase src={internship} size={size} />
}

export const IconLibrary = ({size='normal'}) => {
	return <IconBase src={library} size={size} />
}

export const IconMovieScreening = ({size='normal'}) => {
	return <IconBase src={movie_screening} size={size} />
}

export const IconMusic = ({size='normal'}) => {
	return <IconBase src={music} size={size} />
}

export const IconPhoto = ({size='normal'}) => {
	return <IconBase src={photo} size={size} />
}

export const IconPodcast = ({size='normal'}) => {
	return <IconBase src={podcast} size={size} />
}

export const IconPrograms = ({size='normal'}) => {
	return <IconBase src={programs} size={size} />
}

export const IconPublication = ({size='normal'}) => {
	return <IconBase src={publication} size={size} />
}

export const IconResearch = ({size='normal'}) => {
	return <IconBase src={research} size={size} />
}

export const IconScholarship = ({size='normal'}) => {
	return <IconBase src={scholarship} size={size} />
}

export const IconTalk = ({size='normal'}) => {
	return <IconBase src={talk} size={size} />
}

export const IconTeaching = ({size='normal'}) => {
	return <IconBase src={teaching} size={size} />
}

export const IconTheatre = ({size='normal'}) => {
	return <IconBase src={theatre} size={size} />
}

export const IconVideo = ({size='normal'}) => {
	return <IconBase src={video} size={size} />
}

export const IconWorkshop = ({size='normal'}) => {
	return <IconBase src={workshop} size={size} />
}

export const IconGeneralClose = ({size='normal'}) => {
	return <IconBase src={close} size={size} />
}

export const IconGeneralDown = ({size='normal'}) => {
	return <IconBase src={down} size={size} />
}

export const IconGeneralEye = ({size='normal'}) => {
	return <IconBase src={eye} size={size} />
}

export const IconGeneralHelp = ({size='normal'}) => {
	return <IconBase src={help} size={size} />
}

export const IconGeneralInfo = ({size='normal'}) => {
	return <IconBase src={info} size={size} />
}

export const IconGeneralLeft = ({size='normal'}) => {
	return <IconBase src={left} size={size} />
}

export const IconGeneralMenu = ({size='normal'}) => {
	return <IconBase src={menu} size={size} />
}

export const IconGeneralMinus = ({size='normal'}) => {
	return <IconBase src={minus} size={size} />
}

export const IconGeneralMore = ({size='normal'}) => {
	return <IconBase src={more} size={size} />
}

export const IconGeneralPlus = ({size='normal'}) => {
	return <IconBase src={plus} size={size} />
}

export const IconGeneralRight = ({size='normal'}) => {
	return <IconBase src={right} size={size} />
}

export const IconGeneralSearch = ({size='normal'}) => {
	return <IconBase src={search} size={size} />
}

export const IconGeneralTrash = ({size='normal'}) => {
	return <IconBase src={trash} size={size} />
}

export const IconGeneralUp = ({size='normal'}) => {
	return <IconBase src={up} size={size} />
}

export const IconGeneralWarning = ({size='normal'}) => {
	return <IconBase src={warning} size={size} />
}