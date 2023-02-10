/* keyValueSlice.ts */

/* React-Redux */
import {
    createSlice
} from '@reduxjs/toolkit';

/* Interface(s) */
interface LoadingSliceModel {
    show: boolean;
}

const initialState: LoadingSliceModel = {
    show: false
};

export const loadingSlice = createSlice({
    name: 'keyValue',
    initialState,
    reducers: {
        setLoading: (state, action) => {
           state.show = action.payload; 
        }
    }
});

/* Action(s) */
export const {
    setLoading
} = loadingSlice.actions;

/* Reducers */
export default loadingSlice.reducer;