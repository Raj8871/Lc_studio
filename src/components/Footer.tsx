
'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Using react-icons
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://www.linkedin.com', // Replace with your actual LinkedIn profile URL
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com', // Replace with your actual GitHub profile URL
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://twitter.com', // Replace with your actual Twitter profile URL
      icon: <FaTwitter />,
      label: 'Twitter',
    },
  ];

  return (
    <footer className="w-full shrink-0 border-t bg-gray-900 text-gray-300 py-6 dark:bg-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        {/* Line 1: Made with love */}
        <p className="text-sm">Made with ❤️ for Developers.</p>

        {/* Line 2: Social Media Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${link.label} profile`}
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              {React.cloneElement(link.icon, { size: 20 })} {/* Adjust icon size */}
            </Link>
          ))}
        </div>

        {/* Line 3: Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {currentYear} HTML/CSS/JS to React Converter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
