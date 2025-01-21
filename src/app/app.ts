import cors from 'cors'
import express from 'express'
const app = express()
app.disable('x-powered-by')

app.use(cors({ origin: process.env.FRONT_URL }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res) => {
	res.send('Sever is healthy')
})

export default app
