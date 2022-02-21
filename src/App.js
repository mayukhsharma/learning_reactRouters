import React from "react";
import { BrowserRouter, BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Exercises from "./Exercises";
import Contact from "./Contact";
import Diet from "./Diet";
import NoPage from "./NoPage";

function App() {
  return (
   <Router>
     <div className="App">
       <Navbar />
       <div className="content">
      <Routes>
        <Route exact path="/"><About/></Route>
        <Route path="/exercises"><Exercises/></Route>
        <Route path="/diet"><Diet/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="*"><NoPage/></Route>
      </Routes>
       </div>
     </div>
   </Router>
     );
    }
    
export default App;
