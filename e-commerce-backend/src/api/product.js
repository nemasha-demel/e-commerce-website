import express from "express";
import {
    createProduct,
    getAllProducts,
    getProductByID,
    updateProductById,
    deleteProductById,
} from "../application/product.js";

const productRouter = express.Router();


productRouter.route('/')
    .get(getAllProducts)
    .post(createProduct);

productRouter.route('/:id')
    .get(getProductByID)
    .put(updateProductById)
    .delete(deleteProductById);

export default productRouter;