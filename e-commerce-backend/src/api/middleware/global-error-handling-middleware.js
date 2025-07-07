import NotFoundError from "../../domain/errors/not-found-error.js";
import ValidationError from "../../domain/errors/validation-error.js";

const gloabalErrorHandlingMiddleware = (err,req,res,next) =>{
    if(err instanceof ValidationError){
        res.status(400).json({message:err.message});
    } else if(err instanceof NotFoundError){
        res.status(404).json({message:err.message});
    } else {
        res.status(500).json({message:"Internal server error"});
    }
}

export default gloabalErrorHandlingMiddleware;