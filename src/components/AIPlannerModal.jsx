import React from 'react';

export default function AIPlannerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 2000,
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        width: '90%', maxWidth: '600px',
        borderRadius: '20px',
        padding: '40px',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
          &times;
        </button>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>✨ AI Event Planner Wizard</h2>
        <p style={{ color: 'var(--text-light)', textAlign: 'center', marginBottom: '30px' }}>
          Tell us about your upcoming event, and our AI will curate the perfect luxury rental package tailored to your theme, guest count, and venue.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>What kind of event are you hosting?</label>
            <input type="text" placeholder="e.g., A vintage themed 1st birthday party" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Estimated Guest Count</label>
            <input type="number" placeholder="50" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
          </div>
          <button className="btn-primary" style={{ marginTop: '20px' }}>
            Generate My Custom Package
          </button>
        </div>
      </div>
    </div>
  );
}
