/* React */
import React from 'react';

/* React-Redux */
import { 
    useSelector,
    useDispatch
} from 'react-redux';

// import {
//     setToast
// } from 'src/redux/features/toastSlice';

// import { 
//     setTooltip 
// } from 'src/redux/features/tooltipSlice';

// /* Ionic */
// import {
//     IonFabButton
// } from '@ionic/react';

/* Util(s) */
import PlaygroundTabWrapper from 'src/utils/wrapper/playground/PlaygroundTabWrapper';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receipt';

import {
    RootState
} from 'src/redux/store';


// import {
//     Tooltip
// } from 'src/shared/models/tooltip';

/* Component(s) */
import ReceiptPreview from 'src/components/shared/receipt-preview/ReceiptPreview';
import OCRResultContainer from 'src/components/ocr/ocr-result-container/OCRResultContainer';
import OCRProcessor from 'src/components/ocr/ocr-processor/OCRProcessor';
// import TooltipContainer from '../../../components/shared/tooltip/TooltipContainer';

/* Interface(s) */
interface AzureTabProps {
    receipt: ReceiptModel;
}

const AzureTab: React.FC<AzureTabProps> = ({ receipt }) => {
    // const ocrAzureResult = useSelector((state: RootState) => state.ocrAzureResult);

    return (
        <React.Fragment>
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
                    // ocrAzureResult={ocrAzureResult.ocrAzureResult}
                />
                <OCRProcessor
                    receipt={receipt}
                />
            </PlaygroundTabWrapper>
        </React.Fragment>
    );
};

export default AzureTab;