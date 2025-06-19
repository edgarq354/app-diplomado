import express from 'express';

const app = express();

//Import routes
import userRoutes from './routes/users.routes.js';
import morgan from 'morgan';

///Middlwars
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users',userRoutes);

export default app;