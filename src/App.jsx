// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'; // Layout that contains Outlet
import Home from './Components/Home'; // Home page component
import Profile from './Components/Profile'; // Profile page component
import Settings from './Components/Settings'; // Settings page component
import Catalog from './Components/Catalogs';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Parent Route (Layout) */}
        <Route path="/" element={<Layout />}>
          {/* Child Routes */}
          <Route index element={<Home />} /> {/* This will be rendered inside the Outlet when the path is '/' */}
          <Route path="profile" element={<Profile />} /> {/* Rendered inside the Outlet when path is '/profile' */}
          <Route path="settings" element={<Settings />} /> {/* Rendered inside the Outlet when path is '/settings' */}
          <Route path="Catalog" element={<Catalog />} /> 
          <Route path="login" component={<Login/>} />
          <Route path="signup" component={<Signup/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
