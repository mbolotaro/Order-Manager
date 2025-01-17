import Row from "@/components/atoms/Row";
import { TableInfoProps } from "./helpers/table-info-props";
import { InfoKeyStyle, InfoValueStyle } from "./style";

export default function TableInfo(props: TableInfoProps) {
    return <Row $gap="20px" $padding={{ y: '6px' }}>
        {props.infos.map(info => (<div key={info.key}>
            <InfoKeyStyle>{info.key} : </InfoKeyStyle>
            <InfoValueStyle>{info.value}</InfoValueStyle>
        </div>))}
    </Row>
}