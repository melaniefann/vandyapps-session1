import React, { Component, useState } from 'react';
import { getResponse } from '../util';

// TODO: make input fields, do basic things with them to *react*
// implement https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=vanderbilt+&format=json&limit=1
export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = { thing: 'hi' };
  }

  async componentDidMount() {}

  render() {
    return (
      <div className="sidebar">
        <h1>Locations</h1>
        <p>{this.state.thing}</p>
      </div>
    );
  }
}
