const detectCurrentMenuTitle = (menuItem, url) => {
    let isActive = false
    if ('url' in menuItem) {
        // Check if the menu pointing to the current URL
        if (menuItem['url'] === url) {
            isActive = true
        }
    } else {
        if ('submenu' in menuItem) {
            menuItem['submenu'].forEach((submenu) => {
                if ('url' in submenu) {
                    if (submenu['url'] === url) {
                        isActive = true
                    }
                }
            })
        } else {
            isActive = false
        }
    }
    return isActive
}

export default detectCurrentMenuTitle;