import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { client } from './appwrite';

function App() {
  useEffect(() => {
    // Ping the Appwrite backend server to verify the setup
    client.ping()
      .then(() => console.log('Successfully connected to Appwrite!'))
      .catch(console.error);
  }, []);
  return (
    <div className="bg-[#0f0f11] min-h-screen text-white w-full">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
