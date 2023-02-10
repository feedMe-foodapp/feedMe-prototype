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
    ocrAzureResult: OCRAzureResultModel | undefined;
}

const initialState: OCRAzureResultState = {
    ocrAzureResult: undefined
}

export const ocrAzureResultSlice = createSlice({
    name: 'ocrAzureResultSlice',
    initialState,
    reducers: {
        setOCRAzureResult: (state, action: PayloadAction<OCRAzureResultModel>) => {
            state.ocrAzureResult = action.payload;
        },
        clearOCRAzureResult: (state) => {
            state.ocrAzureResult = undefined
        }
    }
});

/* Action(s) */
export const {
    setOCRAzureResult,
    clearOCRAzureResult
} = ocrAzureResultSlice.actions;

/* Reducer */
export default ocrAzureResultSlice.reducer;