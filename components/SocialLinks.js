import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center">
      <a href="https://github.com/williambjork" className="text-gray-700 hover:text-gray-900 mr-4">
        <FaGithub size={32} />
      </a>
      <a href="https://www.linkedin.com/in/william-bj%C3%B6rk/" className="text-gray-700 hover:text-gray-900">
        <FaLinkedin size={32} />
      </a>
    </div>
  );
};

export default SocialLinks