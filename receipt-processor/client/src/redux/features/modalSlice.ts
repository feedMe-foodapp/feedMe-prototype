/* modalSlice.ts */

/* React-Redux */
import {
    createSlice, PayloadAction
} from '@reduxjs/toolkit';

/* Interface(s) */
interface ModalSliceModel {
    show: boolean;
}

const initialState: ModalSliceModel = {
    show: false
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        }
    }
});

/* Action(s) */
export const {
    showModal
} = modalSlice.actions;

/* Reducer */
export default modalSlice.reducer;