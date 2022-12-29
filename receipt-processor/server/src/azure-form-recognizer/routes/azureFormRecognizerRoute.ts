/* Express */
import express from "express";

/* Controller */
import { 
    uploadReceipt,
    analyzeReceipt 
} from '../controller/azureFormRecognizerController';

const router = express.Router();

router.post("/upload", uploadReceipt);
router.get("/analyze", analyzeReceipt);

export = router;
