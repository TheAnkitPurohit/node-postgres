import app from './app'
import config from './config/config'

const server = app.listen(config.PORT)

;(() => {
    try {
        // Database Connection
        // logger.info(`DATABASE_CONNECTION`, {
        //     meta: {
        //         CONNECTION_NAME: connection.name
        //     }
        // })

        console.log(`Server is running on port ${config.PORT}`)
    } catch (err) {
        server.close((error) => {
            // if (error) {
            //     logger.error(`APPLICATION_ERROR`, { meta: error })
            // }

            process.exit(1)
        })
    }
})()

