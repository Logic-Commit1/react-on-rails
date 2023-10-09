import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";

import "./App.css";




function App() {
  return (
    <Router>
      <>
        <h1>React on Rails Blog</h1>
        <Navbar />
        <AppRoutes />
      </>
    </Router>
  );
}

export default App;
