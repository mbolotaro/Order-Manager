import ReactDOM from 'react-dom'
import { ModalContainerStyle, ModalHeaderStyle, ModalStyle } from './style'
import React, { useEffect, useState } from 'react';
import Overlay from '@/components/Atoms/Overlay';
import { IModalProps } from './helpers/modal-props.interface';
import Close from '@/assets/icons/Close';

export default function Modal(props: IModalProps) {
    const [mounted, setMounted] = useState(false)

    const [opened, setOpened] = useState(false)
    const [animateEnd, setAnimateEnd] = useState(false)

    const duration = 0.5

    useEffect(() => {
        setMounted(true);

        if(props.opened) {
            setOpened(true)
        } else {
            if(opened) {
                setAnimateEnd(true)

                setTimeout(() => {
                    setOpened(false)
                    setAnimateEnd(false)
                }, duration * 900)
            }
        }
    }, [props.opened, opened]);


    if(!mounted) {
        return null
    }


    return <div>
        {
            ReactDOM.createPortal(
        <>
            {<Overlay active={props.opened}/> }
            <ModalContainerStyle>
                <ModalStyle
                    open={opened}
                    duration={duration}
                    width={props.width ?? '50%'} 
                    height={props.height ?? 'fit-content'}
                    animateEnd={animateEnd}
                    >
                    <ModalHeaderStyle>
                        <span>{props.title}</span>
                        <Close
                            styleType="text" 
                            size={32}
                            onClick={props.close}
                        />
                    </ModalHeaderStyle>
                    <div>
                        {props.children}
                    </div>
                    
                </ModalStyle>
            </ModalContainerStyle>
        </>,
        document.body
    )
        }
    </div> 
}