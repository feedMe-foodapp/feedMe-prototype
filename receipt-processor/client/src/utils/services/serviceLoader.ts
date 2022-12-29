/* serviceLoader.ts */

/* Service(s) */
import {
    AzureService 
} from 'src/utils/services/azureService';

const azure: AzureService = new AzureService();

export class ServiceLoader {

    // Azure service
    public static azure(): AzureService {
        return azure;
    }
}