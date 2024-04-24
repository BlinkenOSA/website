import style from "./JobCard.module.scss";
import Button from "@/components/Button/Button";
import LabeledData from "@/components/LabeledData/LabeledData";

const JobCard = ({id, data}) => {
    const title = data['Title']
    const description = data['ContentHighglight']
    const startingDate = data['StartingDate']
    const duration = data['Duration']
    const location = data['Location']
    const contractType = data['ContractType']
    const salary = data['Salary']
    const slug = data['Slug']

    return (
        <div className={style.Wrapper}>
            <div style={{marginBottom: '24px'}} className={`subtitle-large`}>{title}</div>
            <div style={{marginBottom: '24px'}}>{description}</div>
            <LabeledData label={'Starting Date'} data={startingDate} />
            <LabeledData label={'Location'} data={location} />
            <LabeledData label={'Duration'} data={duration} />
            <LabeledData label={'Salary'} data={salary} />
            <LabeledData label={'Contract Type'} data={contractType} />
            <div style={{marginTop: '24px'}}>
                <Button
                    type={'primary'}
                    color={'mustard'}
                    size={'large'}
                    linkTarget={'_self'}
                    link={`/about-us/jobs/${slug}`}>
                    Details and Application
                </Button>
            </div>
        </div>
    )
}

export default JobCard;