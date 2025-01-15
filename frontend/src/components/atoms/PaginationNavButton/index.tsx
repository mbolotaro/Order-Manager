import ArrowIcon from "@/assets/icons/ArrowIcon";
import { PaginationNavButtonProps } from "./helpers/pagination-nav-button-props";
import { PaginationNavButtonStyle } from "./style";

export default function PaginationNavButton(props: PaginationNavButtonProps) {
    return <PaginationNavButtonStyle 
        onClick={() => props.onClick(props.action ?? props.pageNumber)} 
        $type={props.action? props.action : 'mid'} 
        $current={props.currentPage !== undefined && props.pageNumber !== undefined && props.currentPage === props.pageNumber}
    >
        {
            props.action?
            <ArrowIcon direction={props.action === 'previous' ? 'left' : 'right'} size={15} styleType="text"/> :
            props.pageNumber 
        }
    </PaginationNavButtonStyle>
}