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

/* Ionic */
import {
    trash,
    informationOutline
} from 'ionicons/icons';

/* Model(s) */
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
        click: (dispatch: Dispatch) => { 
            dispatch(setToast({
                icon: '/assets/icon/lightbulb.svg',
                message: 'Receipt cleared successfully',
                color: '#e7a24d'
            }));
            dispatch(showToast(true));
            dispatch(deleteReceipt()); 
        }
    }
];