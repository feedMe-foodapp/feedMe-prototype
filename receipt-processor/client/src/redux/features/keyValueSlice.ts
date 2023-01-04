/* keyValueSlice.ts */

/* React-Redux */
import {
    createSlice, 
    PayloadAction
} from '@reduxjs/toolkit';

/* Interface(s) */
export enum KeyValue {
    LOADING = "loading"
}

interface LoadingModel {
    content: {
        show: boolean;
    };
}

interface KeyValueState {
    loading: LoadingModel;
}

interface PayloadModel {
    name: KeyValue;
    content?: {
        show: boolean;
        message?: string;
    }
}

const initialState: KeyValueState = {
    loading: {
        content: {
            show: false
        }
    }
};

export const keyValueSlice = createSlice({
    name: 'keyValue',
    initialState,
    reducers: {
        show: (state, action: PayloadAction<PayloadModel>) => {
            switch(action.payload.name) {
                case KeyValue.LOADING:
                    state.loading.content = action.payload.content!;
                    break;
            }
        },
        hide: (state, action: PayloadAction<PayloadModel>) => {
            switch(action.payload.name) {
                case KeyValue.LOADING:
                    state.loading.content.show = false;
            }
        }
    }
});

/* Action(s) */
export const {
    show,
    hide
} = keyValueSlice.actions;

/* Reducers */
export default keyValueSlice.reducer;