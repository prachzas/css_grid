import React from 'react';
import Header from '../src/components/Header.js';
import Content from '../src/components/Content.js';
import Mylist from '../src/components/Mylist.js';
import Footer from '../src/components/Footer.js';
import './App.css';
function App() {
  return (
    <div className="container">
      <div className="header"><Header/></div>
      <div className="content"><Content/></div>
      <div className="mylist"><Mylist/></div>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default App;
