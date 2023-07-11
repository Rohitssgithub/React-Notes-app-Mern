import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type';
const API_URL = 'http://localhost:9500';

export const addNewTodo = (data) => async (dispatch) => {
    // console.log(data)
    // try {
    //     const res = await axios.post(`${API_URL}/todo/add`, { data });
    //     console.log(res.data)
    //     dispatch({ type: ADDNEW_TODO, payload: res.data });
    //     console.log(payload)
    // }
    // catch (error) {
    //     console.log('Error while calling addNewTodo API ', error.message);
    // }
    const response = await fetch("http://localhost:9500/todo/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    );

    try {
        const result = await response.json();
        console.log(result)
        dispatch({ type: ADDNEW_TODO, payload: result.todo });
    } catch (error) {
        return rejectWithValue(error);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/get`);
        console.log(res.data.todo)
        dispatch({ type: GETALL_TODO, payload: res.data.todo });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    console.log(id)
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);
        console.log(res.data)

        dispatch({ type: TOGGLE_TODO, payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const updateTodo = (data) => async (dispatch) => {

    const response = await fetch(
        `http://localhost:9500/todo/edit/${data._id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    )
    try {
        const res = await response.json();
        // console.log(res.data)
        dispatch({ type: UPDATE_TODO, payload: data });

    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todo/delete/${id}`);
        dispatch({ type: DELETE_TODO, payload: res.data.todo });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}


// export const updateTodo = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
//     console.log(data)
//     const response = await axios.put(`http://localhost:9500/todo/edit/${data._id}`, data);
//     console.log(response)

//     try {
//         const result = await response.data;
//         console.log("update action", result.users)
//         return result
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })