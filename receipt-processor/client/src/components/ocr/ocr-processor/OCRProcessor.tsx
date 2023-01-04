/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    setToast,
    showToast
} from 'src/redux/features/toastSlice';

import {
    show,
    hide,
    KeyValue
} from 'src/redux/features/keyValueSlice';

/* Ionic */
import {
    analytics
} from 'ionicons/icons';

import {
    checkmarkCircle
} from 'ionicons/icons';

/* Axios */
import {
    AxiosResponse
} from 'axios';

/* Service(s) */
import {
    ServiceLoader
} from 'src/utils/services/serviceLoader';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receipt';

/* Component(s) */
import ProcessBtnContainer from 'src/components/shared/process-btn-container/ProcessBtnContainer';

/* Stylesheet */
import styles from './OCRProcessor.module.scss';

/* Interface(s) */
interface OCRProcessorProps {
    receipt: ReceiptModel;
}

const OCRProcessor: React.FC<OCRProcessorProps> = ({ receipt }) => {
    const dispatch = useDispatch();

    return (
        <div
            className={`${styles.ocr_processor} ${styles.flex_container}`}>
            <ProcessBtnContainer
                label={'Press button below to start analyzing document'}
                icon={analytics}
                disabled={!receipt.content}
                click={
                    () => {
                        ServiceLoader.azure().uploadReceipt(receipt).then(() => {
                            // ServiceLoader.azure().analyzeReceipt(receipt).then((response: AxiosResponse) => {
                            //     dispatch(setToast({
                            //         icon: checkmarkCircle,
                            //         message: '',
                            //         color: 'var(--ion-color-successColor)'
                            //     }));
                            //     dispatch(showToast(true));
                            //     dispatch(hide({name: KeyValue.LOADING}));
                            // });
                            
                            
                        });
                        
                        dispatch(show({
                            name: KeyValue.LOADING,
                            content: {
                                show: true
                            }
                        }));
                    }
                }
            />
        </div>
    );
};

export default OCRProcessor;