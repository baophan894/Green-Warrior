
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Services from "./components/Services";
import Category from "./components/Category";
function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <Blog/>
      <Category/>
      <About/>
      <Product/>
      <Newsletter/>
      <MyFooter/>
    </>
  );
}

export default App;
