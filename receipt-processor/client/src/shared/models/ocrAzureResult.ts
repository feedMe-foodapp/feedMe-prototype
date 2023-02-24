/* ocrAzureResult.ts (model) */

export interface OCRAzureResultModel {
    id: string;
    kind: string;
    properties: PropertiesModel;
}

interface PropertiesModel {
    totalPrice: TotalPriceModel;
    description: DescriptionModel;
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

