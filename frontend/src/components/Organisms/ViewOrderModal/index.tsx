import Modal from "@/components/Molecules/Modal";
import { IViewOrderModalPropsInterface } from "./helpers/view-order-modal-props.interface";

export default function ViewOrderModal(props: IViewOrderModalPropsInterface) {
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