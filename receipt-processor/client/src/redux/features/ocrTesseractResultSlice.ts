/* ocrTesseractResultSlice.ts */

/* React Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Model(s) */
import {
    OCRTesseractResultModel
} from 'src/shared/models/ocrTesseractResult';

/* Interface(s) */
interface OCRTesseractResultState {
    ocrTesseractResult: OCRTesseractResultModel[] | undefined;
}

const initialState: OCRTesseractResultState = {
    ocrTesseractResult: undefined
}

export const ocrTesseractResultSlice = createSlice({
    name: 'ocrTesseract',
    initialState,
    reducers: {
        setOCRTesseractResult: (state, action) => {
            state.ocrTesseractResult = action.payload;
        },
        clearOCRTesseractResult: (state) => {
            state.ocrTesseractResult = undefined;
        }
    }
});

/* Action(s) */
export const {
    setOCRTesseractResult,
    clearOCRTesseractResult
} = ocrTesseractResultSlice.actions;

/* Reducer */
export default ocrTesseractResultSlice.reducer;