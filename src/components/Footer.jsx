import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1F2937', color: 'white', padding: '80px 0 40px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        <div>
          <h2 style={{ fontFamily: 'Playfair Display', color: 'var(--secondary)', marginBottom: '20px' }}>LuxeRentals</h2>
          <p style={{ color: '#9CA3AF' }}>Making every occasion memorable with premium, curated rental collections.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Quick Links</h3>
          <ul style={{ color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Categories</li>
            <li>How it Works</li>
            <li>Our Packages</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Contact</h3>
          <ul style={{ color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Email: hello@luxerentals.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Location: New York, NY</li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ marginTop: '60px', paddingTop: '20px', borderTop: '1px solid #374151', textAlign: 'center', color: '#6B7280', fontSize: '0.9rem' }}>
        &copy; 2026 LuxeRentals. All rights reserved.
      </div>
    </footer>
  );
}
