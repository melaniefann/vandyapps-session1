import React, {useState} from 'react';
import '../styles/index.css';

import MapView from './Components/MapView';
import Sidebar from './Components/Sidebar';

export default function App() {
  const[loc, setLoc] = useState({ name: "", latlng: [0, 0] });


  return (
    <div className="container">
      <Sidebar setLocation={setLoc}></Sidebar>
      <MapView position={loc}></MapView>
    </div>
  );
}
