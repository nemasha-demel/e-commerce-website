import {products} from "../data.js";

const getAllProducts = (req,res) =>{
    res.json(products);
};

const createProduct = (req,res) =>{
    const newID = (products.length+1).toString();

    const newProduct = {
        _id : newID,
        ...req.body,
        __V: 0,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

const getProductByID = (req,res)=>{
    const product = products.find((p)=> p._id === req.params.id);
    if (!product) {
        return res.status(404).json({message:'Product not found'});
    }
    res.json(product);
};

const updateProductById = (req,res)=>{
    const index = products.findIndex((p)=> p._id === req.params.id);

    if (index===-1) {
        return res.status(404).json({message:"Product not found"});
    };

    products[index] = {
        ...products[index],
        ...req.body,
        _id: req.params.id,
    };

    res.json(products[index]);
};

const deleteProductById = (req,res)=>{
    const index = products.findIndex((p)=> p._id === req.params.id);
    if (index===-1) {
        return res.status(404).json({message:"Product not found"});
    };

    products.splice(index,1);
    res.status(200),send();
    
};

export{
    getAllProducts,
    getProductByID,
    createProduct,
    updateProductById,
    deleteProductById,
}