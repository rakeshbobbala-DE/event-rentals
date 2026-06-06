import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppChat() {
  return (
    <button style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#25D366',
      color: 'white',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
      cursor: 'pointer',
      zIndex: 1000,
      transition: 'transform 0.3s ease'
    }}
    className="hover-lift"
    onClick={() => alert('Opening WhatsApp Chat...')}
    >
      <MessageCircle size={32} />
    </button>
  );
}
