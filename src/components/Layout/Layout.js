import DesktopHeader from "@/components/Layout/desktop/Header";
import DesktopFooter from "@/components/Layout/desktop/Footer";
import DesktopMenu from "@/components/Menu/desktop/Menu";

import MobileHeader from "@/components/Layout/mobile/Header";
import MobileFooter from "@/components/Layout/mobile/Footer";

import style from "@/components/Layout/Layout.module.scss";
import {Media} from "@/utils/media";
import MobileMenu from "@/components/Menu/mobile/MobileMenu";

import {MenuProvider} from "@/utils/context/MenuContext";
import {SearchProvider} from "@/utils/context/SearchContext";
import MenuOpenButton from "@/components/Layout/desktop/MenuOpenButton";
import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
    return (
        <MenuProvider>
            <SearchProvider>
                <Head>
                    <meta name="robots" content="all" key="robots" />
                </Head>
                <div className={style.Header}>
                    <Media greaterThanOrEqual="md">
                        <DesktopHeader />
                        <MenuOpenButton />
                    </Media>
                    <Media lessThan="md">
                        <MobileHeader />
                    </Media>
                </div>
                <div className={`suisseIntlRegular`} style={{zIndex: 1}}>
                    {children}
                    <Media greaterThanOrEqual="md">
                        <div className={style.Menu}>
                            <DesktopMenu />
                        </div>
                    </Media>
                    <Media lessThan="md">
                        <div style={{zIndex: 1000}}>
                            <MobileMenu />
                        </div>
                    </Media>
                </div>
                <Media greaterThanOrEqual="md">
                    <DesktopFooter />
                </Media>
                <Media lessThan="md">
                    <MobileFooter />
                </Media>
            </SearchProvider>
        </MenuProvider>
    )
}

export default Layout