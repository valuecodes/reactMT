import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Blog from './Components/Posts/Blog'
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Blog/>
      {/* <Main /> */}
      <Footer />
    </div>
  );
};

export default App;
