import style from "./CollectionCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {IconAudio, IconDocument, IconFilm, IconMovingImage, IconPhoto} from "@/components/Icon/Icon";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import React from "react";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";

const CollectionCard = ({data}) => {
    const title = data['Title']
    const imageData = getImageData(data['Image'], 'medium')
    const size = data['Size']
    const description = data['CardText']
    const types = data['MaterialTypes']
    const contentTypes = data['ContentTypes'].join(', ')
    const slug = data['Slug']

    const ToolTipStuff = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <div>{children}</div>
        </OverlayTrigger>
    );

    const chooseIcon = (type, key) => {
      switch(type) {
        case 'Audio':
            return <ToolTipStuff key={key} title={'Audio'}><IconAudio size={'small'} color={'orange'} /></ToolTipStuff>
        case 'Moving Image':
            return <ToolTipStuff key={key} title={'Moving Image'}><IconMovingImage size={'small'} color={'orange'} /></ToolTipStuff>
        case 'Textual':
            return <ToolTipStuff key={key} title={'Textual'}><IconDocument size={'small'} color={'orange'} /></ToolTipStuff>
        case 'Still Image':
            return <ToolTipStuff key={key} title={'Still Image'}><IconPhoto size={'small'} color={'orange'} /></ToolTipStuff>
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
            return `${size} ${size > 1 ? 'items' : 'item'}`
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
                {contentTypes}
            </div>
        </div>
    )
}

export default CollectionCard