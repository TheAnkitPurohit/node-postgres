/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import os from 'os'

import config from '../config/config'

export default {
    getSystemHealth: () => ({
        cpuUsage: os.loadavg(),
        totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
        freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`
    }),
    getApplicationHealth: () => ({
        environment: config.ENV,
        uptime: `${process.uptime().toFixed(2)} Second`,
        memoryUsage: {
            heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
            heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
        }
    })
}
