import NavBar from "../components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Api from '../utils/Api';
import Information from '../pages/Information';
import Contact from '../pages/Contact';

const App = () => {
  return (
    <div>
       <NavBar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokebola" element={<Api />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes> 
      
    </div>
  );
};
export default App;
