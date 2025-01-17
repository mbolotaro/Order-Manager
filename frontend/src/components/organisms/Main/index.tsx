import { MainProps } from "./helpers/main-props";
import { MainStyle } from "./style";

export default function Main(props: MainProps) {
    return <MainStyle>
        {props.children}
    </MainStyle>
}