/* azureService.ts */

/* Axios */
import axios, { AxiosResponse } from 'axios';

/* Environment(s) */
import {
    environments
} from 'src/environments/environment.dev';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receiptModel';

export class AzureService {

    public analyzeReceipt(receipt: ReceiptModel): Promise<AxiosResponse> {
        return axios.post(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}`, receipt);
    }
}