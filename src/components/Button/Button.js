import style from './Button.module.scss'
import Button from 'react-bootstrap/Button';

const CustomButton = ({size, type='primary', color='mustard', disabled=false, children}) => {
    const getVariant = () => {
        return `${type}-${color}`
    }

    return (
        <div className={style.Button}>
            <Button variant={getVariant()} size={size === 'medium' ? 'md' : 'lg'} disabled={disabled}>
                {children}
            </Button>
        </div>
    )
}

export default CustomButton;