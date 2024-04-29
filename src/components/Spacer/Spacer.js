import style from './Spacer.module.scss';

const Spacer = ({size='large'}) => {
    return <div className={style[size]} />
}

export default Spacer;