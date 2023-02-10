
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
} from 'src/shared/models/receipt';

export class AzureService {

    // Endpoint /upload to upload receipt to Blob Storage
    public uploadReceipt(receipt: ReceiptModel): Promise<AxiosResponse> {
        return axios.post(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}/upload`, receipt);
    }
    // Endpoint /analyze to analyze receipt from Blob Storage with receipt as parameter
    public analyzeReceipt(receipt: ReceiptModel): Promise<AxiosResponse> {
        return axios.post(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}/analyze`, receipt);
    }
    // Endpoint /delete to delete receipt from Blob Storage wit receipt as parameter
    public deleteReceipt(receipt: ReceiptModel): Promise<AxiosResponse> {
        return axios.post(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}/delete`, receipt);
    }
}