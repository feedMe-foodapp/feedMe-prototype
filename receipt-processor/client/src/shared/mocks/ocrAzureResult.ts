/* ocrAzureResult.ts */

/* Model(s) */
import {
    OCRAzureResultModel
} from 'src/shared/models/ocrAzureResult';

export const OCR_AZURE_RESULT: OCRAzureResultModel = {
    status: "",
    analyzeResult: {
        readResults: [
            {
                lines: [
                        {
                        boundingBox: [],
                        text: '',
                        words: [
                            {
                                boundingBox: [],
                                text: '',
                                confidence: 0
                            }
                        ]
                    }
                ]
            }
        ]
     }
};