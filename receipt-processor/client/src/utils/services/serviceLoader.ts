/* serviceLoader.ts */

/* Service(s) */
import {
    TesseractService
} from 'src/utils/services/tesseractService';

import {
    AzureService 
} from 'src/utils/services/azureService';

const tesseract: TesseractService = new TesseractService();
const azure: AzureService = new AzureService();

export class ServiceLoader {

    // Tesseract
    public static tesseract(): TesseractService {
        return tesseract;
    }

    // Azure
    public static azure(): AzureService {
        return azure;
    }
}