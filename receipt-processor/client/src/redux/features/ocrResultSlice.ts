/* ocrResultSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Model(s) */
import {
    OCRResultModel
} from 'src/shared/models/ocrResult';

/* Mock(s) */
import {
    OCR_RESULT
} from 'src/shared/mocks/ocrResult'

interface OCRResultState {
    ocrResult: OCRResultModel;
}

const initialState: OCRResultState = {
    ocrResult: OCR_RESULT
};


export const ocrResultSlice = createSlice({
    name: 'ocrResult',
    initialState,
    reducers: {
       
    }
})

/* Action(s) */

/* Reducer */
export default ocrResultSlice.reducer;