import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';

import { routes } from './routes';

const app = express();

app.use(helmet());

const {
	env: { NODE_ENV, CORS_ORIGIN, PORT },
} = process;

if (NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(cors({ origin: CORS_ORIGIN }));

app.use(express.json());

app.use(routes);

app.listen(PORT || 3330, () => {
	console.log(`Server HTTP started on port ${PORT || 3330}`);
});
