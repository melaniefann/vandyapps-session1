import React, { useState } from 'react';

// TODO: make input fields, do basic things with them to *react*
// implement https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=vanderbilt+&format=json&limit=1
export default function Sidebar() {
  const [thing, setThing] = useState(10); // interesting...
  return (
    <div className="sidebar">
      <h1>Locations</h1>
      <p>{thing}</p>
    </div>
  );
}
