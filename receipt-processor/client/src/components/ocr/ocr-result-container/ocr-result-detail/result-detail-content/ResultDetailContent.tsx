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
import ResultEditInput from 'src/components/ocr/ocr-result-container/ocr-result-detail/result-edit-input/ResultEditInput';
import LabelContainer from 'src/components/shared/label-container/LabelContainer';

/* Stylesheet */
import styles from './ResultDetailContent.module.scss';

/* Interface(s) */
interface ResultDetailContentProps {
    ocrAzureResultDetail: OCRAzureResultModel;
    handleOCRResultEditDetail: Function;
}

const ResultDetailContent: React.FC<ResultDetailContentProps> = ({
    ocrAzureResultDetail,
    handleOCRResultEditDetail
}) => {
    return (
        <div className={styles.result_detail_content}>
            <ResultEditInput
                ocrAzureResultDetail={ocrAzureResultDetail}
                handleOCRResultEditDetail={handleOCRResultEditDetail}
            />
            <IonGrid className={styles.grid_container}>
                <LabelContainer
                    label={'Further details'}
                    icon={statsChart}
                />
                <hr />
                <IonRow className={styles.row}>
                    <IonCol
                        className={`${styles.col}`}
                        sizeXs="12"
                        sizeXl="6">
                        <h5 className={styles.detail}>
                            <span>Confidence:</span> {ocrAzureResultDetail.properties.description?.confidence} &#37;
                        </h5>
                    </IonCol>
                    <IonCol
                        className={`${styles.col}`}
                        sizeXs="12"
                        sizeXl="6">
                        <h5 className={styles.detail}>
                            <span>Value:</span> {ocrAzureResultDetail.properties.description?.kind}
                        </h5>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default ResultDetailContent;