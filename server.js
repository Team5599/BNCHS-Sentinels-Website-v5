const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const DEV = process.env.NODE_ENV !== 'production'
const HOSTNAME = 'localhost'
const DEFAULT_PORT = (parseInt(process.env.PORT) || 3000);
const PORT = process.env.NEXTJSWORKER == 'true' ? DEFAULT_PORT + 100 : DEFAULT_PORT;
// when using middleware `hostname` and `port` must be provided below
const app = next({
    dev : DEV,
    hostname : HOSTNAME,
    port : PORT
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {

            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true)
            const { pathname, query } = parsedUrl

            await handle(req, res, parsedUrl)
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    })
    .once('error', (err) => {
        console.error(err)
        process.exit(1)
    })
    .listen(PORT, () => {
        console.log(`> NextJS Ready on http://${HOSTNAME}:${PORT}`)
    })
})