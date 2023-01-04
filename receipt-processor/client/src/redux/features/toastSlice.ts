/* toastSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Interface(s) */
interface ToastState {
    show: boolean;
    content: {
        icon: string;
        message: string;
        color: string;
    }
}

const initialState: ToastState = {
    show: false,
    content: {
        icon: '',
        message: '',
        color: ''
    }
};

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setToast: (state, action) => {
            state.content = action.payload;
        },
        showToast: (state, action) => {
            state.show = action.payload;
        }
    }
});

/* Action(s) */
export const {
    setToast,
    showToast
} = toastSlice.actions;

/* Reducer */
export default toastSlice.reducer;