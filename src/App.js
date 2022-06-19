import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PostDetails from './components/Details/PostDetails';
import Heading from './components/Heading';
import Posts from "./components/Posts/Posts";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <BrowserRouter>
    <Heading></Heading>

      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/postdetails/:code" element={<PostDetails/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
