import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Fetch tasks by team
        getTasksRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getTasksSuccess: (state, action) => {
            state.loading = false;
            state.list = action.payload;
        },
        getTasksFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Create task
        createTaskRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        createTaskSuccess: (state, action) => {
            state.loading = false;
            state.list.push(action.payload);
        },
        createTaskFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Update task
        updateTaskRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        updateTaskSuccess: (state, action) => {
            state.loading = false;
            const index = state.list.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        updateTaskFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Update task status (for drag and drop)
        updateTaskStatus: (state, action) => {
            const { taskId, newStatus } = action.payload;
            const task = state.list.find(t => t.id === taskId);
            if (task) {
                task.status = newStatus;
                task.updatedAt = new Date().toISOString();
            }
        },

        // Delete task
        deleteTaskRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteTaskSuccess: (state, action) => {
            state.loading = false;
            state.list = state.list.filter(task => task.id !== action.payload);
        },
        deleteTaskFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Clear tasks (when switching teams)
        clearTasks: (state) => {
            state.list = [];
            state.error = null;
        },

        // Clear error
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    getTasksRequest,
    getTasksSuccess,
    getTasksFailure,
    createTaskRequest,
    createTaskSuccess,
    createTaskFailure,
    updateTaskRequest,
    updateTaskSuccess,
    updateTaskFailure,
    updateTaskStatus,
    deleteTaskRequest,
    deleteTaskSuccess,
    deleteTaskFailure,
    clearTasks,
    clearError,
} = tasksSlice.actions;

export default tasksSlice.reducer;
