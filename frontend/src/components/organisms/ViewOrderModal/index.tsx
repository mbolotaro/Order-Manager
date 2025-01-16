import Modal from "@/components/molecules/Modal";
import { ViewOrderModalPropsInterface } from "./helpers/view-order-modal-props";
import { ViewOrderModalInfo, ViewOrderModalKey, ViewOrderModalValue } from "./style";
import StatusShow from "@/components/atoms/StatusShow";

export default function ViewOrderModal(props: ViewOrderModalPropsInterface) {
    return <Modal 
            opened={props.opened} title={props.order?.name ?? 'Carregando...'} 
            width="40%" close={props.close}>
        <ViewOrderModalInfo>
            <ViewOrderModalKey>Nome: </ViewOrderModalKey> 
            <ViewOrderModalValue>{props.order?.name}</ViewOrderModalValue>
        </ViewOrderModalInfo>
        <ViewOrderModalInfo>
            <ViewOrderModalKey>Status: </ViewOrderModalKey>
            <ViewOrderModalValue>
                <StatusShow opened={props.order?.isOpened ?? false}/>
            </ViewOrderModalValue>
        </ViewOrderModalInfo>
        <ViewOrderModalInfo>
            <ViewOrderModalKey>Atendente: </ViewOrderModalKey> 
            <ViewOrderModalValue>{props.order?.attendant?.name ?? 'NÃO INFORMADO'}</ViewOrderModalValue>
        </ViewOrderModalInfo>
    </Modal>
}