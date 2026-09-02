const normalizeUrl = (url = "") => {
    return url.split("#")[0];
};

const detectSelectedMenuItem = (menuItems, url) => {
    const normalizedUrl = normalizeUrl(url);
    let selectedMenuItem = '';

    menuItems.forEach(menuItem => {
        if ('submenu' in menuItem) {
            menuItem['submenu'].forEach(submenu => {
                if (normalizeUrl(submenu['url']) === normalizedUrl) {
                    selectedMenuItem = menuItem['key']
                }
            })
        }
    })

    return selectedMenuItem
}

export default detectSelectedMenuItem;
