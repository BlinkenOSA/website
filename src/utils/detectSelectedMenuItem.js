import {useRouter} from "next/router";

const detectSelectedMenuItem = (menuItems, url) => {
    let selectedMenuItem = '';

    menuItems.forEach(menuItem => {
        if ('submenu' in menuItem) {
            menuItem['submenu'].forEach(submenu => {
                if (submenu['url'] === url) {
                    selectedMenuItem = menuItem['key']
                }
            })
        }
    })

    return selectedMenuItem
}

export default detectSelectedMenuItem;