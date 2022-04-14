import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Feedback from "./components/Feedback";
import Detail from "./components/Detail";

import './App.css';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element= {<Feedback/>}/>
          <Route path="/feedback/:id" element= {<Detail/>}/>
        </Routes>

      </Router>
    
    </>
  );
}

export default App;
