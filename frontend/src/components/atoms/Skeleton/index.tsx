import { SkeletonProps } from "./helpers/skeleton-props";
import { SkeletonStyle } from "./style";

export default function Skeleton(props: SkeletonProps) {
    return <SkeletonStyle $height={props.height} $width={props.width}/>
}