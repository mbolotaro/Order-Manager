import { useEffect, useState } from "react";
import { IHoverDetailsProps } from "./helpers/hover-details-props.interface";
import ReactDOM from 'react-dom'

export function HoverDetails(props: IHoverDetailsProps) {
    const [mounted, setMounted] = useState(false)
    const [onHover, setOnHover] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) {
        return null
    }

    return <div>
        <div
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
        >
            {props.children}
        </div>
        {
            onHover &&
            ReactDOM.createPortal(<div>{props.details}</div>, document.body)
        }
    </div>
}