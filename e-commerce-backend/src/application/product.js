import NotFoundError from '../domain/errors/not-found-error.js';
import ValidationError from '../domain/errors/validation-error.js';
import Product from '../infrastructure/db/entities/Product.js';

const getAllProducts = async(req,res,next) =>{
  try {
    const categoryId = req.query.categoryId;
    if (categoryId) {
      const products = await Product.find({categoryId});
      res.json(products);
    }else{
      const products = await Product.find();
      res.json(products);
    }
  } catch (error) {
      next(error);
  }
    
    
};



const createProduct = async(req,res,next) =>{
  try {
    const newProduct = req.body;
    if(!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.categoryId){
      throw new ValidationError("Invalid product data");
    }
    await Product.create(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
    

};

const getProductById = async (req,res,next) =>{
  try {
    const product = await Product.findById(req.params.id).populate("categoryId");
    if(!product){
      throw new NotFoundError("Product not found");
    }

  res.json(product);
  } catch (error) {
    next(error);
  }
};

const updateProductById = async (req,res,next) =>{
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new:true,
    });
  
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (req,res,next)=>{
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    throw new NotFoundError("Product not found");
  }
  res.status(200).json({message:'Product deleted successfully'});
  } catch (error) {
    next(error);
  }
  
};

export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
};

