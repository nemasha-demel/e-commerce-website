import express from 'express';
import productRouter from './api/product.js';
import categoryRouter from './api/category.js';
import {connectDB} from "./infrastructure/db/index.js";
import "dotenv/config";
import reviewRouter from './api/review.js';

const app = express();

app.use(express.json());


app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/reviews', reviewRouter);

connectDB();

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})