import style from "@/pages/pages.module.scss";
import {
	IconAudio,
	IconCommunity, IconConference,
	IconCuratedCollections,
	IconDigitalRepository,
	IconDocument, IconEduPro,
	IconExhibition,
	IconFilm,
	IconGeneralClose,
	IconGeneralEye,
	IconGeneralHelp,
	IconGeneralInfo,
	IconGeneralMenu,
	IconGeneralMinus,
	IconGeneralMore,
	IconGeneralPlus,
	IconGeneralSearch,
	IconGeneralWarning, IconInternship,
	IconLibrary,
	IconMovieScreening,
	IconMusic,
	IconPhoto,
	IconPrograms, IconPublication, IconResearch, IconScholarship,
	IconTalk, IconTeaching,
	IconTheatre, IconWorkshop
} from "@/components/Icon/Icon";
import {IconGeneralTrash} from "@/components/Icon/Icon";
import {IconGeneralDown} from "@/components/Icon/Icon";
import {IconGeneralUp} from "@/components/Icon/Icon";
import {IconGeneralLeft} from "@/components/Icon/Icon";
import {IconGeneralRight} from "@/components/Icon/Icon";

const IconPage = () => {
	return (
		<div className={style.PageWithMenuOpen}>
			<h1>Icons</h1><br/><br/>
			<h3>General Icons</h3><br/><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<IconGeneralClose size={'small'} />
				<IconGeneralTrash size={'small'} />
				<IconGeneralDown size={'small'} />
				<IconGeneralUp size={'small'} />
				<IconGeneralLeft size={'small'} />
				<IconGeneralRight size={'small'} />
				<IconGeneralPlus size={'small'} />
				<IconGeneralMinus size={'small'} />
				<IconGeneralSearch size={'small'} />
				<IconGeneralEye size={'small'} />
				<IconGeneralMenu size={'small'} />
				<IconGeneralWarning size={'small'} />
				<IconGeneralHelp size={'small'} />
				<IconGeneralInfo size={'small'} />
				<IconGeneralMore size={'small'} />
			</div>
			<br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<IconGeneralClose size={'normal'} />
				<IconGeneralTrash size={'normal'} />
				<IconGeneralDown size={'normal'} />
				<IconGeneralUp size={'normal'} />
				<IconGeneralLeft size={'normal'} />
				<IconGeneralRight size={'normal'} />
				<IconGeneralPlus size={'normal'} />
				<IconGeneralMinus size={'normal'} />
				<IconGeneralSearch size={'normal'} />
				<IconGeneralEye size={'normal'} />
				<IconGeneralMenu size={'normal'} />
				<IconGeneralWarning size={'normal'} />
				<IconGeneralHelp size={'normal'} />
				<IconGeneralInfo size={'normal'} />
				<IconGeneralMore size={'normal'} />
			</div>
			<br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<IconGeneralClose size={'large'} />
				<IconGeneralTrash size={'large'} />
				<IconGeneralDown size={'large'} />
				<IconGeneralUp size={'large'} />
				<IconGeneralLeft size={'large'} />
				<IconGeneralRight size={'large'} />
				<IconGeneralPlus size={'large'} />
				<IconGeneralMinus size={'large'} />
				<IconGeneralSearch size={'large'} />
				<IconGeneralEye size={'large'} />
				<IconGeneralMenu size={'large'} />
				<IconGeneralWarning size={'large'} />
				<IconGeneralHelp size={'large'} />
				<IconGeneralInfo size={'large'} />
				<IconGeneralMore size={'large'} />
			</div><br/><br/><br/>
			<h3>OSA Custom Icons</h3><br/><br/>
			<div style={{display: 'flex', gap: '40px'}}>
				<div style={{display: 'flex', gap: '16px'}}>
					<IconAudio size={'small'} />
					<IconFilm size={'small'} />
					<IconDocument size={'small'} />
					<IconPhoto size={'small'} />
					<IconCuratedCollections size={'small'} />
					<IconDigitalRepository size={'small'} />
					<IconLibrary size={'small'} />
					<IconCommunity size={'small'} />
				</div>
				<div style={{display: 'flex', gap: '16px'}}>
					<IconExhibition size={'small'} />
					<IconTalk size={'small'} />
					<IconMovieScreening size={'small'} />
					<IconTheatre size={'small'} />
					<IconMusic size={'small'} />
					<IconPrograms size={'small'} />
				</div>
				<div style={{display: 'flex', gap: '16px'}}>
					<IconConference size={'small'} />
					<IconWorkshop size={'small'} />
					<IconTeaching size={'small'} />
					<IconResearch size={'small'} />
					<IconScholarship size={'small'} />
					<IconPublication size={'small'} />
					<IconInternship size={'small'} />
					<IconEduPro size={'small'} />
				</div>
			</div>
			<br/>
			<div style={{display: 'flex', gap: '40px'}}>
				<div style={{display: 'flex', gap: '16px'}}>
					<IconAudio size={'normal'} />
					<IconFilm size={'normal'} />
					<IconDocument size={'normal'} />
					<IconPhoto size={'normal'} />
					<IconCuratedCollections size={'normal'} />
					<IconDigitalRepository size={'normal'} />
					<IconLibrary size={'normal'} />
					<IconCommunity size={'normal'} />
				</div>
				<div style={{display: 'flex', gap: '16px'}}>
					<IconExhibition size={'normal'} />
					<IconTalk size={'normal'} />
					<IconMovieScreening size={'normal'} />
					<IconTheatre size={'normal'} />
					<IconMusic size={'normal'} />
					<IconPrograms size={'normal'} />
				</div>
				<div style={{display: 'flex', gap: '16px'}}>
					<IconConference size={'normal'} />
					<IconWorkshop size={'normal'} />
					<IconTeaching size={'normal'} />
					<IconResearch size={'normal'} />
					<IconScholarship size={'normal'} />
					<IconPublication size={'normal'} />
					<IconInternship size={'normal'} />
					<IconEduPro size={'normal'} />
				</div>
			</div>
			<br/>
			<div style={{display: 'flex', gap: '40px'}}>
				<div style={{display: 'flex', gap: '16px'}}>
					<IconAudio size={'large'} />
					<IconFilm size={'large'} />
					<IconDocument size={'large'} />
					<IconPhoto size={'large'} />
					<IconCuratedCollections size={'large'} />
					<IconDigitalRepository size={'large'} />
					<IconLibrary size={'large'} />
					<IconCommunity size={'large'} />
				</div>
				<div style={{display: 'flex', gap: '16px'}}>
					<IconExhibition size={'large'} />
					<IconTalk size={'large'} />
					<IconMovieScreening size={'large'} />
					<IconTheatre size={'large'} />
					<IconMusic size={'large'} />
					<IconPrograms size={'large'} />
				</div>
				<div style={{display: 'flex', gap: '16px'}}>
					<IconConference size={'large'} />
					<IconWorkshop size={'large'} />
					<IconTeaching size={'large'} />
					<IconResearch size={'large'} />
					<IconScholarship size={'large'} />
					<IconPublication size={'large'} />
					<IconInternship size={'large'} />
					<IconEduPro size={'large'} />
				</div>
			</div>
		</div>
	)
}

export default IconPage;