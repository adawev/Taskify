import { apiCall } from "../api";
import {
    getTasksRequest,
    getTasksSuccess,
    getTasksFailure,
    createTaskRequest,
    createTaskSuccess,
    createTaskFailure,
    updateTaskRequest,
    updateTaskSuccess,
    updateTaskFailure,
    deleteTaskRequest,
    deleteTaskSuccess,
    deleteTaskFailure,
} from "../reducers/tasks";

export const getTasks = () => (dispatch) => {
    dispatch(getTasksRequest());
    dispatch(
        apiCall({
            url: "tasks/",
            method: "GET",
            onSuccess: (data) => {
                const tasks = data.results || data;
                return getTasksSuccess(tasks);
            },
            onError: (error) => getTasksFailure(error.message),
        })
    );
};


export const createTask = (taskData) => (dispatch) => {
    dispatch(createTaskRequest());
    dispatch(
        apiCall({
            url: "tasks/",
            method: "POST",
            data: {
                name: taskData.title,
                description: taskData.description || "",
                status: taskData.status || "todo",
                due_date: taskData.dueDate || null,
            },
            onSuccess: (data) => {
                dispatch(createTaskSuccess(data));
                return data;
            },
            onError: (error) => createTaskFailure(error.message),
        })
    );
};

export const updateTask = (taskId, taskData) => (dispatch) => {
    dispatch(updateTaskRequest());
    dispatch(
        apiCall({
            url: `tasks/${taskId}/`,
            method: "PATCH",
            data: {
                name: taskData.title,
                description: taskData.description,
                status: taskData.status,
                due_date: taskData.dueDate,
            },
            onSuccess: updateTaskSuccess,
            onError: (error) => updateTaskFailure(error.message),
        })
    );
};

export const updateTaskStatusAction = (taskId, newStatus) => (dispatch) => {
    dispatch(updateTaskRequest());
    dispatch(
        apiCall({
            url: `tasks/${taskId}/`,
            method: "PATCH",
            data: {
                status: newStatus,
            },
            onSuccess: updateTaskSuccess,
            onError: (error) => updateTaskFailure(error.message),
        })
    );
};

export const deleteTask = (taskId) => (dispatch) => {
    dispatch(deleteTaskRequest());
    dispatch(
        apiCall({
            url: `tasks/${taskId}/`,
            method: "DELETE",
            onSuccess: () => deleteTaskSuccess(taskId),
            onError: (error) => deleteTaskFailure(error.message),
        })
    );
};
