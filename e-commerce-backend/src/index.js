import express from 'express';
import productRouter from './api/product.js';



const app = express();

app.use(express.json());


app.use('/api/products', productRouter);



const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})