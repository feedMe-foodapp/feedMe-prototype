/* store.ts */

/* React-Redux */
import {
    configureStore
} from '@reduxjs/toolkit';

import storage from 'redux-persist/es/storage';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

/* Reducer(s) */
import receiptReducer from 'src/redux/features/receiptSlice';
import ocrResultReducer from 'src/redux/features/ocrResultSlice';
import toastReducer from 'src/redux/features/toastSlice';
import keyValueReducer from 'src/redux/features/keyValueSlice';

const persistConfig = {
    receipt: {
        key: 'receipt',
        storage
    },
    ocrResult: {
        key: 'ocrResult',
        storage
    }
};

const persistedReducer = {
    receipt: persistReducer(persistConfig.receipt, receiptReducer),
    ocrResult: persistReducer(persistConfig.ocrResult, ocrResultReducer)
}

const store = configureStore({
    reducer: {
        receipt: persistedReducer.receipt,
        ocrResult: persistedReducer.ocrResult,
        toast: toastReducer,
        keyValue: keyValueReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH, 
                REHYDRATE, 
                PAUSE, 
                PERSIST, 
                PURGE, 
                REGISTER
              ]
        }
    })
})

const persistor = persistStore(store);

export {
    store,
    persistor
};

/* Type(s) */
export type RootState = ReturnType<typeof store.getState>