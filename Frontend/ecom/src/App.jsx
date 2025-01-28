import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/Home";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <>
    {/* <SignUp /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productForm" element={<ProductForm />}/>
        
      </Routes>   
    </BrowserRouter>
    </>
  );
}

export default App;