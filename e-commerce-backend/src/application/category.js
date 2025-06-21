import {categories} from "../data.js";

const getAllCategories = (req,res) =>{
    res.json(categories);
};

const createCategory = (req,res) =>{
    const newID = (categories.length+1).toString();

    const newCategory = {
        _id : newID,
        ...req.body,
        __V: 0,
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

const getCategoryByID = (req,res)=>{
    const category = categories.find((c)=> c._id === req.params.id);
    if (!category) {
        return res.status(404).json({message:'Category not found'});
    }
    res.json(category);
};

const updateCategoryById = (req,res)=>{
    const index = categories.findIndex((c)=> c._id === req.params.id);

    if (index===-1) {
        return res.status(404).json({message:"Category not found"});
    };

    categories[index] = {
        ...categories[index],
        ...req.body,
        _id: req.params.id,
    };

    res.json(categories[index]);
};

const deleteCategoryById = (req,res)=>{
    const index = categories.findIndex((p)=> p._id === req.params.id);
    if (index===-1) {
        return res.status(404).json({message:"Category not found"});
    };

    categories.splice(index,1);
    res.status(200),send();
    
};

export{
    getAllCategories,
    getCategoryByID,
    createCategory,
    updateCategoryById,
    deleteCategoryById,
}