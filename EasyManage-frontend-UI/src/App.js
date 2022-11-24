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
          <Route path='/' element={<div><h1>Product List</h1></div>} />
          <Route path='/add' element={<div>
              <h1>Add Product</h1></div>} />
          <Route path='/update' element={<div>
          <h1>Update Product</h1></div>} />
          <Route path='/logout' element={<div>
          <h1>Logout</h1></div>} />
          <Route path='/profile' element={<div>
          <h1>Profile</h1> </div>} />
          </Route>
          <Route path='/signup' element={<div><Signup /></div>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
