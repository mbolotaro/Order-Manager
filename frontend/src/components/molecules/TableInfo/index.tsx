import { TableInfoProps } from "./helpers/table-info-props";
import { InfoKeyStyle, InfoRowStyle, InfoValueStyle } from "./style";

export default function TableInfo(props: TableInfoProps) {
    return <InfoRowStyle>
        {props.infos.map(info => (<div key={info.key}>
            <InfoKeyStyle>{info.key} : </InfoKeyStyle>
            <InfoValueStyle>{info.value}</InfoValueStyle>
        </div>))}
    </InfoRowStyle>
}