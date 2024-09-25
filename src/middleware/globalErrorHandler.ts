import type { THttpError } from '../types/types'
import type { NextFunction, Request, Response } from 'express'

export default (err: THttpError, _: Request, res: Response, __: NextFunction): void => {
    res.status(err.statusCode).json(err)
}
