import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { getAllProducts } from '@/lib/products';


function ShopPage() {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
      getAllProducts(category)
        .then((data) => setProducts(data))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }, [category]);

  return (
    <div>
        <div>ShopPage</div>
        <p>{category}</p>

        <div>{isloading ? "Loading" : "Done"}</div>
        <div>{error}</div>
        <div>{JSON.stringify(products)}</div>
    </div>
    
    
  )
}

export default ShopPage