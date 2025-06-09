import express from 'express';

const app = express();

//Import routes
import userRoutes from './routes/users.routes.js';

app.use('/api/users',userRoutes);

export default app;