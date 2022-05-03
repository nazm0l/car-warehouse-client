import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/Shared/NotFound/NotFound";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import ForgetPassword from "./components/Authentication/ForgetPassword/ForgetPassword";
import Blogs from "./components/Blogs/Blogs";
import RequireAuth from "./components/Authentication/RequireAuth/RequireAuth";
import SingleItem from "./components/SingleItem/SingleItem";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/inventory/:id" element={<SingleItem></SingleItem>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/reset"
          element={<ForgetPassword></ForgetPassword>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
      <ToastContainer />
    </div>
  );
}

export default App;
