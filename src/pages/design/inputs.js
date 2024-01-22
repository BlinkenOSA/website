import style from "@/pages/pages.module.scss";
import Input from "@/components/Input/Input";


const IconPage = () => {
	return (
		<div className={style.PageWithMenuOpen}>
			<h1>Input Fields</h1><br/><br/>
			<div style={{width: '30%'}}>
				<Input placeholder={'Default'} /><br/>
				<Input type={'search'} placeholder={'Default'} /><br/>
				<Input type={'password'} placeholder={'Default'} /><br/>
			</div>
		</div>
	)
}

export default IconPage;