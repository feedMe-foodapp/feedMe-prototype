/* Express */
import express, { 
    Application
} from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';

/* Routes */
import azureFormRecognizer from './azure-form-recognizer/routes/azureFormRecognizerRoute';

/* Middleware(s) */
import errorHandler from './middlewares/errorHandler';
import successHandler from './middlewares/successHandler';

const app: Application = express();
const port: string | 3100 = process.env.PORT || 3100;

// Enable Cross-Origin Resource Sharing 
app.use(cors());

app.use(bodyParser.json({ limit: '5mb' }));
app.use(express.json());

// routes of azureFormRecognizer can only be accessed by using prefix /api/azure 
app.use('/api/azure', azureFormRecognizer);

app.use(successHandler)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});