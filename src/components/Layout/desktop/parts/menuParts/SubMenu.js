import style from "@/components/Layout/desktop/parts/Menu.module.scss";

const submenuConfig = [
	[
		{title: 'About the Archivum', url: '/about/about1'},
		{title: 'We are CEU', url: '/about/about2'},
		{title: 'Verzió', url: '/about/about3'},
		{title: 'Partner Projects', url: '/about/about4'},
		{title: 'Staff', url: '/about/about4'},
		{title: 'Visit Us', url: '/about/about5'},
		{title: 'Join Us', url: '/about/about6'},
		{title: 'Policies', url: '/about/about7'},
		{title: 'Annual Reports', url: '/about/about8'},
	], [
		{title: 'Access the Collection', url: '/collections/collections1'},
		{title: 'About our Collection', url: '/collections/collections2'},
		{title: 'Curated Collections', url: '/collections/collections3'},
		{title: 'Archival Projects', url: '/collections/collections4'},
		{title: 'Donate your archive', url: '/collections/collections5'},
		{title: 'Archival news and blog', url: '/collections/collections6'},
	]
]


const SubMenu = () => {
	return (
		<div className={style.SubMenuList}>
			<ul className={'suisseIntlBook'}>
				<li>Item A</li>
				<li>Item B</li>
			</ul>
		</div>
	)
}

export default SubMenu;