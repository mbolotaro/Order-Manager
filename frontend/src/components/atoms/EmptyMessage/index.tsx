import { EmptyMessageProps } from "./helpers/empty-message-props";
import { EmptyMessageStyle } from "./style";

export default function EmptyMessage(props: EmptyMessageProps) {
    return <EmptyMessageStyle>{props.message}</EmptyMessageStyle>
}