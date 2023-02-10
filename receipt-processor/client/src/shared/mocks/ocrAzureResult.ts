/* ocrAzureResult (mock) */

/* Model(s) */ 
import {
    OCRAzureResultModel
} from 'src/shared/models/ocrAzureResult';

export const OCR_AZURE_DEFAULT_RESULT: OCRAzureResultModel = {
    kind: '',
    properties: {
        description: {
            kind: '',
            confidence: 0,
            content: '',
            value: '',
            boundingRegions: {
                boundingBox: [],
                pageNumber: 0
            },
        },
        totalPrice: {
            kind: '',
            confidence: 0,
            content: '',
            value: 0,
            boundingRegions: {
                boundingBox: [],
                pageNumber: 0
            },
        }
    }
}