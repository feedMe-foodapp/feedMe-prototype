/* tesseract.ts */

/* Model(s) */
import {
    OCRTesseractResultModel
} from 'src/shared/models/ocrTesseractResult';

export const createOCRTesseractResultObject = (result: any) => {
    const tmpOCRTesseractResult: OCRTesseractResultModel[] = [];

    // eslint-disable-next-line array-callback-return
    result.lines.map((line: any, __index: number) => {
        tmpOCRTesseractResult.push({
            id: __index,
            confidence: line.confidence,
            text: line.text,
            bbox: line.bbox
        });
    });

    return tmpOCRTesseractResult;
}