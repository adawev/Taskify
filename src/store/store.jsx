import { configureStore } from "@reduxjs/toolkit";

import teams from "./reducers/teams";
import tasks from "./reducers/tasks";
import api from './middleware/api';

export default configureStore({
    reducer: {
        teams,
        tasks,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api),
});