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
import ocrTesseractResultReducer from 'src/redux/features/ocrTesseractResultSlice';
import ocrAzureResultReducer from 'src/redux/features/ocrAzureResultSlice';
import toastReducer from 'src/redux/features/toastSlice';
import loadingReducer from 'src/redux/features/loadingSlice';
import tooltipReducer from 'src/redux/features/tooltipSlice';
import modalReducer from 'src/redux/features/modalSlice';
import regexFilterReducer from 'src/redux/features/regexFilterSlice';

const persistConfig = {
    receipt: {
        key: 'receipt',
        storage
    },
    ocrTesseractResult: {
        key: 'ocrTesseractResult',
        storage
    },
    ocrAzureResult: {
        key: 'ocrAzureResult',
        storage
    },
    regexFilter: {
        key: 'regexFilter',
        storage
    }
};

const persistedReducer = {
    receipt: persistReducer(persistConfig.receipt, receiptReducer),
    ocrTesseractResult: persistReducer(persistConfig.ocrTesseractResult, ocrTesseractResultReducer),
    ocrAzureResult: persistReducer(persistConfig.ocrAzureResult, ocrAzureResultReducer),
    regexFilter: persistReducer(persistConfig.regexFilter, regexFilterReducer)
}

const store = configureStore({
    reducer: {
        receipt: persistedReducer.receipt,
        ocrTesseractResult: persistedReducer.ocrTesseractResult,
        ocrAzureResult: persistedReducer.ocrAzureResult,
        toast: toastReducer,
        loading: loadingReducer,
        tooltip: tooltipReducer,
        modal: modalReducer,
        regexFilter: persistedReducer.regexFilter
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