/* React */
import React from 'react';

/* React Redux */
import { 
    useSelector,
    useDispatch
} from 'react-redux';

import {
    showModal
} from 'src/redux/features/modalSlice';

import {
    setOCRAzureResultDetail
} from 'src/redux/features/ocrAzureResultSlice';

/* Util(s) */
import PlaygroundTabWrapper from 'src/utils/wrapper/playground/PlaygroundTabWrapper';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receipt';

import { 
    OCRAzureResultModel 
} from 'src/shared/models/ocrAzureResult';

import {
    RootState
} from 'src/redux/store';

/* Component(s) */
import ModalContainer from 'src/components/shared/modal-container/ModalContainer';
// import CustomModal from 'src/components/shared/custom-modal/CustomModal';
import ReceiptPreview from 'src/components/shared/receipt-preview/ReceiptPreview';
import OCRResultContainer from 'src/components/ocr/ocr-result-container/OCRResultContainer';
import OCRProcessor from 'src/components/ocr/ocr-processor/OCRProcessor';
import OCRResultDetail from 'src/components/ocr/ocr-result-container/ocr-result-detail/OCRResultDetail';

/* Interface(s) */
interface AzureTabProps {
    receipt: ReceiptModel;
}

const AzureTab: React.FC<AzureTabProps> = ({ receipt }) => {
    const modalState = useSelector((state: RootState) => state.modal);
    const ocrAzureResultState = useSelector((state: RootState) => state.ocrAzureResult);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <ModalContainer 
                show={modalState.show}>
                <OCRResultDetail 
                    ocrAzureResultDetail={ocrAzureResultState.ocrAzureResultDetail!}
                />
            </ModalContainer>
            {/* <CustomModal/> */}
            <PlaygroundTabWrapper>
                <ReceiptPreview
                    receipt={receipt}
                />
                <OCRResultContainer 
                    ocrResult={ocrAzureResultState.ocrAzureResult!}
                    click={
                        (result: OCRAzureResultModel) => {
                            dispatch(showModal(true));
                            dispatch(setOCRAzureResultDetail(result));
                        }
                    }
                />
                <OCRProcessor
                    receipt={receipt}
                />
            </PlaygroundTabWrapper>
        </React.Fragment>
    );
};

export default AzureTab;