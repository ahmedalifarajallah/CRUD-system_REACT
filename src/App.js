import NavBar from "./components/NavBar";
import "./App.css";
import SideBar from "./components/SideBar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import ShowProduct from "./pages/ShowProduct";
import About from "./pages/About";  
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <NavBar />

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <SideBar />
          </div>
          <div className="col py-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />

              <Route path="products/" element={<Outlet />} >
              <Route path="" element={<Products />} />
                <Route path="add" element={<AddProducts />} />
                <Route path=":productId" element={<ShowProduct />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
