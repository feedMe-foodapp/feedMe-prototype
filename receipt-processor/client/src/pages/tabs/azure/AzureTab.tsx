/* React */
import React from 'react';

/* Util(s) */
import PlaygroundTabWrapper from 'src/utils/wrapper/playground/PlaygroundTabWrapper';

/* Component(s) */
import ReceiptPreview from 'src/components/shared/receipt-preview/ReceiptPreview';
import OCRResultContainer from 'src/components/ocr/ocr-result-container/OCRResultContainer';
import OCRProcessor from 'src/components/ocr/ocr-processor/OCRProcessor';

/* Interface(s) */
interface AzureTabProps {
    receipt: string;
}

const AzureTab: React.FC<AzureTabProps> = ({ receipt }) => {
    return (
        <PlaygroundTabWrapper>
            <ReceiptPreview
                receipt={receipt}
            />
            <OCRResultContainer />
            <OCRProcessor
                receipt={receipt}
            />
        </PlaygroundTabWrapper>
    );
};

export default AzureTab;