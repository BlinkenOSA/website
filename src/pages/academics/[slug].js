import {fetchStaticPage} from "@/utils/api/fetchStaticPage";
import style from "./style.module.scss";
import {Container} from "react-bootstrap";
import Content from "@/components/Content/Content";
import PageHeader from "@/components/PageHeader/PageHeader";
import getImageUrl from "@/utils/content/getImageUrl";
import Head from "next/head";
import getLocData from "@/utils/content/getLocData";
import useTranslation from "next-translate/useTranslation";
import TranslationChecker from "@/components/TranslationChecker/TranslationChecker";

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

const AcademicsPage = ({pageData}) => {
    const { t, lang } = useTranslation('page')

    const data = pageData['data'][0]['attributes'];
    const image = getImageUrl(data['CardImage'], 'full')
    const title = getLocData(data, 'Title', lang)

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {getLocData(data, 'Title', lang)}</title>
                <meta property="og:site_name" content="Blinken OSA Archivum"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title}/>
                <meta property="og:locale" content={lang}/>
                <meta property="og:image" content={image}/>
                <meta name="twitter:site" content="@BlinkenOSA"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:image" content={image}/>
            </Head>
            <div className={style.Page}>
                <PageHeader
                    title={title}
                    image={image}
                    breadCrumb={t('breadcrumb__academics')}
                    menu={'academics'}
                    scrollScale={0.5}/>
                <Container>
                    <TranslationChecker data={data}/>
                    <Content contentObject={getLocData(data, 'Content', lang)} profile={'Academics'}/>
                </Container>
            </div>
        </>
    )
}

export default AcademicsPage