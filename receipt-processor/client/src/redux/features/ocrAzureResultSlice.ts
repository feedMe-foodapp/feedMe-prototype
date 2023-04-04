/* ocrAzureResultSlice.ts */

/* React Redux */
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
    ocrAzureResultDetail: OCRAzureResultModel | undefined;
}

const initialState: OCRAzureResultState = {
    ocrAzureResult: undefined,
    ocrAzureResultDetail: undefined
}

export const ocrAzureResultSlice = createSlice({
    name: 'ocrAzureResult',
    initialState,
    reducers: {
        setOCRAzureResult: (state, action: PayloadAction<OCRAzureResultModel[]>) => {
            state.ocrAzureResult = action.payload;
        },
        setOCRAzureResultDetail: (state, action: PayloadAction<OCRAzureResultModel>) => {
            state.ocrAzureResultDetail = action.payload;
        },
        updateOCRAzureResult: (state, action: PayloadAction<OCRAzureResultModel>) => {
            // eslint-disable-next-line array-callback-return
            state.ocrAzureResult?.map((ocrAzureResult: OCRAzureResultModel, __index: number) => {
                if(ocrAzureResult.id === action.payload.id) {
                    state.ocrAzureResult![__index].properties.description.value = action.payload.properties.description.value;
                }
            });
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
    setOCRAzureResultDetail,
    updateOCRAzureResult,
    deleteOCRAzureResult,
    clearOCRAzureResult
} = ocrAzureResultSlice.actions;

/* Reducer */
export default ocrAzureResultSlice.reducer;