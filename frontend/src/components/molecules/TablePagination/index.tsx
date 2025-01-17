import { useMemo } from "react";
import { TablePaginationProps } from "./helpers/table-pagination-props";
import { OrderQuantCounter, QuantByPageLabel, SelectStyle } from "./style";
import PaginationNavButton from "@/components/atoms/PaginationNavButton";
import Row from "@/components/atoms/Row";

export default function TablePagination(props: TablePaginationProps) {
    const quantPagesOptions = [10, 20, 30]

    const buttonTotalQuant = useMemo(() => Math.ceil(props.listLength / props.limit), [props.listLength, props.limit])

    const buttonQuant = useMemo(() => {
        return buttonTotalQuant > 3 ? 3 : buttonTotalQuant
    }, [buttonTotalQuant])

    const numberButtons = useMemo(() => {
        // Se estiver na página 1, mostrará o atual e os seguintes botões: 1, 2, 3 / 1,2 ou apenas 1
        if(props.currentPage === 1) {
            return Array.from({ length: buttonQuant}).map((_, index) => index + 1)

        // Se estiver na última página, mostrará o antepenúltimo, penúltimo e último botão: 5, 6, 7 (Exemplo)
        } else if(props.currentPage === buttonTotalQuant) {
            if(buttonTotalQuant - 2 !== 0) {
                return [buttonTotalQuant - 2, buttonTotalQuant - 1, buttonTotalQuant]
            } else return [buttonTotalQuant - 1, buttonTotalQuant]
        
        // Se estiver em qualquer outra página, mostrará o anterior, o atual e o último
        } else {
            return [props.currentPage - 1, props.currentPage, props.currentPage + 1]
        }
    }, [props.currentPage, buttonQuant, buttonTotalQuant])
    
    const startRowIndex = useMemo(() => (props.currentPage - 1) * props.limit + 1, [props.currentPage, props.limit])
    const endRowIndex = useMemo(() => {
        const theoricEndRowIndex = startRowIndex + props.limit - 1 
        
        return theoricEndRowIndex > props.listLength ? props.listLength : theoricEndRowIndex;
    }, [startRowIndex, props.limit, props.listLength])
    
    function handlePrevious() {
        if(props.currentPage !== 1) {
            props.onChangePage(props.currentPage - 1)
        }
    }

    function handleNext() {
        if(props.currentPage !== buttonTotalQuant) {
            props.onChangePage(props.currentPage + 1)
        }
    }

    return <Row $justify="space-between" $wrap $gap="24px" $wrapAt="560px" $justifyWrapped="center">
        <Row $gap="6px" $width="180px">
            <QuantByPageLabel htmlFor="quant-order-by-page">Pedidos por página</QuantByPageLabel>
            <SelectStyle 
                id="quant-order-by-page" 
                items={quantPagesOptions} 
                value={props.limit} 
                onChange={(value) => props.onChangeLimit(Number(value))}
            />
        </Row>
        <OrderQuantCounter>{startRowIndex}-{endRowIndex} de {props.listLength}</OrderQuantCounter>
        <Row>
            <PaginationNavButton action="previous" onClick={handlePrevious}/>
            {
                numberButtons.map((numberButton) => <PaginationNavButton pageNumber={numberButton} onClick={(value) => props.onChangePage(Number(value))} key={numberButton} currentPage={props.currentPage}/>)
            }
            <PaginationNavButton action="next" onClick={handleNext}/>
        </Row>
    </Row>
}