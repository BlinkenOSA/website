import style from "@/pages/pages.module.scss";
import Checkbox from "@/components/Selectors/Checkbox";
import RadioButton from "@/components/Selectors/RadioButton";
import ToggleButton from "@/components/Selectors/Switch";


const IconPage = () => {
	return (
		<div className={style.PageWithMenuOpen}>
			<h1>Selectors</h1><br/><br/>
			<h3>Checkbox</h3><br/><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Checkbox id={'checkbox-small'} size={'small'} text={'Checkbox Small'}/>
				<Checkbox id={'checkbox-small-disabled'} size={'small'} text={'Checkbox Small Disabled'} disabled={true}/>
			</div><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Checkbox id={'checkbox-medium'} size={'medium'} text={'Checkbox Medium'}/>
				<Checkbox id={'checkbox-medium-disabled'} size={'medium'} text={'Checkbox Medium Disabled'} disabled={true}/>
			</div><br/><br/>
			<h3>Radio Button</h3><br/><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<RadioButton id={'radio-small'} size={'small'} text={'Rado Small'}/>
				<RadioButton id={'radio-small-disabled'} size={'small'} text={'Radio Small Disabled'} disabled={true}/>
			</div><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<RadioButton id={'radio-medium'} size={'medium'} text={'Radio Medium'}/>
				<RadioButton id={'radio-medium-disabled'} size={'medium'} text={'Radio Medium Disabled'} disabled={true}/>
			</div><br/><br/>
			<h3>Toggle</h3><br/><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<ToggleButton id={'radio-small'} size={'small'} text={'Switch Small'}/>
				<ToggleButton id={'radio-small-disabled'} size={'small'} text={'Switch Small Disabled'} disabled={true}/>
			</div><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<ToggleButton id={'radio-medium'} size={'medium'} text={'Switch Medium'}/>
				<ToggleButton id={'radio-medium-disabled'} size={'medium'} text={'Switch Medium Disabled'} disabled={true}/>
			</div><br/>
		</div>
	)
}

export default IconPage;