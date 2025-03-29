import { Routes, Route } from "react-router-dom";
import "./App.css";
import Count from "./components/Count";
import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Product from "./pages/Product";

function App() {
  return (
    // <div>
    //   <h1>Hello World!</h1>
    //   <Message />
    //   <Greeting name="João" />
    //   <Greeting name="Maria" />
    //   <Count />
    // </div>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
