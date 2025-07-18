export const getAllProducts = async () =>{
   
        const res = await fetch ("http://localhost:8000/api/products", {
            method: "GET",
    
        });
    
        if (!res.ok) {
            throw new Error("Error while fetching data");
        }
        const products = await res.json();
        return products;
    }