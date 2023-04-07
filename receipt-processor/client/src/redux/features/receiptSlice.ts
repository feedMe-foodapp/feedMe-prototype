/* receiptSlice.ts */

/* React Redux */
import {
    createSlice, 
    PayloadAction
} from '@reduxjs/toolkit';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receipt';

/* Interface(s) */
interface ReceiptState {
    receipt: ReceiptModel | undefined;
};

const initialState: ReceiptState = {
    receipt: undefined
};

export const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers: {
        setReceipt: (state, action: PayloadAction<ReceiptModel>) => {
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
});

/* Action(s) */
export const {
    setReceipt,
    deleteReceipt
} = receiptSlice.actions;

/* Reducer */
export default receiptSlice.reducer;
