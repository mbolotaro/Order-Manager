import Header from "@/components/organisms/Header";
import { IDefaultLayoutProps } from "./helpers/default-layout-props.interface";
import Footer from "@/components/organisms/Footer";
import LateralMenu from "@/components/organisms/LateralMenu";
import { DefaultLayoutMainStyle } from "./style";

export default function DefaultLayout(props: IDefaultLayoutProps) {
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