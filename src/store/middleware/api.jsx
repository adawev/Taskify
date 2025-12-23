import axios from "axios";

const api = ({ dispatch }) => (next) => async (action) => {
    if (action.type !== "api/apiCall") return next(action);

    const { url, method, data, onSuccess, onError, auth = false, responseType } = action.payload;

    try {
        const headers = {};


        const response = await axios.request({
            baseURL: "http://localhost:8080/api/",
            url,
            method,
            data,
            headers,
            ...(responseType && { responseType })
        });

        if (onSuccess) dispatch(onSuccess(response.data));
    } catch (error) {
        if (onError) dispatch(onError(error));
    }
};

export default api;
