import style from "./MobileMenuButton.module.scss";

const MobileMenuButton = ({menuOpen, onMenuButtonClick}) => {
    return (
        <div className={menuOpen.length > 0 ? `${style.MenuButton} ${style.Opened}` : style.MenuButton}
             onClick={onMenuButtonClick}>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
        </div>
    )
}

export default MobileMenuButton