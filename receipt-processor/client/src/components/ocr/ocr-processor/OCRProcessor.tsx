/* React */
import React from 'react';

/* React Router */
import {
    useRouteMatch
} from 'react-router-dom';

/* React Redux */
import {
    useDispatch
} from 'react-redux';

import {
    setLoading
} from 'src/redux/features/loadingSlice';

import {
    setOCRTesseractResult
} from 'src/redux/features/ocrTesseractResultSlice';

import {
    setOCRAzureResult,
    // updateOCRAzureResult
} from 'src/redux/features/ocrAzureResultSlice';

import { v4 as uuidv4 } from 'uuid'

/* Ionic */
import {
    receipt as analyzeReceipt
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
    PlaygroundTab
} from 'src/shared/models/playgroundTab';

import {
    ReceiptModel
} from 'src/shared/models/receipt';

import {
    OCRAzureResultModel
} from 'src/shared/models/ocrAzureResult';

/* Util(s) */
import {
    createOCRTesseractResultObject
} from 'src/utils/helper/tesseract';

/* Component(s) */
import ProcessBtnContainer from 'src/components/shared/process-btn-container/ProcessBtnContainer';

/* Stylesheet */
import styles from './OCRProcessor.module.scss';

/* Interface(s) */
interface OCRProcessorProps {
    receipt: ReceiptModel;
}

const OCRProcessor: React.FC<OCRProcessorProps> = ({ receipt }) => {
    const { path } = useRouteMatch();
    const dispatch = useDispatch();

    return (
        <div className={`${styles.ocr_processor} ${styles.flex_container}`}>
            <ProcessBtnContainer
                label={'Press button below to start analyzing documents'}
                icon={analyzeReceipt}
                disabled={path.includes(PlaygroundTab.TESSERACT) ? !receipt : path.includes(PlaygroundTab.AZURE) ? !receipt?.uploadedToBlobStorage : false}
                click={
                    () => {
                        /* There are two different ways to analyze a receipt: Tesseract & Azure*/
                        dispatch(setLoading(true));

                        if (path.includes(PlaygroundTab.TESSERACT)) {
                            ServiceLoader.tesseract().recognize(receipt.content)
                                .then((result: any) => {
                                    dispatch(setLoading(false));
                                    dispatch(setOCRTesseractResult(createOCRTesseractResultObject(result)));
                                });
                        } else {
                            ServiceLoader.azure().analyzeReceipt(receipt)
                                .then((response: AxiosResponse) => {
                                    dispatch(setLoading(false));
                                    // dispatch(setToast({
                                    //     show: true,
                                    //     content: {
                                    //         icon: checkmarkCircle,
                                    //         message: response.data.message,
                                    //         color: 'var(--ion-color-successColor)'
                                    //     }
                                    // }));

                                    /***
                                     * Default result of Form Recognizer does not contain any id
                                     * But id is required to perform basic operations on result
                                    ***/
                                    dispatch(setOCRAzureResult(response.data.map((result: OCRAzureResultModel) => ({ id: uuidv4(), kind: result.kind, properties: result.properties }))));
                                });
                        }
                    }
                }
            />
        </div>
    );
};

export default OCRProcessor;