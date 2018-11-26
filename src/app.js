import http from 'http';
//import https from 'https';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// import initializeDb from './db';
import api from './api';
import config from './config.json';
// import {options} from './encryption/certificates/certificate';


let app = express();

///Server Http
app.server = http.createServer(app);
///Server Https
//app.server = https.createServer(options,app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// api router
app.use('/api', api({ config }));

app.server.listen(config.port_https, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

export default app;