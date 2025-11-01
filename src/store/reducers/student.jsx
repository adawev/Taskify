import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api";
import { toast } from "sonner";

const slice = createSlice({
    name: 'student',
    initialState: {
        students: [],
        studentCount: 0,
        topStudents: [],
    },
    reducers: {
        getFromResponse: (state, action) => {
            state.students = action.payload;
            state.studentCount = state.students.length;
        },
        getFromResTop: (state, action) => {
            state.topStudents = action.payload;
        },
        studentSaved: (state, action) => {
            toast.info(action.payload.message || "Xatolik mavjud!");
        },
        studentUpdated: (state, action) => {
            state.students = state.students.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
            toast.success("Successfully updated student!");
        },
        studentDeleted: (state, action) => {
            state.students = state.students.filter(item => item.id !== action.payload.id);
            toast.success("Successfully deleted student!");
        },
        resError: (state, action) => {
            const status = action?.payload?.status;

            if (status) {
                toast.error("Xatolik mavjud!");
            }
        },
        errorCreate: (state, action) => {
            toast.error("Bunday ma'lumotdagi foydalanuvchi mavjud! Iltimos qaytib urinib ko'ring!");
        }
    }
});

export const {
    getFromResponse,
    studentSaved,
    resError,
    studentUpdated,
    studentDeleted,
    getFromResTop,
    errorCreate
} = slice.actions;

export const saveStudent = (data, reset) => apiCall({
    url: "/student",
    method: "post",
    data,
    onSuccess: (responseData) => (dispatch) => {
        reset();
        dispatch(studentSaved(responseData));
    },
    onError: errorCreate
});

export const updateStudent = (data) => apiCall({
    url: `/student/${data.id}`,
    method: "put",
    data,
    onSuccess: studentUpdated,
    onError: resError
});

export const deleteStudent = (id) => apiCall({
    url: `/student/${id}`,
    method: "delete",
    data: { id },
    onSuccess: studentDeleted,
    onError: resError
});

export const getAllStudents = () => apiCall({
    url: "/student",
    method: "get",
    onSuccess: getFromResponse,
    onError: resError
});

export const getTopStudents = () => apiCall({
    url: "/top_student/today",
    method: "get",
    onSuccess: getFromResTop,
    onError: resError
});

export default slice.reducer;
