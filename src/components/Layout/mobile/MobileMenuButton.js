import style from "./MobileMenuButton.module.scss";

const MobileMenuButton = ({menuOpen, onMenuButtonClick}) => {
    return (
        <button
            type="button"
            className={menuOpen.length > 0 ? `${style.MenuButton} ${style.Opened}` : style.MenuButton}
            onClick={onMenuButtonClick}
            aria-label={menuOpen.length > 0 ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen.length > 0}
            aria-controls="mobile-site-menu">
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
        </button>
    )
}

export default MobileMenuButton
