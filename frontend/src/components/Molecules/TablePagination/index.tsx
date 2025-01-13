import { OrderQuantCounter, PaginationNavStyle, QuantByPageContainer, QuantByPageLabel, SelectStyle, TablePaginationStyleContainer } from "./style";
import PaginationNavButton from "@/components/Atoms/PaginationNavButton";

export default function TablePagination() {
    const quantPagesOptions = [10, 20, 30]

    return <TablePaginationStyleContainer>
        <QuantByPageContainer>
            <QuantByPageLabel htmlFor="quant-order-by-page">Pedidos por página</QuantByPageLabel>
            <SelectStyle id="quant-order-by-page" items={quantPagesOptions}/>
        </QuantByPageContainer>
        <OrderQuantCounter>1-10 de 100</OrderQuantCounter>
        <PaginationNavStyle>
            <PaginationNavButton action="previous"/>
            <PaginationNavButton pageNumber={1}/>
            <PaginationNavButton pageNumber={2}/>
            <PaginationNavButton pageNumber={3}/>
            <PaginationNavButton pageNumber={'...'}/>
            <PaginationNavButton action="next"/>
        </PaginationNavStyle>
    </TablePaginationStyleContainer>
}