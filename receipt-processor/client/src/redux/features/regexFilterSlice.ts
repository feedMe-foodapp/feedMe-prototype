/* regexSlice.ts */

/* React Redux */
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

/* Model(s) */
import { 
    RegexFilterModel 
} from 'src/shared/models/regexFilter';

/* Interface(s) */
interface RegexFilterState {
    regexFilter: RegexFilterModel[];
}

const initialState: RegexFilterState = {
    regexFilter: []
};

export const regexFilterSlice = createSlice({
    name: 'regexFilter',
    initialState,
    reducers: {
        setRegexFilter: (state, action: PayloadAction<RegexFilterModel>) => {
            const index = state.regexFilter?.findIndex(object => object.name === action.payload.name);
            
            if(index === -1) {
                state.regexFilter?.push(action.payload);
            } else {
                state.regexFilter.map((regexFilter: RegexFilterModel) => regexFilter.id === action.payload.id ? regexFilter.checked = action.payload.checked : undefined);
            }
        }
    }
});

/* Action(s) */
export const {
    setRegexFilter
} = regexFilterSlice.actions;

/* Reducer */
export default regexFilterSlice.reducer;