import {createContext, useReducer} from 'react';

export const MenuContext = createContext(null);
export const MenuDispatchContext = createContext(null);

export const MenuProvider = ({children}) => {
    const [menuOpen, dispatch] = useReducer(menuReducer, [])

    return (
        <MenuContext.Provider value={menuOpen}>
            <MenuDispatchContext.Provider value={dispatch}>
                {children}
            </MenuDispatchContext.Provider>
        </MenuContext.Provider>
    )
}

const menuReducer = (menuOpen, action) => {
    switch (action.type) {
        case 'open':
            if (menuOpen.includes(action.value) && menuOpen.indexOf(action.value) + 1 === menuOpen.length) {
                return []
            } else {
                return Array.from(Array(action.value + 1).keys())
            }
        case 'open-mobile-menu':
            return ['openMobileMenu'];
        case 'close':
            return []
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}