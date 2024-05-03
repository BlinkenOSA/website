import {useContext} from 'react';
import {MenuContext} from "@/utils/context/MenuContext";

const ScrollDisabler = ({ children }) => {
	const menuOpen = useContext(MenuContext);

	return (
		<div style={{overflow: menuOpen.length > 0 ? 'hidden': 'auto'}}>
			{ children }
		</div>
	)
}

export default ScrollDisabler;