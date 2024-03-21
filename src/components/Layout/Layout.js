import DesktopHeader from "@/components/Layout/desktop/Header";
import DesktopFooter from "@/components/Layout/desktop/Footer";
import DesktopMenu from "@/components/Menu/desktop/Menu";

import MobileHeader from "@/components/Layout/mobile/Header";

import style from "@/components/Layout/Layout.module.scss";
import { MenuProvider} from "@/utils/context/MenuContext";
import {Media} from "@/utils/media";
import MobileMenu from "@/components/Menu/mobile/MobileMenu";

const Layout = ({ children }) => {
    return (
        <MenuProvider>
            <div className={style.Header}>
                <Media greaterThanOrEqual="md">
                    <DesktopHeader />
                </Media>
                <Media lessThan="md">
                    <MobileHeader />
                </Media>
            </div>
            <div className={`suisseIntlRegular`}>
                {children}
                <Media greaterThanOrEqual="md">
                    <div className={style.Menu}>
                        <DesktopMenu />
                    </div>
                </Media>
                <Media lessThan="md">
                    <MobileMenu />
                </Media>
            </div>
            <Media greaterThanOrEqual="md">
                <DesktopFooter />
            </Media>
            <Media lessThan="md">
                <div/>
            </Media>
        </MenuProvider>
    )
}

export default Layout