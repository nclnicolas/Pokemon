import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import "../src/styles/styleCardPokemon.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className='container'>
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
  </div>
);
