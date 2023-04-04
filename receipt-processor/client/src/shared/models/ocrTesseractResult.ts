/* ocrTesseractResult.ts */

export interface OCRTesseractResultModel {
    id: number;
    text: string;
    confidence: number;
    bbox: BBoxModel;
}

interface BBoxModel {
    x0: number;
    x1: number;
    y0: number;
    y1: number;
}