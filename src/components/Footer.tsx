
'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Using react-icons
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Import cn for conditional classes

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
    // Use theme variables for background and text
    <footer className={cn(
        "w-full shrink-0 border-t py-6",
        "bg-muted/30 dark:bg-card", // Use muted background in light, card in dark
        "text-foreground" // Use main foreground text color
      )}>
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        {/* Line 1: Made with love */}
        <p className="text-sm text-muted-foreground">Made with ❤️ for Developers.</p>

        {/* Line 2: Social Media Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${link.label} profile`}
              // Use muted foreground for icons, brighten on hover
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 transform hover:scale-110"
            >
              {React.cloneElement(link.icon, { size: 20 })} {/* Adjust icon size */}
            </Link>
          ))}
        </div>

        {/* Line 3: Copyright */}
        {/* Use muted foreground for copyright */}
        <p className="text-xs text-muted-foreground">
          &copy; {currentYear} React Component Converter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
