/* optionFabBtn.ts (Mock) */

/* React-Redux */
import { 
    Dispatch 
} from '@reduxjs/toolkit';

import {
    deleteReceipt
} from 'src/redux/features/receiptSlice';

import {
    showToast,
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
            ServiceLoader.azure().deleteReceipt(receipt).then((response: AxiosResponse) => {
                console.log(response);
                dispatch(setToast({
                    icon: '/assets/icon/lightbulb.svg',
                    message: response.data.statusMessage,
                    color: 'var(--ion-color-infoColor)'
                }));
                dispatch(showToast(true));
            }).catch(error => {
                console.log(error.response.data.message);
            });
            dispatch(deleteReceipt()); 
        }
    }
];