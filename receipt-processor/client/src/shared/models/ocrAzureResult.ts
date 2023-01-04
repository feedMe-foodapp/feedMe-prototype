/* ocrAzureResult.ts (model) */

export interface OCRAzureResultModel {
    status: string;
    analyzeResult: AzureAnalyzeResultModel;
}

export interface AzureAnalyzeResultModel {
    readResults: AzureReadResultsModel[];
}

interface AzureReadResultsModel {
    lines: AzureLinesModel[];
}

interface AzureLinesModel {
    boundingBox: number[];
    text: string;
    words: AzureWordsModel[];
}

interface AzureWordsModel {
    boundingBox: number[];
    text: string;
    confidence: number;
}