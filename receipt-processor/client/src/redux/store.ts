/* store.ts */

/* React-Redux */
import {
    configureStore
} from '@reduxjs/toolkit';

import storage from 'redux-persist/es/storage';

import {
    persistStore,
    persistReducer
} from 'redux-persist';

/* Reducer(s) */
import receiptReducer from 'src/redux/features/receiptSlice';
// import ocrAzureResultReducer from 'src/redux/features/ocrAzureResultSlice';
import toastReducer from 'src/redux/features/toastSlice';
import loadingReducer from 'src/redux/features/loadingSlice';
import tooltipReducer from 'src/redux/features/tooltipSlice';

const persistConfig = {
    receipt: {
        key: 'receipt',
        storage
    },
    // ocrResult: {
    //     key: 'ocrAzureResult',
    //     storage
    // }
};

const persistedReducer = {
    receipt: persistReducer(persistConfig.receipt, receiptReducer),
    // ocrAzureResult: persistReducer(persistConfig.ocrResult, ocrAzureResultReducer)
}

const store = configureStore({
    reducer: {
        receipt: persistedReducer.receipt,
        // ocrAzureResult: persistedReducer.ocrAzureResult,
        toast: toastReducer,
        loading: loadingReducer,
        tooltip: tooltipReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

const persistor = persistStore(store);

export {
    store,
    persistor
};

/* Type(s) */
export type RootState = ReturnType<typeof store.getState>