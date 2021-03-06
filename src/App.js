import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Blogs from "./Components/Blogs/Blogs";
import NotFound from "./Components/NotFound/NotFound";
import CheckOut from "./Components/CheckOut/CheckOut";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
