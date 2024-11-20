// pages/Settings.js
import React, { useState } from 'react';

const settingsOptions = [
  { name: 'Account Settings' },
  { name: 'Notifications' },
  { name: 'Appearance' },
  { name: 'Security' },
  { name: 'Privacy' },
];

const Settings = () => {
  const [activeSetting, setActiveSetting] = useState('Account Settings');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Settings</h2>
        <ul>
          {settingsOptions.map((option) => (
            <li
              key={option.name}
              className={`cursor-pointer p-2 mb-2 rounded-md ${
                activeSetting === option.name
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => setActiveSetting(option.name)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6">
        {activeSetting === 'Account Settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
            <p>Here you can update your account details, change your password, and more.</p>
            {/* Add more content and input fields for account settings */}
          </div>
        )}
        {activeSetting === 'Notifications' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <p>Manage your notification preferences.</p>
            {/* Add notification setting content */}
          </div>
        )}
        {activeSetting === 'Appearance' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Appearance</h2>
            <p>Customize the theme and layout of the dashboard.</p>
            {/* Add appearance setting content */}
          </div>
        )}
        {activeSetting === 'Security' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p>Update security settings such as two-factor authentication.</p>
            {/* Add security setting content */}
          </div>
        )}
        {activeSetting === 'Privacy' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Privacy</h2>
            <p>Manage your privacy preferences and data permissions.</p>
            {/* Add privacy setting content */}
          </div>
        )}
      </div>
    </div>
  );
};



export default Settings;
