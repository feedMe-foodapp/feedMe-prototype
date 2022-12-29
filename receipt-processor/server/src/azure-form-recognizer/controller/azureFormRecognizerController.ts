/* Express */
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
// import fs from 'fs';
// import path from 'path';
import buffer from 'buffer-from';

/* Microsoft Azure */
import { 
  BlobServiceClient 
} from '@azure/storage-blob';

import {
  DefaultAzureCredential
} from '@azure/identity';

import {
  DocumentAnalysisClient,
  AzureKeyCredential,
  PrebuiltModels
} from '@azure/ai-form-recognizer';

dotenv.config();

/* 
* Use DefaultAzureCredential() to connect to storage account
*
* Login to account with Azure-CLI:
* https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli
*/

// blobServiceClient
const blobServiceClient = new BlobServiceClient(
  `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
  new DefaultAzureCredential()
);

// formRecognizerClient
const formRecognizerClient = new DocumentAnalysisClient(
  `${process.env.AZURE_ENDPOINT}`,
  new AzureKeyCredential(`${process.env.AZURE_KEY}`)
);

// containerClient
const containerClient = blobServiceClient.getContainerClient(`${process.env.AZURE_STORAGE_CONTAINER}`);

/* Receipt 'example_receipt.jpg' exists on device */

// const receiptPath: string = path.join(
//   __dirname,
//   "../../../public/assets/receipt",
//   "example_receipt.jpg"
// );

const upload = async (content: string) => {
  const matchesBlobImg = content.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  const imgType = matchesBlobImg![1];
  let imgBuffer = buffer(matchesBlobImg![2], 'base64');

  const blockBlobClient = containerClient.getBlockBlobClient(`test.${imgType.split('/')[1]}`);
  const uploadBlobResponse = await blockBlobClient.upload(imgBuffer, imgBuffer.length);
};

const analyze = async () => {
  /* 
  * If receipt exists on device, a readable stream have to be created in order to recognize the values of the image.
  * Therefore, the method createReadStream() from package fs is used, which allows to work with the file system of a computer.
  * This was initially used to test the method beginAnalyzeDocument() from the service Form Recognizer and is not used any further.
  * 
  * A receipt taken by the application, will be then uploaded to the Blob Storage to create a public accessable URL:
  * Example: 'https://feedmereceipts.blob.core.windows.net/receipts/example_receipt.jpg'
  */

  // const readStream = fs.createReadStream();

  const tmpReceipt = 'https://feedmereceipts.blob.core.windows.net/receipts/example_receipt.jpg';

  const poller = await formRecognizerClient.beginAnalyzeDocument(
    /*
    * The prebuilt model 'Receipt' is used to recognize values from a receipt.
    * This is totally fine for the first usage of the prototype.
    * In the further development process, it is required to train a custom model for a specific usecase.
    */
    PrebuiltModels.Receipt,
    tmpReceipt,
    {
      onProgress: (state) => {
        console.log(`status: ${state.status}`);
      },
    }
  );

  const { documents: [receiptDocument] } = await poller.pollUntilDone();
  const receipt = receiptDocument.fields;
  return receipt;
};

const uploadReceipt = async (req: Request, res: Response) => {
  await upload(req.body.content);
  res.send('Finished uploading image').status(200);
};

const analyzeReceipt = async (req: Request, res: Response) => {
  res.json(await analyze());
};

export { 
  uploadReceipt,
  analyzeReceipt 
};
