import Arrow from "@/assets/icons/Arrow";
import { IPaginationNavButtonProps } from "./helpers/pagination-nav-button-props.interface";
import { PaginationNavButtonStyle } from "./style";

export default function PaginationNavButton(props: IPaginationNavButtonProps) {
    return <PaginationNavButtonStyle $type={props.action? props.action : 'mid'}>
        {
            props.action?
            <Arrow direction={props.action === 'previous' ? 'left' : 'right'} size={15} styleType="text"/> :
            props.pageNumber 
        }
    </PaginationNavButtonStyle>
}