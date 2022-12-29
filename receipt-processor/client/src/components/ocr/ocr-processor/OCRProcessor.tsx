/* React */
import React from 'react';

/* Ionic */
import {
    analytics
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
} from 'src/shared/models/receiptModel';

/* Component(s) */
import ProcessBtnContainer from 'src/components/shared/process-btn-container/ProcessBtnContainer';

/* Stylesheet */
import styles from './OCRProcessor.module.scss';

/* Interface(s) */
interface OCRProcessorProps {
    receipt: ReceiptModel;
}

const OCRProcessor: React.FC<OCRProcessorProps> = ({ receipt }) => {
    return (
        <div 
            className={`${styles.ocr_processor} ${styles.flex_container}`}>
            <ProcessBtnContainer 
                label={'Press button below to start analyzing document'}
                icon={analytics}
                disabled={!receipt.content}
                click={
                    () => {
                        // ServiceLoader.azure().analyzeReceipt().then((result: any) => {
                        //     console.log(result);
                        // });
                        ServiceLoader.azure().uploadReceipt(receipt).then((response: AxiosResponse) => {
                            console.log(response);
                        });
                    }
                }
            />
        </div>
    );
};

export default OCRProcessor;