/* React */
import React from 'react';

/* Ionic */
import {
    IonInput
} from '@ionic/react';

import { 
    OCRAzureResultModel 
} from 'src/shared/models/ocrAzureResult';

/* Stylesheet */
import styles from './OCRResultDetailEditInput.module.scss';

/* Interface(s) */
interface OCRResultDetailEditInputProps {
    ocrAzureResultDetail: OCRAzureResultModel;
    handleOCRResultEditDetail: Function;
}

const OCRResultDetailEditInput: React.FC<OCRResultDetailEditInputProps> = ({
    ocrAzureResultDetail,
    handleOCRResultEditDetail
}) => {

    return (
        <IonInput 
            className={`${styles.ocr_result_detail_edit_input} shadow`}
            placeholder={ocrAzureResultDetail.properties.description?.value}
            value={ocrAzureResultDetail.properties.description?.value}
            onIonChange={
                (e) => {
                    handleOCRResultEditDetail({
                        ...ocrAzureResultDetail, properties: {
                            ...ocrAzureResultDetail.properties, description: {
                                ...ocrAzureResultDetail.properties.description, value: e.detail.value!.trim()
                            }
                        }
                    });
                }
            }
        />
    );
};

export default OCRResultDetailEditInput;
