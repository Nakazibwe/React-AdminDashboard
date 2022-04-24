import React from 'react';
import './App.css';
import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import {Routes, Route,  } from 'react-router-dom';
import UserList from './pages/userlist/UserList';
import User from './pages/user/User';
import NewUser from './pages/newuser/NewUser';
import ProductList from './pages/productlist/ProductList'
import Product from './pages/product/Product';
import NewProduct from './pages/newproduct/NewProduct';
import Containerpage from './components/container/Container';
function App() {
  return (
    <div className="App">
      
      <TopBar/>
      <div className = 'container'>
         <Sidebar/>
         <Routes>
         <Route path = '/' element={<Home/>}></Route>
         <Route path = '/users' element={<UserList/>}></Route>
         <Route path = '/user/edit/:userId' element={<User/>}></Route>
         <Route path = '/newuser' element={<NewUser/>}></Route>
         <Route path = '/products' element={<ProductList/>}></Route>
         <Route path = '/product/edit/:productId' element={<Product/>}></Route>
         <Route path = '/newproduct' element={<NewProduct/>}></Route>
         <Route path = '/container' element = {<Containerpage/>}/>
         </Routes>
      </div>
      
    </div>
  );
}

export default App;
