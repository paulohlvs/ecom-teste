import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import { ConfigProvider } from 'antd'
import {ptBr} from 'antd/dist/antd-with-locales'
import App from './App';




import 'antd/dist/antd.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={ptBr}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode >
);

