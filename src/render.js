import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';


const application = ()=>{
  const app = ReactDOMServer.renderToStaticMarkup(<App />);
  console.log("🚀 ~ file: render.js ~ line 13 ~ application ~ app", app)
  
}

application();