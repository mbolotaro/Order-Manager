import AlertIcon from "@/assets/icons/AlertIcon";
import { StyleColorTypes } from "@/styles/helpers/style-color-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

const toastSlice = createSlice({
    name: 'toasts',
    initialState: [] as ToastData[],
    reducers: {
        successAlert(state, message: PayloadAction<string>) {
            state.push({
              message: message.payload,
              styleType: "primary",
              icon: <AlertIcon size={25} styleType="light"/>,
            });
        },

        errorAlert(state, message: PayloadAction<string>) {
            if(!state.find(toast => toast.message === message.payload)) {
                state.push({ message: message.payload, styleType: 'danger', icon: <AlertIcon size={25} styleType="danger"/> })
            }
        },

        warningAlert(state, message: PayloadAction<string>) {
            if(!state.find(toast => toast.message === message.payload)) {
                state.push({ message: message.payload, styleType: 'primary', icon: <AlertIcon size={25} styleType="primary"/>})
            }
        },

        removeToast(state, message: PayloadAction<string>) {
            return state.filter(toast => toast.message !== message.payload)
        }
    }
})

export interface ToastData {
    message: string;
    styleType: StyleColorTypes;
    icon?: ReactNode
}

export const { errorAlert, successAlert, warningAlert, removeToast } = toastSlice.actions

export default toastSlice.reducer