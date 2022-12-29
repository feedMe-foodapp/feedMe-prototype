/* React */
import React from 'react';

/* Ionic */
import {
    analytics
} from 'ionicons/icons';

/* Component(s) */
import ProcessBtnContainer from 'src/components/shared/process-btn-container/ProcessBtnContainer';

/* Stylesheet */
import styles from './OCRProcessor.module.scss';

/* Interface(s) */
interface OCRProcessorProps {
    receipt: string;
}

const OCRProcessor: React.FC<OCRProcessorProps> = ({ receipt }) => {
    return (
        <div 
            className={`${styles.ocr_processor} ${styles.flex_container}`}>
            <ProcessBtnContainer 
                label={'Press button below to start analyzing document'}
                icon={analytics}
                disabled={!receipt}
            />
        </div>
    );
};

export default OCRProcessor;