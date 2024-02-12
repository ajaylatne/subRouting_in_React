import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './Demo.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
const src1 = process.env.PUBLIC_URL + '/logo19.png';
root.render(
  <>
    
    <Demo/>
    <img src={ src1 }/>
  </>
    
);

