import style from "@/pages/pages.module.scss";
import Tag from "@/components/Tag/Tag";

const TextPage = () => {
	return (
		<div className={style.PageWithMenuOpen}>
			<h1>Text Styles</h1><br/><br/>
			<h1>Heading H1</h1><br/>
			<h2>Heading H2</h2><br/>
			<h3>Heading H3</h3><br/>
			<p className={"subtitle-large"}>Subtitle Large</p><br/>
			<p className={"subtitle-small"}>Subtitle Small</p><br/>
			<p className={"body-large"}>Body Large</p><br/>
			<p className={"body-normal"}>Body Normal</p><br/>
			<p className={"button-regular"}>Button Regular</p><br/>
			<p className={"button-semibold"}>Button SemiBold</p><br/>
			<p className={"tag"}>Tag</p><br/>
			<Tag text={"5 PM August 26"}/>
		</div>
	)
}

export default TextPage;