import espress from 'express'
import bodyParser from 'body-parser';
import { question, auth } from './routes';
const cors = require('cors');
const app = espress();

var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('', (req, res) => res.send("hola desde express"));
app.use('/api/questions', question);
app.use('/api/auth', auth);

export default app