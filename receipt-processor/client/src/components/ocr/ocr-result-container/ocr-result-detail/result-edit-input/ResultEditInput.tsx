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
import styles from './ResultEditInput.module.scss';

/* Interface(s) */
interface ResultEditInputProps {
    ocrAzureResultDetail: OCRAzureResultModel;
    handleOCRResultEditDetail: Function;
}

const ResultEditInput: React.FC<ResultEditInputProps> = ({
    ocrAzureResultDetail,
    handleOCRResultEditDetail
}) => {

    return (
        <IonInput 
            className={`${styles.result_edit_input} shadow`}
            placeholder={ocrAzureResultDetail.properties.description?.value}
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

export default ResultEditInput;