import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';
import L from 'leaflet';

// this library's author is bad: https://github.com/PaulLeCam/react-leaflet/issues/453
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../node_modules/leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('../../node_modules/leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('../../node_modules/leaflet/dist/images/marker-shadow.png'),
});

// TODOs:

// 1. Let's deploy what we got
// 2. Figure out a way to get the latlng/name from Sidebar -> MapView
// 3. Maybe render multiple marker/popup pairs?

export default function MapView({ position }) {
  //const position = {name: "Vanderbilt University", latlng: [36.1447, -86.8027]};
  return (
    <Map className="map" center={position.latlng} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position.latlng}>
        <Popup>{position.name}</Popup>
      </Marker>
    </Map>
  );
}
