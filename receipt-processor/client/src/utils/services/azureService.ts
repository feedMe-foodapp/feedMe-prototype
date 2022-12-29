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

    public uploadReceipt(receipt: ReceiptModel): Promise<AxiosResponse> {
        console.log(receipt)
        return axios.post(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}/upload`, receipt);
    }

    // public analyzeReceipt(id: string): Promise<AxiosResponse> {
    //     return axios.post(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}`, id);
    // }

    public analyzeReceipt(): Promise<AxiosResponse> {
        return axios.get(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}/analyze`);
    }
}