import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/home.page.jsx'
import ShopPage from './pages/shop.page.jsx'
import SignInPage from './pages/sign-in.page.jsx'
import SignUpPage from './pages/sign-up.page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/sign-in' element={<SignInPage/>}/>
      <Route path='/sign-up' element={<SignUpPage/>}/>
      <Route path='/shop'>
        <Route path=':category' element={<ShopPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
