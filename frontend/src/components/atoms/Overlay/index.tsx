import { useEffect, useState } from "react";
import { OverlayProps } from "./helpers/overlay-props";
import { OverlayStyle } from "./style";

export default function Overlay(props: OverlayProps) {
    const [animateEnd, setAnimateEnd] = useState(false)

    const [active, setActive] = useState(false)

    const duration = 0.5

    useEffect(() => {
        if(props.active) {
            setActive(true)
        } else {
            if(active) {
                setActive(false)
                setAnimateEnd(true)
                setTimeout(() => {
                    setActive(false)
                    setAnimateEnd(false)
                }, duration * 900)
            }
        }
    }, [props.active, active])

    return <OverlayStyle 
        $active={active} 
        $duration={duration} 
        $animateEnd={animateEnd}
    />
}