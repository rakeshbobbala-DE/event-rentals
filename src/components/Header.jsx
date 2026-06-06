import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="glass-panel" style={{
      position: 'fixed', top: '20px', left: '5%', right: '5%', zIndex: 1000,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '15px 30px', borderRadius: '50px'
    }}>
      <div className="logo">
        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Playfair Display', color: 'var(--primary)' }}>
          LuxeRentals
        </Link>
      </div>

      <nav style={{ display: 'flex', gap: '30px', fontWeight: '500' }} className="desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Search size={20} style={{cursor: 'pointer'}} />
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <ShoppingBag size={20} />
          <span style={{
            position: 'absolute', top: '-8px', right: '-8px', 
            background: 'var(--secondary)', color: 'white', 
            fontSize: '12px', width: '18px', height: '18px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%', fontWeight: 'bold'
          }}>0</span>
        </div>
        <button className="btn-primary" style={{ padding: '8px 20px', borderRadius: '20px' }}>Quote</button>
      </div>
    </header>
  );
}
