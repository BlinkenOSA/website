import style from "@/pages/pages.module.scss";
import Button from "@/components/Button/Button";
import {IconGeneralRight} from "@/components/Icon/Icon";

const ButtonsPage = () => {
	return (
		<div className={style.PageWithMenuOpen}>
			<h1>Buttons</h1><br/><br/>
			<h3>Neutral</h3><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'medium'} color={'neutral'}>Primary</Button>
				<Button type={'primary'} size={'medium'} color={'neutral'} disabled={true}>Primary</Button>
				<Button type={'secondary'} size={'medium'} color={'neutral'}>Secondary</Button>
				<Button type={'secondary'} size={'medium'} color={'neutral'} disabled={true}>Secondary</Button>
				<Button type={'tertiary'} size={'medium'} color={'neutral'}>Tertiary</Button>
				<Button type={'tertiary'} size={'medium'} color={'neutral'} disabled={true}>Tertiary</Button>
			</div><br/>
			<h3>Mustard</h3><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'medium'} color={'mustard'}>Primary</Button>
				<Button type={'primary'} size={'medium'} color={'mustard'} disabled={true}>Primary</Button>
				<Button type={'secondary'} size={'medium'} color={'mustard'}>Secondary</Button>
				<Button type={'secondary'} size={'medium'} color={'mustard'} disabled={true}>Secondary</Button>
				<Button type={'tertiary'} size={'medium'} color={'mustard'}>Tertiary</Button>
				<Button type={'tertiary'} size={'medium'} color={'mustard'} disabled={true}>Tertiary</Button>
			</div><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'large'} color={'mustard'}>Primary</Button>
				<Button type={'primary'} size={'large'} color={'mustard'} disabled={true}>Primary</Button>
				<Button type={'secondary'} size={'large'} color={'mustard'} >Secondary</Button>
				<Button type={'secondary'} size={'large'} color={'mustard'} disabled={true}>Secondary</Button>
				<Button type={'tertiary'} size={'large'} color={'mustard'}>Tertiary</Button>
				<Button type={'tertiary'} size={'large'} color={'mustard'} disabled={true}>Tertiary</Button>
			</div><br/><br/>
			<h3>Orange</h3><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'medium'} color={'orange'}>Primary</Button>
				<Button type={'primary'} size={'medium'} color={'orange'} disabled={true}>Primary</Button>
				<Button type={'secondary'} size={'medium'} color={'orange'}>Secondary</Button>
				<Button type={'secondary'} size={'medium'} color={'orange'} disabled={true}>Secondary</Button>
				<Button type={'tertiary'} size={'medium'} color={'orange'}>Tertiary</Button>
				<Button type={'tertiary'} size={'medium'} color={'orange'} disabled={true}>Tertiary</Button>
			</div><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'large'} color={'orange'}>Primary</Button>
				<Button type={'primary'} size={'large'} color={'orange'} disabled={true}>Primary</Button>
				<Button type={'secondary'} size={'large'} color={'orange'} >Secondary</Button>
				<Button type={'secondary'} size={'large'} color={'orange'} disabled={true}>Secondary</Button>
				<Button type={'tertiary'} size={'large'} color={'orange'}>Tertiary</Button>
				<Button type={'tertiary'} size={'large'} color={'orange'} disabled={true}>Tertiary</Button>
			</div><br/><br/>
			<h3>Lilac</h3><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'medium'} color={'lilac'}>Primary</Button>
				<Button type={'primary'} size={'medium'} color={'lilac'} disabled={true}>Primary</Button>
				<Button type={'secondary'} size={'medium'} color={'lilac'}>Secondary</Button>
				<Button type={'secondary'} size={'medium'} color={'lilac'} disabled={true}>Secondary</Button>
				<Button type={'tertiary'} size={'medium'} color={'lilac'}>Tertiary</Button>
				<Button type={'tertiary'} size={'medium'} color={'lilac'} disabled={true}>Tertiary</Button>
			</div><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'large'} color={'lilac'}>Primary</Button>
				<Button type={'primary'} size={'large'} color={'lilac'} disabled={true}>Primary</Button>
				<Button type={'secondary'} size={'large'} color={'lilac'} >Secondary</Button>
				<Button type={'secondary'} size={'large'} color={'lilac'} disabled={true}>Secondary</Button>
				<Button type={'tertiary'} size={'large'} color={'lilac'}>Tertiary</Button>
				<Button type={'tertiary'} size={'large'} color={'lilac'} disabled={true}>Tertiary</Button>
			</div><br/><br/>
			<h3>Sage</h3><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'medium'} color={'sage'}>Primary</Button>
				<Button type={'primary'} size={'medium'} color={'sage'} disabled={true}>Primary</Button>
				<Button type={'secondary'} size={'medium'} color={'sage'}>Secondary</Button>
				<Button type={'secondary'} size={'medium'} color={'sage'} disabled={true}>Secondary</Button>
				<Button type={'tertiary'} size={'medium'} color={'sage'}>Tertiary</Button>
				<Button type={'tertiary'} size={'medium'} color={'sage'} disabled={true}>Tertiary</Button>
			</div><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'large'} color={'sage'}>Primary</Button>
				<Button type={'primary'} size={'large'} color={'sage'} disabled={true}>Primary</Button>
				<Button type={'secondary'} size={'large'} color={'sage'} >Secondary</Button>
				<Button type={'secondary'} size={'large'} color={'sage'} disabled={true}>Secondary</Button>
				<Button type={'tertiary'} size={'large'} color={'sage'}>Tertiary</Button>
				<Button type={'tertiary'} size={'large'} color={'sage'} disabled={true}>Tertiary</Button>
			</div><br/><br/>
			<h3>Icons</h3><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'medium'} color={'mustard'} isIcon={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'medium'} color={'mustard'} isIcon={true} disabled={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'medium'} color={'orange'} isIcon={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'medium'} color={'orange'} isIcon={true} disabled={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'medium'} color={'lilac'} isIcon={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'medium'} color={'lilac'} isIcon={true} disabled={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'medium'} color={'sage'} isIcon={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'medium'} color={'sage'} isIcon={true} disabled={true}><IconGeneralRight/></Button>

			</div><br/>
			<div style={{display: 'flex', gap: '16px'}}>
				<Button type={'primary'} size={'large'} color={'mustard'} isIcon={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'large'} color={'mustard'} isIcon={true} disabled={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'large'} color={'orange'} isIcon={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'large'} color={'orange'} isIcon={true} disabled={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'large'} color={'lilac'} isIcon={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'large'} color={'lilac'} isIcon={true} disabled={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'large'} color={'sage'} isIcon={true}><IconGeneralRight/></Button>
				<Button type={'primary'} size={'large'} color={'sage'} isIcon={true} disabled={true}><IconGeneralRight/></Button>
			</div><br/><br/>
		</div>
	)
}

export default ButtonsPage;