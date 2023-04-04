/* tesseract.ts */

/* Model(s) */
import {
    OCRTesseractResultModel
} from 'src/shared/models/ocrTesseractResult';

export const createOCRTesseractResultObject = (result: any) => {
    const tmpOCRTesseractResult: OCRTesseractResultModel[] = [];
    
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

export const createRegExp = (result: OCRTesseractResultModel[]) => {
    result.map(res => console.log(res));
}