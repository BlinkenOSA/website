import style from "./CollectionCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {IconAudio, IconDocument, IconFilm, IconMovingImage, IconPhoto} from "@/components/Icon/Icon";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import React from "react";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const CollectionCard = ({data}) => {
    const { t, lang } = useTranslation('cards')

    const title = getLocData(data, 'Title', lang)
    const imageData = getImageData(data['Image'], 'medium')
    const size = data['Size']
    const description = getLocData(data, 'CardText', lang)
    const types = data['MaterialTypes']
    const slug = data['Slug']

    const ToolTipStuff = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <div>{children}</div>
        </OverlayTrigger>
    );

    const chooseIcon = (type, key) => {
      switch(type) {
        case 'Audio':
            return <ToolTipStuff key={key} title={t('collection_card__audio')}><IconAudio size={'small'} color={'orange'} /></ToolTipStuff>
        case 'Moving Image':
            return <ToolTipStuff key={key} title={t('collection_card__moving_image')}><IconMovingImage size={'small'} color={'orange'} /></ToolTipStuff>
        case 'Textual':
            return <ToolTipStuff key={key} title={t('collection_card__textual')}><IconDocument size={'small'} color={'orange'} /></ToolTipStuff>
        case 'Still Image':
            return <ToolTipStuff key={key} title={t('collection_card__still_image')}><IconPhoto size={'small'} color={'orange'} /></ToolTipStuff>
      }
    }

    const getIcons = () => {
      return types.map((t, idx) => {
        return (
            chooseIcon(t, `${data['Title']}_icon_${idx}`))
      })
    }

    const getSize = () => {
        if (size > 0) {
            return `${size} ${size > 1 ? t('collection_card__items') : t('collection_card__item')}`
        }
    }

    const getURL = () => {
        switch (data['ContentTypes'][0]) {
            case 'Curated':
                return 'curated-collections'
            case 'Digital':
            case 'Online':
                return 'online-collections'
            case 'AV':
                return 'av-collections'
        }
    }

    const getCollectionTypes = () => {
        const getType = (type) => {
            switch (type) {
                case 'Curated':
                    return t('collection_card__curated')
                case 'Digital':
                case 'Online':
                    return t('collection_card__online')
                case 'AV':
                    return t('collection_card__audiovisual')
            }
        }

        return data['ContentTypes'].map(t => getType(t)).join(', ')
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.Header}>
                <div className={style.ItemNumber}>{getSize()}</div>
                <div className={style.Icons}>{getIcons()}</div>
            </div>
            <div className={style.Image}>
                <Link href={`/collections/${getURL()}/${slug}`}>
                    <MaskedImage src={imageData['url']} type={'landscape'} />
                </Link>
            </div>
            <h3 className={style.Title}>
                <Link href={`/collections/${getURL()}/${slug}`}>
                    {truncateWithEllipses(title, 50)}
                </Link>
            </h3>
            <div className={style.Description}>
                <Link href={`/collections/${getURL()}/${slug}`}>
                    {truncateWithEllipses(description, 190)}
                </Link>
            </div>
            <div className={style.CollectionType}>
                {getCollectionTypes()}
            </div>
        </div>
    )
}

export default CollectionCard