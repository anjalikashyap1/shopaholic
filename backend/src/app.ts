import express from 'express';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';
import Stripe from 'stripe';
import cors from 'cors';



// Importing Routes
import userRoute from './routes/user.js';
import productRoute from './routes/products.js';
import orderRoute from './routes/order.js';
import paymentRoute from './routes/payment.js';
import dashboardRoute from './routes/stats.js';

// Load environment variables
config({
  path: './.env',
});

// Validate environment variables
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || '';
const stripeKey = process.env.STRIPE_KEY || '';

if (!mongoURI) {
  console.error('MONGO_URI is not defined in the environment variables.');
  process.exit(1); // Exit the process with failure code
}

if (!stripeKey) {
  console.error('STRIPE_KEY is not defined in the environment variables.');
  process.exit(1); // Exit the process with failure code
}

// Connect to the database
connectDB(mongoURI).catch((err: any) => {
  console.error('Failed to connect to MongoDB:', err);
  process.exit(1); // Exit the process with failure code
});

export const stripe = new Stripe(stripeKey);
export const myCache = new NodeCache();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.get('/', (req, res) => {
  res.send('API Working with /api/v1');
});

// Using Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/payment', paymentRoute);
app.use('/api/v1/dashboard', dashboardRoute);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
}).on('error', (err: any) => {
  console.error('Failed to start server:', err);
  process.exit(1); // Exit the process with failure code
});
