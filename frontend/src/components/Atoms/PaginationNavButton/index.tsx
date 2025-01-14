import Arrow from "@/assets/icons/Arrow";
import { IPaginationNavButtonProps } from "./helpers/pagination-nav-button-props.interface";
import { PaginationNavButtonStyle } from "./style";

export default function PaginationNavButton(props: IPaginationNavButtonProps) {
    return <PaginationNavButtonStyle 
        onClick={() => props.onClick(props.action ?? props.pageNumber)} 
        $type={props.action? props.action : 'mid'} 
        current={props.currentPage !== undefined && props.pageNumber !== undefined && props.currentPage === props.pageNumber}
    >
        {
            props.action?
            <Arrow direction={props.action === 'previous' ? 'left' : 'right'} size={15} styleType="text"/> :
            props.pageNumber 
        }
    </PaginationNavButtonStyle>
}