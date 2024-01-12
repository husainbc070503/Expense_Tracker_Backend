import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ErrorHandler from './middleware/ErrorHandler.js';
import Auth from './routes/User.js';
import Category from './routes/Category.js';
import Transaction from './routes/Transaction.js';
import connectToMongoDB from './database/Connection.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

connectToMongoDB();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send("Hello World"));
app.use('/api/user', Auth);
app.use('/api/category', Category);
app.use('/api/transaction', Transaction);

app.use(ErrorHandler);
app.listen(port, () => console.log(`Server connected to port ${port}`));