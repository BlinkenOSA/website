import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Logo}>
        <img src={'osa-logo.svg'}/>
      </div>
    </header>
  )
}

export default Header;