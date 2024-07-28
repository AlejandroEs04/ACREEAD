import express from 'express'
import dotenv from 'dotenv'
import serviceRoutes from './routes/ServiceRoutes'
import planRoutes from './routes/PlanRoutes'
import planServiceRoutes from './routes/PlanServiceRoutes'
import rolRoutes from './routes/RolRoutes'
import userRoutes from './routes/UserRoutes'

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/service', serviceRoutes)
app.use('/api/plan', planRoutes)
app.use('/api/plan_service', planServiceRoutes)
app.use('/api/rol', rolRoutes)
app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});