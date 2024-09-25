/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import responseMessage from '../constant/responseMessage'
import httpError from '../util/httpError'
import httpResponse from '../util/httpResponse'
import quicker from '../util/quicker'

import type { NextFunction, Request, Response } from 'express'

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        try {
            httpResponse(req, res, 200, responseMessage.SUCCESS)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    },
    health: (req: Request, res: Response, next: NextFunction) => {
        try {
            const healthData = {
                application: quicker.getApplicationHealth(),
                system: quicker.getSystemHealth(),
                timestamp: Date.now()
            }

            httpResponse(req, res, 200, responseMessage.SUCCESS, healthData)
        } catch (err) {
            httpError(next, err, req, 500)
        }
    }
}
