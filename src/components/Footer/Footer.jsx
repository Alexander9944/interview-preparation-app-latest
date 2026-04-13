// Footer.jsx
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaRegClock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: "2-digit", minute: "2-digit", hour12: true };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#274467] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about-me" className="hover:underline">About Me</Link></li>
            <li><Link to="/technical-concepts" className="hover:underline">Technical Concepts</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link></li>
          </ul>
        </div>

        {/* Column 2: Get in Touch */}
        <div className="flex flex-col items-start md:items-center space-y-4 h-full">
          <Link
            to="/contact-us"
            className="bg-[#147BD1] hover:bg-blue-700 text-white px-5 py-2 rounded transition"
          >
            Get in Touch
          </Link>
          <p className="flex items-start text-sm text-gray-300 gap-2">
            <FaRegClock /> {currentTime}
          </p>
          <p className="flex items-start text-sm text-gray-300 gap-2">
            <FaEnvelope /> abc@.com
          </p>
        </div>

        {/* Column 3: Connect With Me */}
        <div className="text-left md:text-right">
          <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
          <div className="flex md:justify-end gap-4 mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400">@2025 abcdef, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
