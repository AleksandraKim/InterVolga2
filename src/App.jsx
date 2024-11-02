import React from 'react';
import './App.css';
import img from './images/image.jpg';
import Text from './Components/Text.jsx';
import Panels from './Components/Panels.jsx';


function App() {
  
  return (<div className="main">
             <div className="header">Шапка</div>
             <div className="content_main"> 
                <Panels/>
                <div className="content">
                    <img src={img} alt="image not found" className="content_img" />
                    <Text/>
                </div> 
             </div>
             <div className="footer">Подвал</div>
          </div>
  );
}

export default App;
