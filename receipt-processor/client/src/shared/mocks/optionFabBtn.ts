/* optionFabBtn.ts (Mock) */

/* React-Redux */
import { 
    Dispatch 
} from '@reduxjs/toolkit';

import {
    deleteReceipt
} from 'src/redux/features/receiptSlice';

import {
    clearOCRAzureResult
} from 'src/redux/features/ocrAzureResultSlice';

import {
    setToast
} from 'src/redux/features/toastSlice';

/* Axios */
import { 
    AxiosResponse 
} from 'axios';

/* Ionic */
import {
    trash
} from 'ionicons/icons';

/* Service(s) */
import {
    ServiceLoader 
} from 'src/utils/services/serviceLoader';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receipt';

import {
    OptionFabBtnModel
} from 'src/shared/models/optionFabBtn';

export enum OptionFabKey {
    DELETE
}

export const OPTION_FAB_BTN: OptionFabBtnModel[] = [
    {
        key: OptionFabKey.DELETE,
        name: 'delete',
        icon: trash,
        backgroundColor: 'var(--ion-color-thirdColor)',
        click: (dispatch: Dispatch, receipt: ReceiptModel) => { 
            /*** 
             * If receipt was uploaded to Blob Storage, only deleteReceipt() from AzureService will be called
             * Otherwise, the preview of receipt will be cleared without any further actions
            ***/
            if(receipt.uploadedToBlobStorage) {
                ServiceLoader.azure().deleteReceipt(receipt).then((response: AxiosResponse) => {
                    // dispatch(setToast({
                    //     show: true,
                    //     content: {
                    //         icon: '/assets/icon/lightbulb.svg',
                    //         message: response.data.statusMessage,
                    //         color: 'var(--ion-color-infoColor)'
                    //     }
                    // }));
                    // dispatch(clearOCRAzureResult());
                });
            }
            dispatch(deleteReceipt());
        }
    }
];