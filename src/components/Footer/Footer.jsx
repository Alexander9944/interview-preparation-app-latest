// Footer.jsx
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaRegClock, FaEnvelope, FaHeart } from 'react-icons/fa';
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

  const footerLinkClass = "text-neutral-600 hover:text-primary-600 transition-colors duration-300 font-medium";
  const footerSocialClass = "text-neutral-600 hover:text-primary-600 transition-all duration-300 transform hover:scale-110";

  return (
    <footer className="relative bg-gradient-to-b from-white via-primary-50/30 to-secondary-50/40 border-t border-primary-100/50 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              PrepHub
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Your ultimate platform for interview preparation and professional development in DevOps, Cloud, and modern infrastructure technologies.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={footerSocialClass}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={footerSocialClass}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className={footerLinkClass}>Home</Link></li>
              <li><Link to="/about-me" className={footerLinkClass}>About Me</Link></li>
              <li><Link to="/technical-concepts" className={footerLinkClass}>Concepts</Link></li>
              <li><Link to="/interview" className={footerLinkClass}>Interview Q&A</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/reference-articles" className={footerLinkClass}>Articles</Link></li>
              <li><Link to="/ai-guide" className={footerLinkClass}>AI Guide</Link></li>
              <li><Link to="/migration-concepts" className={footerLinkClass}>Migration</Link></li>
              <li><Link to="/terms-and-conditions" className={footerLinkClass}>Terms</Link></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900 mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <div className="p-2 rounded-lg bg-primary-100/50">
                  <FaRegClock className="text-primary-600" />
                </div>
                <span>{currentTime}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <div className="p-2 rounded-lg bg-primary-100/50">
                  <FaEnvelope className="text-primary-600" />
                </div>
                <a href="mailto:contact@example.com" className="hover:text-primary-600 transition-colors">
                  contact@example.com
                </a>
              </div>
              <Link
                to="/contact-us"
                className="inline-block mt-4 px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200/50 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-neutral-600 mb-4 md:mb-0">
            <span className="flex items-center gap-1">
              © 2025 PrepHub. Made with <FaHeart className="text-red-500 text-xs animate-pulse-soft" /> by the community
            </span>
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <Link to="/terms-and-conditions" className={footerLinkClass}>Privacy</Link>
            <span className="text-neutral-300">•</span>
            <Link to="/terms-and-conditions" className={footerLinkClass}>Terms</Link>
            <span className="text-neutral-300">•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/20 to-transparent rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
