/* React */
import React from 'react';

/* Ionic */
import {
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';

import {
    statsChart
} from 'ionicons/icons';

/* Model(s) */
import {
    OCRAzureResultModel
} from 'src/shared/models/ocrAzureResult';

/* Component(s) */
import OCRResultDetailEditInput from 'src/components/ocr/ocr-result-container/ocr-result-detail/ocr-result-detail-edit-input/OCRResultDetailEditInput';
import LabelContainer from 'src/components/shared/label-container/LabelContainer';
import LabeledInput from 'src/components/shared/labeled-input/LabeledInput';

/* Stylesheet */
import styles from './OCRResultDetailContent.module.scss';

/* Interface(s) */
interface OCRResultDetailContentProps {
    ocrAzureResultDetail: OCRAzureResultModel;
    handleOCRResultEditDetail: Function;
}

const OCRResultDetailContent: React.FC<OCRResultDetailContentProps> = ({
    ocrAzureResultDetail,
    handleOCRResultEditDetail
}) => {
    return (
        <div className={styles.ocr_result_detail_content}>
            <OCRResultDetailEditInput
                ocrAzureResultDetail={ocrAzureResultDetail}
                handleOCRResultEditDetail={handleOCRResultEditDetail}
            />
            <IonGrid className={styles.grid_container}>
                <LabelContainer
                    label={'Details'}
                    icon={statsChart}
                />
                <IonRow className={styles.row}>
                    <IonCol
                        className={`${styles.col}`}
                        sizeXs="12"
                        sizeXl="6">
                        <LabeledInput
                            label={'Confidence'}
                            value={ocrAzureResultDetail.properties.description?.confidence}
                            unit={'%'}
                            disabled={true}
                        />
                    </IonCol>
                    <IonCol
                        className={`${styles.col}`}
                        sizeXs="12"
                        sizeXl="6">
                        <LabeledInput
                            label={'Type'}
                            value={ocrAzureResultDetail.properties.description?.kind}
                            disabled={true}
                        />
                    </IonCol>
                </IonRow>
                <IonRow className={styles.row}>
                    <IonCol 
                        sizeXs="12"
                        sizeXl="6">
                        <LabeledInput 
                            label={'Price'}
                            unit={'€'}
                            value={ocrAzureResultDetail.properties.totalPrice?.value}
                            disabled={true}
                        />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default OCRResultDetailContent;