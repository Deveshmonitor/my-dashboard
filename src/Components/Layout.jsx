import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu'; // Your sidebar component
import Header from './Header'; // Your header component
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
      {/* Sidebar - Toggle visibility on smaller screens */}
      <div className={`fixed inset-0 z-40 lg:static lg:translate-x-0 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:w-64`}>
        <SidebarMenu />
      </div>

      {/* Overlay for small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with toggle button for sidebar */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main content section */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-white dark:bg-gray-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
