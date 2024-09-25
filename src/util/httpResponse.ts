import config from '../config/config'
import { EApplicationEnvironment } from '../constant/application'

import type { THttpResponse } from '../types/types'
import type { Request, Response } from 'express'

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown = null): void => {
    const response: THttpResponse = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            ip: req.ip ?? null,
            method: req.method,
            url: req.originalUrl
        },
        message: responseMessage,
        data
    }

    // Log

    // Production Env check
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete response.request.ip
    }

    res.status(responseStatusCode).json(response)
}
