import React from 'react'
import { Search , ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

function Navigation() {
    const cartItems = useSelector((state)=> state.cart.cartItems);

    console.log(cartItems);

    const cartItemCount = cartItems.reduce(
        (total,item)=> total + item.quantity,
        0
    );

  return (
    <header className='bg-white border-b border-gray-200 px-4 lg:px-16'>
        <div>
            <div className='flex items-center justify-between h-16'>
                <a href="/" className='font-bold text-2xl'>
                    Vellinor
                </a>

                <nav className='flex space-x-8'>
                    {[
                        {
                            path: "/shop/shoes",
                            label: "Shoes",
                        },
                        {
                            path: "/shop/tshirts",
                            label: "T-Shirts",
                        },
                        {
                            path: "/shop/shorts",
                            label: "Shorts",
                        },
                        {
                            path: "/shop/pants",
                            label: "Pants",
                        },
                        {
                            path: "/shop/socks",
                            label: "Socks",
                        }
                    ].map((item)=> {
                        return(
                            <Link to={item.path} className='font-medium hover:text-gray-600'>
                                {item.label}
                            </Link>
                        )
                    })
                    }

                </nav>
                <div className='flex items-center space-x-4'>
                    <Button >
                        <Search size={20}/>
                    </Button>
                    <Link to="/shop/cart" className="p-1 relative">
                        <ShoppingCart size={20}/>
                        <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                            {cartItemCount}
                        </span>
                    </Link>
                    
                </div>

                <div className='flex items-center space-x-4'>
                    <Link to="/sign-in">
                        Sign In
                    </Link>
                    <Link to="/sign-up">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Navigation