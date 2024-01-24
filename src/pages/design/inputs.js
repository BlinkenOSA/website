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
				<Input placeholder={'Default'} disabled={true} /><br/>
				<Input type={'search'} placeholder={'Default'} disabled={true} /><br/>
				<Input type={'password'} placeholder={'Default'} disabled={true} /><br/>
				<Input placeholder={'Default'} hasError={true} /><br/>
				<Input type={'search'} placeholder={'Default'} hasError={true} /><br/>
				<Input type={'password'} placeholder={'Default'} hasError={true} /><br/>
			</div>
		</div>
	)
}

export default IconPage;