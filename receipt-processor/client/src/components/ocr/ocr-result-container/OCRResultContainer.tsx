/* React */
import React from 'react';

/* Ionic */
import {
    fastFoodSharp
} from 'ionicons/icons';

/* Model(s) */
import {
    OCRTesseractResultModel
} from 'src/shared/models/ocrTesseractResult';

import {
    OCRAzureResultModel
} from 'src/shared/models/ocrAzureResult';

/* Component(s) */
import IllustrationContainer from 'src/components/shared/illustration-container/IllustrationContainer';
import SlidingItemContainer from 'src/components/shared/sliding-item/SlidingItemContainer';

/* Stylesheet */
import styles from './OCRResultContainer.module.scss';

import { createRegExp } from 'src/utils/helper/tesseract';

/* Interface(s) */
interface OCRResultContainerProps {
    ocrResult: OCRTesseractResultModel[] | OCRAzureResultModel[];
    click: Function;
}

const OCRResultContainer: React.FC<OCRResultContainerProps> = ({ 
    ocrResult,
    click
}) => {

    createRegExp(ocrResult as OCRTesseractResultModel[])

    return (
        <div className={`${styles.ocr_result_container} ${ocrResult? styles.block_container : styles.flex_container}`}>
            {ocrResult ? (
                <SlidingItemContainer
                    ocrResult={ocrResult}
                    click={click}
                />
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