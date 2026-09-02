const normalizeUrl = (url = "") => {
    return url.split("#")[0];
};

const detectCurrentMenuTitle = (menuItem, url) => {
    const normalizedUrl = normalizeUrl(url);
    let isActive = false
    if ('url' in menuItem) {
        // Check if the menu pointing to the current URL
        if (normalizeUrl(menuItem['url']) === normalizedUrl) {
            isActive = true
        }
    } else {
        if ('submenu' in menuItem) {
            menuItem['submenu'].forEach((submenu) => {
                if ('url' in submenu) {
                    if (normalizeUrl(submenu['url']) === normalizedUrl) {
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
