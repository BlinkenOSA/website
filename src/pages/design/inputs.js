import style from "@/pages/pages.module.scss";
import Input from "@/components/Input/Input";
import LanguageSelector from "@/components/Selectors/LanguageSelector";
import SearchBox from "@/components/Input/SearchBox";


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
			</div><br/><br/>
			<h1>Search Box</h1><br/><br/>
			<div style={{width: '30%'}}>
				<SearchBox /><br/>
				<SearchBox disabled={true} />
			</div><br/><br/>
			<h1>Language Selector</h1><br/><br/>
			<LanguageSelector />
			<br/>
		</div>
	)
}

export default IconPage;