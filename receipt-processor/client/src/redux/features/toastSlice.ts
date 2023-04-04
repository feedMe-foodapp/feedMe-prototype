/* toastSlice.ts */

/* React-Redux */
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

/* Interface(s) */
interface ToastSliceModel {
    show: boolean; 
    content?: {
        icon?: string;
        message?: string;
        color?: string;
    }
}

const initialState: ToastSliceModel = {
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
        setToast: (state, action: PayloadAction<ToastSliceModel>) => {
            state.show = action.payload.show;
            state.content = action.payload.content;
        }
    }
});

/* Action(s) */
export const {
    setToast
} = toastSlice.actions;

/* Reducer */
export default toastSlice.reducer;