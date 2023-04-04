/* successHandler.ts (middleware) */

/* Express.js */
import {
    Request,
    Response,
    NextFunction,
} from 'express';

const successHandler = (req: Request, res: Response, next: NextFunction) => {
    const statusCode: number = res.statusCode || 200;
    const statusMessage: string = res.statusMessage;

    res.status(statusCode).json({
        success: true,
        type: "success",
        statusCode: statusCode,
        statusMessage: statusMessage
    }); 
    next();
};

export default successHandler;