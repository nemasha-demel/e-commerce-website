import React from 'react'
import { useParams } from 'react-router'


function ShopPage() {
    const params = useParams();

  return (
    <div>
        <div>ShopPage</div>
        <p>{params.category}</p>
    </div>
    
    
  )
}

export default ShopPage