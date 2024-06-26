// src/App.js
import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css';

const { Content, Footer } = Layout;

const App = () => {
  useEffect(() => {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-BTNCJ4QH4C';
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BTNCJ4QH4C');
      `;
      document.head.appendChild(script2);
  }, []);

  return (
    <Router>
      <Layout className="layout">
        <NavBar />
        <Content className="content">
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </Content>
        <div className="footer-custom">
        © 2024 Xingchen Wei. All rights reserved.
      </div>
      </Layout>
    </Router>
  );
};

export default App;
