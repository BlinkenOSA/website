import DesktopHeader from "@/components/Layout/desktop/Header";
import DesktopFooter from "@/components/Layout/desktop/Footer";
import DesktopMenu from "@/components/Menu/desktop/Menu";

import MobileHeader from "@/components/Layout/mobile/Header";

import style from "@/components/Layout/Layout.module.scss";
import {Media} from "@/utils/media";
import MobileMenu from "@/components/Menu/mobile/MobileMenu";

import {MenuProvider} from "@/utils/context/MenuContext";
import {SearchProvider} from "@/utils/context/SearchContext";

const Layout = ({ children }) => {
    return (
        <MenuProvider>
            <SearchProvider>
                <div className={style.Header}>
                    <Media greaterThanOrEqual="lg">
                        <DesktopHeader />
                    </Media>
                    <Media lessThan="lg">
                        <MobileHeader />
                    </Media>
                </div>
                <div className={`suisseIntlRegular`}>
                    {children}
                    <Media greaterThanOrEqual="lg">
                        <div className={style.Menu}>
                            <DesktopMenu />
                        </div>
                    </Media>
                    <Media lessThan="lg">
                        <MobileMenu />
                    </Media>
                </div>
                <Media greaterThanOrEqual="lg">
                    <DesktopFooter />
                </Media>
                <Media lessThan="lg">
                    <div/>
                </Media>
            </SearchProvider>
        </MenuProvider>
    )
}

export default Layout