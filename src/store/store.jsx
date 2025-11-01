import { configureStore } from "@reduxjs/toolkit";

import student from "./reducers/student";
import paymentHistory from "./reducers/paymentHistory";
import api from './middleware/api';

export default configureStore({
    reducer: {
        student,
        paymentHistory,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api),
});