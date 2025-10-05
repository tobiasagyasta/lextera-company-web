// components/layout/Header.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Use Next.js Link for better navigation

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  // Effect for the sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent body scroll when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#history", label: "History" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <>
      <header
        className={`w-full px-6 z-50 flex items-center justify-between transition-all duration-500 ease-in-out ${
          isSticky
            ? "py-1 fixed top-0 bg-white text-[#061d61] shadow-lg"
            : " absolute top-0 bg-transparent text-white"
        }`}
      >
        {/* Logo - now always on the left */}
        <Link href="/">
          <Image
            src={isSticky ? "/lextera.png" : "/lextera-white.png"}
            alt="Lextera Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-28 md:w-[130px] h-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Button - Mobile Only */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white text-[#061d61] shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-semibold hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
