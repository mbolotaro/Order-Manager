import Modal from "@/components/molecules/Modal";
import { ViewOrderModalPropsInterface } from "./helpers/view-order-modal-props";

export default function ViewOrderModal(props: ViewOrderModalPropsInterface) {
    return <Modal opened={props.opened} title={props.order?.name ?? 'Carregando...'} width="900px" close={props.close}>
        <div>
            <span>ID: </span>
        </div>
        <div>
            <span>Nome: </span> <span>{props.order?.name}</span>

        </div>
        <div>
            <span>Status: </span>
            <span>
                
            </span>
        </div>
        <div>
            <span>Atendente: </span> <span>{props.order?.attendant?.name ?? 'NÃO INFORMADO'}</span>
        </div>
    </Modal>
}