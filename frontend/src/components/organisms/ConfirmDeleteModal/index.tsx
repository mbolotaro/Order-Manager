import Modal from "@/components/molecules/Modal";
import { ConfirmDeleteProps } from "./helpers/delete-order-props";
import Button from "@/components/atoms/Button";
import AlertIcon from "@/assets/icons/AlertIcon";
import Row from "@/components/atoms/Row";

export default function ConfirmDeleteModal(props: ConfirmDeleteProps) {
    async function handleConfirm() {
        props.onConfirm()

        if(!props.lazy) {
            props.close()
        }
    }

    return <Modal title={props.title} opened={props.opened} width="500px" close={props.close}>
        <Row $justify="center">
            <AlertIcon size={200} styleType="danger"/>
        </Row>
        <Row $justify="center" $padding={{bottom: '12px'}}>
            {props.subtitle}
        </Row>
        <Row $gap="8px">
            <Button model="secondary" styleType="danger" text="Cancelar" $width="50%" onClick={props.close} loading={props.loading}/>
            <Button model="primary" styleType="danger" text="Excluir" $width="50%" onClick={handleConfirm} loading={props.loading}/>
        </Row>
    </Modal>
}