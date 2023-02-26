/* React */
import React, { useState } from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    updateOCRAzureResult
} from 'src/redux/features/ocrAzureResultSlice';

import {
    showModal
} from 'src/redux/features/modalSlice';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    checkmark
} from 'ionicons/icons';

/* Util(s) */
import ModalContainerWrapper from 'src/utils/wrapper/modal-container/ModalContainerWrapper';

/* Model(s) */
import {
    OCRAzureResultModel
} from 'src/shared/models/ocrAzureResult';

/* Component(s) */
import ResultDetailToolbar from 'src/components/ocr/ocr-result-container/ocr-result-detail/result-detail-toolbar/ResultDetailToolbar'; 
import ResultDetailContent from 'src/components/ocr/ocr-result-container/ocr-result-detail/result-detail-content/ResultDetailContent';

/* Stylesheet */
import styles from './OCRResultDetail.module.scss';

/* Interaface(s) */
interface OCRResultDetailProps {
    ocrAzureResultDetail: OCRAzureResultModel;
}

const OCRResultContainer: React.FC<OCRResultDetailProps> = ({
    ocrAzureResultDetail
}) => {
    const dispatch = useDispatch();

    // ocrResultEditDetail
    const [ocrResultEditDetail, setOCRResultEditDetail] = useState<OCRAzureResultModel>(ocrAzureResultDetail); 

    const handleOCRResultEditDetail = (value: OCRAzureResultModel) => {
        setOCRResultEditDetail(value);
    };

    return (
        <ModalContainerWrapper>
            <ResultDetailToolbar
                name={ocrResultEditDetail.properties.description?.value}
            />
            <ResultDetailContent 
                ocrAzureResultDetail={ocrResultEditDetail}
                handleOCRResultEditDetail={handleOCRResultEditDetail}
            />
            <IonFabButton 
                className={styles.fab_btn}
                onClick={
                    () => {
                        dispatch(updateOCRAzureResult(ocrResultEditDetail));
                        dispatch(showModal(false));
                    }
                }>
                <IonIcon
                    className={styles.icon}
                    icon={checkmark}
                />
            </IonFabButton>
        </ModalContainerWrapper>
    );
};

export default OCRResultContainer;