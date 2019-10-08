import React from 'react';
import '../styles/index.css';

import MapView from './Components/MapView';
import Sidebar from './Components/Sidebar';

export default function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <MapView></MapView>
    </div>
  );
}
