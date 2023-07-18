import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import { movies } from "../movies";
import Class from "./Class";
import Counter from "./Counter";



const App = () => {
   
  return (
    <div className="container">
      {/* <Header />
            <Note />
            <Footer /> */}
      {/* <Card movies = {movies}/> */}
      <Class/>
      <Counter/>
    </div>
  );
};

export default App;
