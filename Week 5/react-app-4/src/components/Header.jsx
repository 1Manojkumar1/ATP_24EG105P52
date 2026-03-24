// components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(244,243,236,0.5)] dark:bg-[rgba(47,48,58,0.5)] backdrop-blur-md border-b border-[#e5e4e7] dark:border-[#2e303a]">
      <div className="max-w-[1126px] mx-auto px-6 h-[60px] flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="w-8 h-8 bg-[#aa3bff] dark:bg-[#c084fc] rounded-md flex items-center justify-center text-white font-semibold text-sm">
            N
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[15px]">
            <a href="#home" className="text-[#aa3bff] dark:text-[#c084fc] font-medium hover:opacity-80 transition-opacity">
              Home
            </a>
            <a href="#about" className="text-[#6b6375] dark:text-[#9ca3af] hover:text-[#08060d] dark:hover:text-[#f3f4f6] transition-colors">
              About Author
            </a>
            <a href="#project" className="text-[#6b6375] dark:text-[#9ca3af] hover:text-[#08060d] dark:hover:text-[#f3f4f6] transition-colors">
              About this Project
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="button-icon w-9 h-9 flex items-center justify-center rounded-md text-[#6b6375] dark:text-[#9ca3af] hover:bg-[#f4f3ec] dark:hover:bg-[#2e303a] transition-colors">
            <RefreshIcon />
          </button>
          <button className="button-icon w-9 h-9 flex items-center justify-center rounded-md text-[#6b6375] dark:text-[#9ca3af] hover:bg-[#f4f3ec] dark:hover:bg-[#2e303a] transition-colors">
            <MoonIcon />
          </button>
          <button className="button-icon w-9 h-9 flex items-center justify-center rounded-md text-[#6b6375] dark:text-[#9ca3af] hover:bg-[#f4f3ec] dark:hover:bg-[#2e303a] transition-colors">
            <GridIcon />
          </button>
          <button className="button-icon w-9 h-9 flex items-center justify-center rounded-md text-[#6b6375] dark:text-[#9ca3af] hover:bg-[#f4f3ec] dark:hover:bg-[#2e303a] transition-colors">
            <LinkedInIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

const RefreshIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const GridIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default Header;