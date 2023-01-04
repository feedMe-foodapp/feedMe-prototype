/* customError.ts (model) */

export interface CustomErrorResponseModel extends Error {
    statusCode?: number;
}