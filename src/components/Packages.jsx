import React from 'react';
import { ShoppingBag } from 'lucide-react';

const packages = [
  { id: 1, name: 'The Royal Banquet', category: 'Traditional Events', price: '$899', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Whimsical Garden', category: 'Baby Shower', price: '$549', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Gold & Glamour', category: 'Graduation', price: '$699', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

export default function Packages() {
  return (
    <section style={{ backgroundColor: 'white', padding: '100px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Luxury Packages</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Curated premium setups designed for effortless elegance.</p>
          </div>
          <button style={{ background: 'transparent', border: 'none', color: 'var(--primary)', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>
            View All Packages →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {packages.map(pkg => (
            <div key={pkg.id} className="hover-lift" style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #eee' }}>
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img src={pkg.img} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '30px' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' }}>
                  {pkg.category}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{pkg.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{pkg.price}</span>
                  <button className="btn-primary" style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShoppingBag size={18} /> Add to Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
