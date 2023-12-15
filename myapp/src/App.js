import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import ProductsList from "./ProductsList";
// import Customers from "./components/customers/Customers";
// import AddCustomer from "./components/customers/AddCustomer";
// import UpdateCustomer from "./components/customers/UpdateCustomer";

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/*' element={<NotFound/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          {/*<Route path='/products' element={<Products/>}>*/}
          {/*    <Route index element={<ProductDetails/>} />*/}
          {/*    <Route path='/products/:id' element={<ProductDetails/>} />*/}
          {/*</Route>*/}
            <Route path="/products" element={<Products />}>
                {/* Route for the product list */}
                <Route index element={<ProductDetails />} />

                {/* Route for individual product details */}
                <Route path=":id" element={<ProductDetails />} />
            </Route>
          {/*  <Route path="/products" element={<Outlet />}>*/}
            {/*    <Route path="/products" element={<Products />} />*/}
            {/*    <Route path="/products/:id" element={<ProductDetails />} />*/}
            {/*</Route>*/}


          {/*<Route path='/customers' element={<Customers/>}></Route>*/}
          {/*<Route path='/addCustomer' element={<AddCustomer/>}></Route>*/}
          {/*<Route path='/updateCustomer/:id' element={<UpdateCustomer/>}></Route>*/}
        </Routes>
      </div>
  );
}

export default App;