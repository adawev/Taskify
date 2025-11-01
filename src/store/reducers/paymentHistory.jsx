import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api";
import {toast} from "sonner";

const slice = createSlice({
    name: 'paymentHistory',
    initialState: {
        paymentHistory: [],
    },
    reducers: {
        getFromResponse: (state, action) => {
            state.paymentHistory = action.payload;
        },
        resError: (state, action) => {
            const status = action?.payload?.status;

            if (status) {
                toast.error("Xatolik mavjud!");
            }
        },
    }
});

export const { getFromResponse, resError } = slice.actions;

export const getPaymentHistory = () => apiCall({
    url: "/payment",
    method: "get",
    onSuccess: getFromResponse,
    onError: resError,
});

export default slice.reducer;
