import style from "./JobCard.module.scss";
import Button from "@/components/Button/Button";
import LabeledData from "@/components/LabeledData/LabeledData";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const JobCard = ({id, data}) => {
    const {lang} = useTranslation('cards')
    const {t} = useTranslation('page')

    const contractTypes = {
        'Full-Time': t('job__full_time'),
        'Part-Time': t('job__part_time'),
    }

    const title = getLocData(data, 'Title', lang)
    const description = getLocData(data, 'ContentHighlight', lang)
    const startingDate = getLocData(data, 'StartingDate', lang)
    const duration = getLocData(data, 'Duration', lang)
    const location = getLocData(data, 'Location', lang)
    const contractType = data['ContractType'] ? contractTypes[data['ContractType']] : ''
    const salary = getLocData(data, 'Salary', lang)
    const slug = data['Slug']

    return (
        <div className={style.Wrapper}>
            <div style={{marginBottom: '24px'}} className={`subtitle-large`}>{title}</div>
            <div style={{marginBottom: '24px'}}>{description}</div>
            <LabeledData label={t('job__starting_date')} data={startingDate} />
            <LabeledData label={t('job__location')} data={location} />
            <LabeledData label={t('job__duration')} data={duration} />
            <LabeledData label={t('job__salary')} data={salary} />
            <LabeledData label={t('job__contract_type')} data={contractType} />
            <div style={{marginTop: '24px'}}>
                <Button
                    type={'primary'}
                    color={'mustard'}
                    size={'large'}
                    linkTarget={'_self'}
                    link={`/about-us/jobs/${slug}`}>
                    {t('job__details_and_apply')}
                </Button>
            </div>
        </div>
    )
}

export default JobCard;