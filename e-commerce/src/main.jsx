import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/home.page.jsx'
import ShopPage from './pages/shop.page.jsx'
import SignInPage from './pages/sign-in.page.jsx'
import SignUpPage from './pages/sign-up.page.jsx'
import RootLayout from './layouts/root.layout.jsx'
import CartPage from './pages/cart.page.jsx'
import CheckoutPage from './pages/checkout.page.jsx'

import {store} from './lib/store'
import { Provider } from 'react-redux'
  import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store}>

    
      <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop'>
            <Route path=':category' element={<ShopPage/>}/>
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Route>
        
        <Route path='/sign-in' element={<SignInPage/>}/>
        <Route path='/sign-up' element={<SignUpPage/>}/>
        
      </Routes>
      </BrowserRouter>
    </Provider>
    </ClerkProvider>
  </StrictMode>,
)
