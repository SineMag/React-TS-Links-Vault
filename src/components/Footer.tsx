import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaPinterest } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        width: '100%',
        height:'15%',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="#3b5998" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} color="#1da1f2" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} color="#333" />
      </a>
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
        <FaPinterest size={30} color="#bd081c" />
      </a>
    </footer>
  );
};

export default Footer;
