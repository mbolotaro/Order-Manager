import Header from "@/components/organisms/Header";
import { DefaultLayoutProps } from "./helpers/default-layout-props";
import Footer from "@/components/organisms/Footer";
import LateralMenu from "@/components/organisms/LateralMenu";
import { DefaultLayoutMainStyle } from "./style";

export default function DefaultLayout(props: DefaultLayoutProps) {
    return <>
        <Header/>
        <div>
            <LateralMenu/>
            <DefaultLayoutMainStyle>
                {props.children}
            </DefaultLayoutMainStyle>
        </div>
        <Footer/>
    </>
}