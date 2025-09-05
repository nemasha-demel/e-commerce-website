import express from 'express';
import productRouter from './api/product';
import categoryRouter from './api/category';
import {connectDB} from "./infrastructure/db/index";
import "dotenv/config";
import reviewRouter from './api/review';
import cors from 'cors';
import gloabalErrorHandlingMiddleware from './api/middleware/global-error-handling-middleware';
import { orderRouter } from "./api/order";

const app = express();

app.use(express.json());
app.use(cors({origin:"http://localhost:5173"}));

app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/reviews', reviewRouter);
app.use("/api/orders", orderRouter);


app.use(gloabalErrorHandlingMiddleware);

connectDB();

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})