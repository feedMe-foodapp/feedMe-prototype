/* receiptSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* uuid */
import { 
    v4 as uuidv4 
} from 'uuid';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receiptModel';

/* Interface(s) */
interface ReceiptState {
    receipt: ReceiptModel;
};

const initialState: ReceiptState = {
    receipt: {
        id: '',
        path: ''
    }
};

export const receiptSlice = createSlice({
    name: 'receiptSlice',
    initialState,
    reducers: {
        uploadReceipt: (state, action) => {
            // uploading a receipt will automatically generate a uuid as id
            state.receipt = {id: uuidv4(), path: action.payload}; 
        },
        deleteReceipt: (state) => {
            state.receipt = initialState.receipt;
        }
    }
})

/* Action(s) */
export const {
    uploadReceipt,
    deleteReceipt
} = receiptSlice.actions;

/* Reducer(s) */
export default receiptSlice.reducer;
