import React from "react";
import 'materialize-css' 
import { useRoute } from "./pages/routes";
import { Layout } from "./components/Layout.jsx";
import {Routes,Route} from 'react-router-dom';
import {AuthPage} from './pages/AuthPage.jsx';
import {LinksPage} from './pages/LinksPage.jsx'
import {DetailPage} from './pages/DetailPage.jsx'
import {CreatePage} from './pages/CreatePage.jsx'



function App() {
  const router=useRoute(true)
  return (
  <div className="container">
    <div className="wrapper">
    <div className="content">
    {router}
    </div>
    <div className="footer">

    <footer className='page-footer'>Footer</footer>
    </div>
    </div>
  
  </div>
  );
}

export default App;
