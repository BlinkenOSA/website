import {fetchStaticPage} from "@/utils/api/fetchStaticPage";
import style from "./style.module.scss";
import {Container} from "react-bootstrap";
import Content from "@/components/Content/Content";
import PageHeader from "@/components/PageHeader/PageHeader";
import getImageUrl from "@/utils/content/getImageUrl";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import getLocData from "@/utils/content/getLocData";

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [pageData] = await Promise.all([
        fetchStaticPage(slug)
    ])

    if (pageData['data'].length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            pageData
        }
    }
})

const StaticPage = ({pageData}) => {
    const { t, lang } = useTranslation('page');

    const data = pageData['data'][0]['attributes'];
    const image = getImageUrl(data['CardImage'])

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {getLocData(data, 'Title', lang)}</title>
            </Head>
            <div className={style.Page}>
                <PageHeader
                    title={getLocData(data, 'Title', lang)}
                    breadCrumb={t('breadcrumb__collections')}
                    menu={'collections'}
                    image={image}
                    scrollScale={0.5}
                    isBlur={true}
                />
                <Container>
                    <Content contentObject={getLocData(data, 'Content', lang)} profile={'Collections'} />
                </Container>
            </div>
        </>
    )
}

export default StaticPage;