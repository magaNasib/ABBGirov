import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; // Import body-parser

// Use body-parser middleware

import routes from './routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');

app.use('/', cors(), routes);

app.listen(8082, () => console.log('server listening on port 8082'));
