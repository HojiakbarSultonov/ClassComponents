import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import { movies } from "../movies";



const App = () => {
   
  return (
    <div className="container">
      {/* <Header />
            <Note />
            <Footer /> */}
      <Card movies = {movies}/>
    </div>
  );
};

export default App;
