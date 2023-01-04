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

    /*
    * Endpoint /upload to upload receipt to Blob Storage
    * Request body contains the values { id: UUID, content: Base64 } of type ReceiptModel
    */
    public uploadReceipt(receipt: ReceiptModel): Promise<AxiosResponse> {
        return axios.post(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}/upload`, receipt);
    }
    /*
    * Endpoint /analyze to analyze receipt with the service Form Recognizer
    * This method will be executed right after uploadReceipt() has finished
    * Methods uploadReceipt() and analyzeReceipt() bind together and will be exectuted after button to process receipt is clicked
    */
    public analyzeReceipt(receipt: ReceiptModel): Promise<AxiosResponse> {
        return axios.post(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}/analyze`, receipt);
    }

    /*
    * Endpoint /delete to delete receipt from Blob Storage
    * This method will be executed after method 'delete' from 'OptionFabContainer.tsx' is called
    */
    public deleteReceipt(receipt: ReceiptModel): Promise<AxiosResponse> {
        return axios.post(`http://${environments.azure.host}:${environments.azure.port}/${environments.azure.prefix}/delete`, receipt);
    }
}