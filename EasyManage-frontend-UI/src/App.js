import './App.css';
import Nav from "./Components/nav";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route element={<PrivateRoute />}>
          <Route path='/' element={<h1>Product List</h1>} />
          <Route path='/add' element={<h1>Add Product</h1>} />
          <Route path='/update' element={<h1>Update Product</h1>} />
          <Route path='/logout' element={<h1>Logout</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
          </Route>
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
