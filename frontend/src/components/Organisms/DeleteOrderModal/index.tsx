import Modal from "@/components/Molecules/Modal";
import { IDeleteOrderProps } from "./helpers/delete-order-props.interface";
import Button from "@/components/Atoms/Button";
import AlertIcon from "@/assets/icons/AlertIcon";
import { useOrder } from "@/hooks/use-order";

export default function DeleteOrderModal(props: IDeleteOrderProps) {
    const { removeMany, loading } = useOrder()

    async function onSubmit() {
        if(props.many) {
            await removeMany(props.ordersId ?? [])
        }
        else if(props.order?.id) {
            await removeMany([props.order?.id])
            props.close()
        }
    }

    return <Modal title={props.many? 'Excluir Pedidos' : 'Excluir Pedido'} opened={props.opened} width="500px" close={props.close}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <AlertIcon size={200} styleType="danger"/>
        </div>
        <span style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '16px'}}>
            {props.many? `Deseja excluir ${props.ordersId?.length} pedidos?` : `Deseja excluir o Pedido "${props.order?.name}"`}  ?
        </span>
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
            <Button model="secondary" styleType="danger" text="Cancelar" onClick={props.close} loading={loading}/>
            <Button model="primary" styleType="danger" text="Excluir" onClick={onSubmit} loading={loading}/>
        </div>
    </Modal>
}