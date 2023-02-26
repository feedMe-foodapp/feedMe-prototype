/* React */
import React from 'react';

/* React-Redux */
import { 
    useSelector
} from 'react-redux';

/* Util(s) */
import PlaygroundTabWrapper from 'src/utils/wrapper/playground/PlaygroundTabWrapper';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receipt';

import {
    RootState
} from 'src/redux/store';

/* Component(s) */
import ModalContainer from 'src/components/shared/modal-container/ModalContainer';
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
    const ocrAzureResult = useSelector((state: RootState) => state.ocrAzureResult);

    return (
        <React.Fragment>
            <ModalContainer 
                show={modalState.show}>
                <OCRResultDetail 
                    ocrAzureResultDetail={ocrAzureResult.ocrAzureResultDetail!}
                />
            </ModalContainer>
            {/* <IonFabButton style={{
                position: 'absolute', top: '21px', right: '21px', zIndex: 1000
            }}
            onClick={
                () => {
                    dispatch(setTooltip({
                        id: Tooltip.AZURE_TAB,
                        content: {
                            message: 'Azure Tab'
                        }
                    }))
                }
            }>
            </IonFabButton> */}
            {/* <TooltipContainer 
                id={Tooltip.AZURE_TAB}
                scssProps={{ top: '72px' }}
            /> */}
            <PlaygroundTabWrapper>
                <ReceiptPreview
                    receipt={receipt}
                />
                <OCRResultContainer 
                    ocrAzureResult={ocrAzureResult.ocrAzureResult!}
                />
                <OCRProcessor
                    receipt={receipt}
                />
            </PlaygroundTabWrapper>
        </React.Fragment>
    );
};

export default AzureTab;