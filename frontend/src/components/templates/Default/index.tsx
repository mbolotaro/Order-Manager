import Header from "@/components/organisms/Header";
import { DefaultLayoutProps } from "./helpers/default-layout-props";
import Footer from "@/components/organisms/Footer";
import LateralMenu from "@/components/organisms/LateralMenu";
import { DefaultLayoutMainStyle } from "./style";
import Main from "@/components/organisms/Main";
import { useState } from "react";

export default function DefaultLayout(props: DefaultLayoutProps) {
    const [railMenu, setRailMenu] = useState(false)

    return <>
        <Header onRailLateralMenu={() => setRailMenu(prev => !prev)}/>
        <div>
            <LateralMenu rail={railMenu} />
            <DefaultLayoutMainStyle>
                <Main>
                    {props.children}
                </Main>
            </DefaultLayoutMainStyle>
        </div>
        <Footer/>
    </>
}