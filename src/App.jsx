import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import AIPlannerModal from './components/AIPlannerModal';
import { useState } from 'react';

function Home() {
  const [isPlannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <Hero onOpenPlanner={() => setPlannerOpen(true)} />
      <Gallery />
      <Packages />
      <AIPlannerModal isOpen={isPlannerOpen} onClose={() => setPlannerOpen(false)} />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Placeholder routes for category and package detail pages */}
            <Route path="/category/:id" element={<div style={{padding: '100px', textAlign: 'center'}}><h2>Category Page</h2><p>Pinterest-style gallery goes here.</p></div>} />
            <Route path="/package/:id" element={<div style={{padding: '100px', textAlign: 'center'}}><h2>Package Detail Page</h2><p>Luxury Boutique package view goes here.</p></div>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppChat />
      </div>
    </Router>
  );
}

export default App;
