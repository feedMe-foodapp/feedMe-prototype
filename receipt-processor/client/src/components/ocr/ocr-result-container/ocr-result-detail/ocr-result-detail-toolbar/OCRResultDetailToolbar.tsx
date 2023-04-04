/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    showModal
} from 'src/redux/features/modalSlice';

import {
    deleteOCRAzureResult
} from 'src/redux/features/ocrAzureResultSlice';

/* Ionic */
import {
    IonIcon,
    IonFabButton
} from '@ionic/react';

import {
    fastFood,
    trash,
    close
} from 'ionicons/icons';

/* React-Responsive */
import {
    useMediaQuery
} from 'react-responsive';

/* Model(s) */
import { 
    OCRAzureResultModel 
} from 'src/shared/models/ocrAzureResult';

/* Stylesheet */
import styles from './OCRResultDetailToolbar.module.scss';

/* Interface(s) */
interface OCRResultDetailToolbarProps {
    value: string;
    ocrResultEditDetail: OCRAzureResultModel;
}

const OCRResultDetailToolbar: React.FC<OCRResultDetailToolbarProps> = ({
    value,
    ocrResultEditDetail
}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 512px)' });
    const dispatch = useDispatch();

    return (
        <div className={`${styles.ocr_result_detail_toolbar} shadow`}>
            <div className={styles.value}>
                <IonIcon
                    className={styles.icon}
                    icon={fastFood}
                />
                <h5>
                    {value}
                </h5>
            </div>
            <IonFabButton
                className={`${styles.fab_btn} ${styles.delete}`}
                //@ts-ignore
                size={isMobile ? 'small' : 'medium'}
                onClick={
                    () => {
                        dispatch(deleteOCRAzureResult(ocrResultEditDetail.id));
                        dispatch(showModal(false));
                    }
                }>
                <IonIcon 
                    className={styles.icon}
                    icon={trash}
                />
            </IonFabButton>
            <IonFabButton
                className={`${styles.fab_btn} ${styles.close}`}
                //@ts-ignore
                size={isMobile ? 'small' : 'medium'}
                onClick={
                    () => {
                        dispatch(showModal(false));
                    }
                }>
                <IonIcon
                    className={styles.icon}
                    icon={close}
                />
            </IonFabButton>
        </div>
    );
};

export default OCRResultDetailToolbar;