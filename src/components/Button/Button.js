import style from './Button.module.scss'
import Button from 'react-bootstrap/Button';

const CustomButton = ({size, type='primary', color='mustard', disabled=false, isIcon=false, onClick, children}) => {
    const getVariant = () => {
        return `${type}-${color}`
    }

    return (
        <div className={isIcon ? `${style.Button} ${style.Icon}`: style.Button}>
            <Button variant={getVariant()} size={size === 'medium' ? 'md' : 'lg'} disabled={disabled} onClick={onClick}>
                {children}
            </Button>
        </div>
    )
}

export default CustomButton;