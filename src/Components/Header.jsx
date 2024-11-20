// components/Header.js
import React from 'react';
import "../../public/imgs/images.jpeg"

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-gray-200 dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      {/* Menu Button for small screens */}
      <button
        className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        onClick={onMenuClick}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Dashboard</h1>

      {/* Right Side (Profile or Logout) */}
      <div className="flex items-center">
        <img 
          src="../../public/imgs/images.jpeg" 
          alt="Profile" 
          className="w-8 h-8 rounded-full" 
        />
        <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">Devesh Sen</span>
      </div>
    </header>
  );
};

export default Header;
