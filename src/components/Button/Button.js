import style from './Button.module.scss'
import Button from 'react-bootstrap/Button';
import Link from "next/link";

const CustomButton = ({size, type='primary', color='mustard', disabled=false, isActive=false, isIcon=false, onClick, link, children}) => {
    const getVariant = () => {
        return isActive ? `${type}-${color}-active` : `${type}-${color}`
    }

    if (link) {
        return (
            <div className={isIcon ? `${style.Button} ${style.Icon}`: style.Button}>
                <Link href={link} passHref={true} target="_blank">
                    <Button variant={getVariant()} size={size === 'medium' ? 'md' : 'lg'} disabled={disabled} onClick={onClick}>
                        {children}
                    </Button>
                </Link>
            </div>
        )
    } else {
        return (
            <div className={isIcon ? `${style.Button} ${style.Icon}`: style.Button}>
                <Button variant={getVariant()} size={size === 'medium' ? 'md' : 'lg'} disabled={disabled} onClick={onClick}>
                    {children}
                </Button>
            </div>
        )
    }
}

export default CustomButton;