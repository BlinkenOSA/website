import style from "@/components/Menu/v1/Menu.module.scss";
import {motion} from "framer-motion";
import {useMeasure, useWindowSize} from "react-use";

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
	], [
		{title: 'Academics 01', url: '/collections/collections1'},
		{title: 'Academics 02', url: '/collections/collections2'}
	], [
		{title: 'Public Programs 01', url: '/collections/collections1'},
		{title: 'Public Programs 02', url: '/collections/collections2'}
	]
]


