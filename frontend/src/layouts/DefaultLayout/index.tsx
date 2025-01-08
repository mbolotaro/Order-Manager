import Header from "@/components/Organisms/Header";
import { IDefaultLayoutProps } from "./helpers/default-layout-props.interface";
import Footer from "@/components/Organisms/Footer";
import LateralMenu from "@/components/Organisms/LateralMenu";

export default function DefaultLayout(props: IDefaultLayoutProps) {
    return <>
        <Header/>
        <div>
            <LateralMenu/>
            <main>
                {props.children}
            </main>
        </div>
        <Footer/>
    </>
}