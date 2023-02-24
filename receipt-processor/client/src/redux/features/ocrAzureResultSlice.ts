/* ocrAzureResultSlice.ts */

/* React-Redux */
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

/* Model(s) */
import {
    OCRAzureResultModel
} from 'src/shared/models/ocrAzureResult';

/* Interface(s) */
interface OCRAzureResultState {
    ocrAzureResult: OCRAzureResultModel[] | undefined;
    editOCRAzureResult: OCRAzureResultModel | undefined;
}

const initialState: OCRAzureResultState = {
    ocrAzureResult: undefined,
    editOCRAzureResult: undefined
}

export const ocrAzureResultSlice = createSlice({
    name: 'ocrAzureResultSlice',
    initialState,
    reducers: {
        setOCRAzureResult: (state, action: PayloadAction<OCRAzureResultModel[]>) => {
            state.ocrAzureResult = action.payload;
        },
        setEditOCRAzureResult: (state, action: PayloadAction<OCRAzureResultModel>) => {
            state.editOCRAzureResult = action.payload;
        },
        deleteOCRAzureResult: (state, action: PayloadAction<string>) => {
            state.ocrAzureResult = state.ocrAzureResult?.filter((ocrAzureResult: OCRAzureResultModel) => ocrAzureResult.id !== action.payload);
        },
        clearOCRAzureResult: (state) => {
            state.ocrAzureResult = undefined;
        }
    }
});

/* Action(s) */
export const {
    setOCRAzureResult,
    setEditOCRAzureResult,
    deleteOCRAzureResult,
    clearOCRAzureResult
} = ocrAzureResultSlice.actions;

/* Reducer */
export default ocrAzureResultSlice.reducer;