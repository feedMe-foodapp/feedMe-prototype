/* Express */
import express, { 
    Application
} from 'express';

/* Routes */
import azureFormRecognizer from './azure-form-recognizer/routes/azureFormRecognizerRoute';

const app: Application = express();

const port: string | 3100 = process.env.PORT || 3100;

// routes of azureFormRecognizer can only be accessed by using prefix /api/azure 
app.use('/api/azure', azureFormRecognizer);

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});