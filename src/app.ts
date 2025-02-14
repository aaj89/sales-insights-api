import express from 'express';
import logger from 'morgan';
import 'dotenv/config';
import { APP_CONFIG, DEFAULT_PORT } from './constants/app.constants';

import { errorHandler, errorNotFoundHandler } from './middlewares/errorHandler';

// Create Express server
export const app = express();

// Express configuration
app.set(APP_CONFIG.PORT, process.env.PORT || DEFAULT_PORT);

app.use(logger('dev'));

app.use(express.json());

app.use('/');

app.use(errorNotFoundHandler);
app.use(errorHandler);
