/* Express */
import express from 'express';

/* Controller */
import { sendSimpleMessage } from '../controller/azureFormRecognizerController';

const router = express.Router();

router.get('/', sendSimpleMessage);

export = router;
