import CloseIcon from "@/assets/icons/CloseIcon";
import { ToastProps } from "./helpers/toast-props";
import { ToastStyle } from "./style";
import { useCallback, useEffect } from "react";

export default function Toast(props: ToastProps) {

    const duration = 0.3
    const close = useCallback(() => {
        props.onClose(props.message)
    }, [props])

    useEffect(() => {
        setTimeout(() => {
            close()
        }, 2000)
    }, [close])

    return <ToastStyle 
        $styleType={props.styleType} 
        $position={props.position} 
        $duration={duration}
    >
            <div className="toast-mark">
            </div>
            <p className="toast-message">
                {props.icon}
                {props.message}
            </p>
            <div className="toast-close" onClick={close}>
                <CloseIcon size={25} styleType="text"/>
            </div>
    </ToastStyle>
}