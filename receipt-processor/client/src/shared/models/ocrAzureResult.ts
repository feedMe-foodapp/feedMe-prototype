/* ocrAzureResult.ts (model) */

export interface OCRAzureResultModel {
    kind: string;
    properties: PropertiesModel;
}

interface PropertiesModel {
    description: DescriptionModel;
    totalPrice: TotalPriceModel;
}

interface DescriptionModel {
    boundingRegions: BoundingRegionsModel;
    confidence: number;
    content: string;
    kind: string;
    value: string;
}

interface TotalPriceModel {
    boundingRegions: BoundingRegionsModel;
    confidence: number;
    content: string;
    kind: string;
    value: number;
}

interface BoundingRegionsModel {
    boundingBox: number[];
    pageNumber: number;
}

