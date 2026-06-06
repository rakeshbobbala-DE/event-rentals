import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero({ onOpenPlanner }) {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '100px 20px 40px',
      background: 'linear-gradient(rgba(248,249,252,0.8), rgba(248,249,252,0.9)), url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '800px', zIndex: 1 }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
          Make Your Event <br/> <span style={{ color: 'var(--primary)' }}>Memorable</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '40px' }}>
          Premium rentals for birthdays, baby showers, and traditional ceremonies. 
          Delivered and styled to perfection.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button className="btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
            Browse Collections
          </button>
          <button className="btn-secondary" onClick={onOpenPlanner} style={{ padding: '15px 30px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={20} /> AI Event Planner
          </button>
        </div>
      </div>

      {/* Search/Filter Bar */}
      <div className="glass-panel" style={{
        marginTop: '60px',
        padding: '20px',
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        zIndex: 1
      }}>
        {['Birthday Parties', 'Baby Showers', 'House Warming', 'Traditional Events', 'Graduations'].map(cat => (
          <button key={cat} style={{
            padding: '10px 20px',
            borderRadius: '30px',
            border: '1px solid var(--primary)',
            background: 'transparent',
            color: 'var(--primary)',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => { e.target.style.background = 'var(--primary)'; e.target.style.color = 'white'; }}
          onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--primary)'; }}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
