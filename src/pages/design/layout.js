import style from "@/pages/pages.module.scss";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const LayoutPage = () => {
	return (
		<div className={style.PageWithMenuOpen}>
			<h1>Header</h1>
			<br/><br/>
			<Header />
			<br/><br/>
			<h1>Footer</h1>
			<br/><br/>
			<Footer />
			<br/><br/>
		</div>
	)
}

export default LayoutPage;