/* React */
import React from 'react';

/* Ionic */
import {
  fastFoodSharp
} from 'ionicons/icons';

/* Model(s) */
import {
    OCRAzureResultModel 
} from 'src/shared/models/ocrAzureResult';

/* Component(s) */
import IllustrationContainer from 'src/components/shared/illustration-container/IllustrationContainer';

/* Stylesheet */
import styles from './OCRResultContainer.module.scss';

/* Interface(s) */
interface OCRResultContainerProps {
    ocrAzureResult?: OCRAzureResultModel;
}

const OCRResultContainer: React.FC<OCRResultContainerProps> = ({ ocrAzureResult }) => {
    return (
        <div className={`${styles.ocr_result_container} ${ocrAzureResult ? styles.block_container : styles.flex_container}`}>
            {ocrAzureResult ? (
                <div></div>
            ) : (
                <IllustrationContainer 
                    props={{
                        icon: fastFoodSharp,
                        height: '172px',
                        width: '172px',
                        color: '#414e65',
                        label: 'No results to show yet',
                        fontSize: '18px',
                        fontColor: '#495771'
                    }}
                />
            )}
        </div>
    );
};

export default OCRResultContainer;