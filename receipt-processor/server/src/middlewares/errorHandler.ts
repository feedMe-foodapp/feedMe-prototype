/* errorHandler.ts (middleware) */

import {
    Request,
    Response,
    NextFunction,
} from 'express';

/* Model(s) */
import { 
    CustomErrorResponseModel 
} from '../shared/models/customErrorResponse';

const errorHandler = (err: CustomErrorResponseModel, req: Request, res: Response, next: NextFunction) => {
    const statusCode: number = err.statusCode || 500;
    const statusMessage: string = err.message;

    res.status(statusCode).json({
        success: false,
        type: "error",
        statusCode: statusCode,
        statusMessage: statusMessage
    }); 

    next();
};

export default errorHandler;