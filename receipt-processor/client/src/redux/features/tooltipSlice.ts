/* tooltipSlice.ts */

/* React-Redux */
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

/* Model(s) */
import {
    Tooltip
} from 'src/shared/models/tooltip';

/* Interface(s) */
interface TooltipSliceModel {
    tooltip: [
        {
            id: string;
            content?: {
                message?: string;
                color?: string;
            }
        }
    ]
}

const initialState: TooltipSliceModel = {
    tooltip: [
        {
            id: Tooltip.DEFAULT,
            content: {
                message: '',
            }
        }
    ]
};

export const tooltipSlice = createSlice({
    name: 'tooltip',
    initialState,
    reducers: {
        setTooltip: (state, action: PayloadAction<any>) => {
            const index = state.tooltip.findIndex(object => object.id === action.payload.id);

            if(index === -1) {
                state.tooltip.push(action.payload);
            }
        },
        replaceTooltip: (state, action) => {
            // state.tooltip = action.payload;
            state.tooltip = action.payload
        }
    }
});

/* Action(s) */
export const {
    setTooltip,
    replaceTooltip
} = tooltipSlice.actions;

/* Reducer */
export default tooltipSlice.reducer;