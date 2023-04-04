/* React */
import React from 'react';

/* React Redux */
import { useSelector } from 'react-redux';

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
import ReceiptPreview from 'src/components/shared/receipt-preview/ReceiptPreview';
import OCRResultContainer from 'src/components/ocr/ocr-result-container/OCRResultContainer';
import OCRProcessor from 'src/components/ocr/ocr-processor/OCRProcessor';

/* Interface(s) */
interface TesseractTabProps {
    receipt: ReceiptModel;
}

const TesseractTab: React.FC<TesseractTabProps> = ({ receipt }) => {
    const ocrTesseractResultState = useSelector((state: RootState) => state.ocrTesseractResult);

    return (
        <PlaygroundTabWrapper>
            <ReceiptPreview 
                receipt={receipt}
            />
            <OCRResultContainer 
                ocrResult={ocrTesseractResultState.ocrTesseractResult!}
                click={() => console.log("not implemented yet!")}
            />   
            <OCRProcessor 
                receipt={receipt}
            />
        </PlaygroundTabWrapper>
    );
};

export default TesseractTab;