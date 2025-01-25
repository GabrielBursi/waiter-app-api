import express from 'express'
import { router } from './router'
import path  from 'path'
const app = express()
app.disable('x-powered-by')


app.use((_req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");

	next();
});
app.use(
	"/uploads",
	express.static(path.resolve(__dirname, "..", "uploads"))
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router);

export default app
