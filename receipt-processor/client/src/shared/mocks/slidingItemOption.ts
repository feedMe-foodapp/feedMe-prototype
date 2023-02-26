/* slidingItemOption.ts (mock) */

/* React-Redux */
import { 
    Dispatch 
} from '@reduxjs/toolkit';

import {
    updateOCRAzureResult,
    deleteOCRAzureResult
} from 'src/redux/features/ocrAzureResultSlice';

/* Ionic */
import {
    checkmark,
    create,
    trashBin,
    close
} from 'ionicons/icons';

/* Model(s) */
import {
    SlidingItemOptionModel,
    SlidingItem
} from 'src/shared/models/slidingItemOption';

import { 
    OCRAzureResultModel 
} from 'src/shared/models/ocrAzureResult';

export const SLIDING_EDIT_ITEM_OPTION: SlidingItemOptionModel[] = [
    {
        name: SlidingItem.CONFIRM,
        icon: checkmark,
        color: 'var(--ion-color-successColor)',
        click: (dispatch: Dispatch, editResult: OCRAzureResultModel) => {
            dispatch(updateOCRAzureResult(editResult));
        }
    },
    {
        name: SlidingItem.CANCEL,
        icon: close,
        color: 'var(--ion-color-infoColor)'
    }
];

export const SLIDING_ITEM_OPTION: SlidingItemOptionModel[] = [
    {
        name: SlidingItem.EDIT, 
        icon: create,
        color: 'var(--ion-color-secondColor)',
        click: (dispatch: Dispatch, result: OCRAzureResultModel) => {}
    },
    {
        name: SlidingItem.DELETE,
        icon: trashBin,
        color: 'var(--ion-color-thirdColor)',
        click: (dispatch: Dispatch, id: string) => {
            dispatch(deleteOCRAzureResult(id));
        }
    }
];