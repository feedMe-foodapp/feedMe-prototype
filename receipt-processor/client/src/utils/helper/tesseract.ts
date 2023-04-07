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


export const createRegExp = (result: OCRTesseractResultModel[]) => { 
    // Products are always in the same line and end with €
    const tmpResult = result.map(res => res.text.match(/\u20AC/));    
    // const regexName: RegExp = /(?!g|kg|[stk_.])[a-zA-Z_äöüß_.]{1,}/g;
    // const regexPrice: RegExp = /[0-9]*,[0-9]{2}\u20AC/g;
    const regexQuantity: RegExp = /[0-9]*?\s{1}?(g|kg|stk[.])/g; 

    const name = tmpResult.map(res => res?.input?.match(regexQuantity));
    console.log(name);
}