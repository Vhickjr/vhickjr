import React, { useState, useEffect, createContext } from "react";
import RingLoader from "react-spinners/RingLoader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Comingsoon from "./Comingsoon";
import Aboutme from "./pages/About-me/Aboutme";
import Contactme from "./pages/Contact-me/Contactme";
import Hireme from "./pages/Hire-me/Hireme";
import Home from "./pages/Home/Home";
import Myportfolio from "./pages/Myportfolio/Myportfolio";
import Services from "./pages/Services/Services";
import Skills from "./pages/Skills/Skills";
import Testimonial from "./pages/Testimonial/Testimonial";
import Mailer from "./components/Comingsoon/mailer";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="App">
          {" "}
          <RingLoader color={"white"} loading={loading} size={100} />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            {/*<Route path="/" element={<Comingsoon />}></Route>*/}
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Mailer" element={<Mailer></Mailer>}></Route>
            <Route path="/Aboutme" element={<Aboutme></Aboutme>}></Route>
            <Route path="/Contactme" element={<Contactme></Contactme>}></Route>
            <Route path="/Hireme" element={<Hireme></Hireme>}></Route>
            <Route
              path="/Myportfolio"
              element={<Myportfolio></Myportfolio>}
            ></Route>
            <Route path="/Services" element={<Services></Services>}></Route>
            <Route path="/Skills" element={<Skills></Skills>}></Route>
            <Route path="*" element={<Testimonial></Testimonial>}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
