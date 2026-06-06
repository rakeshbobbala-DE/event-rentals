import React from 'react';

const categories = [
  { id: 1, title: 'Princess Birthday', img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: '300px' },
  { id: 2, title: 'Jungle Theme Safari', img: 'https://images.unsplash.com/photo-1530103862676-de88927964e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: '400px' },
  { id: 3, title: 'Blue Baby Shower', img: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: '250px' },
  { id: 4, title: 'Traditional Ceremonies', img: 'https://images.unsplash.com/photo-1583939411023-14783179e581?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: '450px' },
  { id: 5, title: 'Elegant Graduation', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: '300px' },
  { id: 6, title: 'House Warming Floral', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: '350px' },
];

export default function Gallery() {
  return (
    <section className="container" style={{ padding: '80px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Find Your Inspiration</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Browse our Pinterest-inspired gallery to discover your perfect theme.</p>
      </div>

      <div className="masonry-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="masonry-item hover-lift" style={{ height: cat.height }}>
            <img src={cat.img} alt={cat.title} style={{ height: '100%', objectFit: 'cover' }} />
            <div className="masonry-overlay">
              <h3 style={{ color: 'white', marginBottom: '10px' }}>{cat.title}</h3>
              <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
