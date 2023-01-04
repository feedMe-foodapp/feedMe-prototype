/* receiptSlice.ts */

/* React-Redux */
import {
    createSlice, PayloadAction
} from '@reduxjs/toolkit';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receipt';

/* Interface(s) */
interface ReceiptState {
    receipt: ReceiptModel;
};

const initialState: ReceiptState = {
    receipt: {
        id: '',
        content: '',
        uploadedToBlobStorage: false
    }
};

export const receiptSlice = createSlice({
    name: 'receiptSlice',
    initialState,
    reducers: {
        uploadReceipt: (state, action: PayloadAction<ReceiptModel>) => {
            // uploading a receipt will automatically generate a uuid as id
            state.receipt = {
                id: action.payload.id, 
                content: action.payload.content,
                uploadedToBlobStorage: action.payload.uploadedToBlobStorage
            }; 
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
