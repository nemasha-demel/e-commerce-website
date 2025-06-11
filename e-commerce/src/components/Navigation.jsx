import React from 'react'
import { Search , ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

function Navigation() {
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
                            <a href={item.path} className='font-medium hover:text-gray-600'>
                                {item.label}
                            </a>
                        )
                    })
                    }

                </nav>
                <div className='flex items-center space-x-4'>
                    <Button >
                        <Search size={20}/>
                    </Button>
                    <a href="/shop/cart">
                        <ShoppingCart size={20}/>
                    </a>
                    
                </div>

                <div className='flex items-center space-x-4'>
                    <a href="/shop/sign-in">
                        Sign In
                    </a>
                    <a href="/shop/sign-up">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Navigation