
import React, { useRef } from 'react';


const Navbar = () => {
    const sideMenuRef = useRef(null);
    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(0)';
        }
    }
    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(100%)';
        }
    }
return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed w-full px-6 lg:px-12 xl:px-[10%] py-3 flex items-center justify-between z-50 font-bold bg-gradient-to-r from-white/90 via-rose-50/90 to-white/90 shadow-lg backdrop-blur-md border-b border-rose-100">
        {/* Logo (hidden on mobile, shown on md+) */}
        <div className="hidden md:block">
          <h1>
            <a
              href="/"
              className="text-2xl font-extrabold tracking-widest text-rose-600 hover:text-rose-700 transition-colors drop-shadow-sm"
            >
              Modern Electric
            </a>
          </h1>
        </div>
        {/* Main Nav Links */}
        <ul className="bg-white/80 shadow-md hidden md:flex items-center gap-10 rounded-full px-12 py-2 border border-rose-100">
          <li>
            <a href="#top" className="cursor-pointer font-black text-rose-700 hover:text-white hover:bg-rose-600 px-4 py-1 rounded-full transition-all duration-200">
              الصفحة الرئيسية
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer font-bold text-gray-700 hover:text-white hover:bg-rose-500 px-4 py-1 rounded-full transition-all duration-200">
              عنا
            </a>
          </li>
          <li>
            <a href="#services" className="cursor-pointer font-bold text-gray-700 hover:text-white hover:bg-rose-500 px-4 py-1 rounded-full transition-all duration-200">
              خدماتنا
            </a>
          </li>
          <li>
            <a href="#work" className="cursor-pointer font-bold text-gray-700 hover:text-white hover:bg-rose-500 px-4 py-1 rounded-full transition-all duration-200">
              شغلى
            </a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer font-bold text-gray-700 hover:text-white hover:bg-rose-500 px-4 py-1 rounded-full transition-all duration-200">
              تواصل معى
            </a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden bg-white/90 shadow-lg border border-rose-100 rounded-full p-3 hover:bg-rose-50 transition"
          onClick={openMenu}
          aria-label="Open menu"
        >
          <span className="text-2xl text-rose-600">☰</span>
        </button>
        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          style={{ transform: 'translateX(100%)' }}
          className="flex md:hidden flex-col gap-8 py-24 px-10 fixed right-0 top-0 bottom-0 w-72 z-50 h-screen bg-gradient-to-b from-white/95 via-rose-50/95 to-white/95 shadow-2xl transition-transform duration-500 font-bold border-l border-rose-100"
        >
          <button
            className="absolute right-7 top-7 text-3xl text-rose-600 hover:text-rose-800 transition-colors"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
          <li>
            <a onClick={closeMenu} href="#top" className="cursor-pointer font-black text-rose-700 hover:text-white hover:bg-rose-600 px-4 py-2 rounded-full transition-all duration-200">
              الصفحة الرئيسية
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about" className="cursor-pointer font-bold text-gray-700 hover:text-white hover:bg-rose-500 px-4 py-2 rounded-full transition-all duration-200">
              عنا
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services" className="cursor-pointer font-bold text-gray-700 hover:text-white hover:bg-rose-500 px-4 py-2 rounded-full transition-all duration-200">
              خدماتنا
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work" className="cursor-pointer font-bold text-gray-700 hover:text-white hover:bg-rose-500 px-4 py-2 rounded-full transition-all duration-200">
              شغلى
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact" className="cursor-pointer font-bold text-gray-700 hover:text-white hover:bg-rose-500 px-4 py-2 rounded-full transition-all duration-200">
              تواصل معى
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile Logo (not fixed, only on mobile) */}
      <div className="md:hidden pt-8 pb-3 px-6">
        <h1>
          <a
            href="/"
            className="text-2xl font-extrabold tracking-widest text-rose-600 hover:text-rose-700 transition-colors drop-shadow-sm"
          >
            Modern Electric
          </a>
        </h1>
      </div>
    </>
  )
}

export default Navbar
