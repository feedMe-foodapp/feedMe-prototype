/* Express */
import express from "express";

/* Controller */
import { 
    uploadReceipt,
    analyzeReceipt,
    deleteReceipt 
} from '../controller/azureFormRecognizerController';

const router = express.Router();

router.post("/upload", uploadReceipt);
router.post("/analyze", analyzeReceipt);
router.post("/delete", deleteReceipt);

export = router;
