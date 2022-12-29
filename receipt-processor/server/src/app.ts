/* Express */
import express, { 
    Application
} from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';

/* Routes */
import azureFormRecognizer from './azure-form-recognizer/routes/azureFormRecognizerRoute';

const app: Application = express();

// Enable Cross-Origin Resource Sharing 
app.use(cors());

// app.use(express.json());

app.use(bodyParser.json({ limit: '5mb' }));

const port: string | 3100 = process.env.PORT || 3100;

// routes of azureFormRecognizer can only be accessed by using prefix /api/azure 
app.use('/api/azure', azureFormRecognizer);

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});