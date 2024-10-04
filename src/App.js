import React from 'react';
import Dashboard from './Dashboard'; // Make sure the path is correct based on your project structure
import './App.css'; // You can add your own styles for the App component if needed

const App = () => {
  return (
    <div className="app">
      <h1>Dashboard Example</h1>
      <Dashboard />
    </div>
  );
};

export default App;
