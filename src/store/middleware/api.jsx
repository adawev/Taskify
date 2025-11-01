import axios from "axios";

const api = ({ dispatch }) => (next) => async (action) => {
    if (action.type !== "api/apiCall") return next(action);

    const { url, method, data, onSuccess, onError, auth = true, responseType } = action.payload;

    try {
        const headers = {};

        if (auth) {
            const token = localStorage.getItem("token");
            if (token) {
                headers["Authorization"] = token.startsWith("Bearer ")
                    ? token
                    : `Bearer ${token}`;
            }
        }

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
