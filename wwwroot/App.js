import React from 'react';
import Header from './components/Header';
import ServiceBanner from './components/ServiceBanner';
import ServiceOptions from './components/ServiceOptions';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ServiceBanner />
      <ServiceOptions />
      <Footer />
    </div>
  );
}

export default App;
