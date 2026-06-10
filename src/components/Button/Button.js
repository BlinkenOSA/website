import style from './Button.module.scss'
import Button from 'react-bootstrap/Button';
import Link from "next/link";

const CustomButton = ({ size, type='primary', color='mustard', disabled=false,
                        isActive=false, isIcon=false, onClick, link, linkTarget='_blank', children, ariaLabel}) => {
    const getVariant = () => {
        return isActive ? `${type}-${color}-active` : `${type}-${color}`
    }

    const sizeClassName = size === 'medium' ? 'md' : 'lg';
    const className = isIcon ? `${style.Button} ${style.Icon}`: style.Button;

    if (link) {
        return (
            <div className={className}>
                <Button
                    as={Link}
                    href={disabled ? '#' : link}
                    target={linkTarget}
                    variant={getVariant()}
                    size={sizeClassName}
                    aria-label={ariaLabel}
                    aria-disabled={disabled}
                    tabIndex={disabled ? -1 : undefined}
                    onClick={disabled ? (e) => e.preventDefault() : onClick}>
                    {children}
                </Button>
            </div>
        )
    } else {
        return (
            <div className={className}>
                <Button variant={getVariant()} size={sizeClassName} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
                    {children}
                </Button>
            </div>
        )
    }
}

export default CustomButton;
