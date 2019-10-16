import React, { Component, useState } from 'react';
import { getResponse } from '../util';

// TODO: make input fields, do basic things with them to *react*
// implement https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=vanderbilt+&format=json&limit=1
export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = { thing: '54' };
    this.handleChange = this.handleChange.bind(this);
  }

 async handleChange(e){
    console.log(e);
    this.setState({thing: (await getResponse(
      `https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=${e.target.value}+&format=json&limit=1`
    ))[0].display_name,
    })};

  async componentDidMount() {}

  render() {
    return (
      <div className="sidebar">
        <h1>Locations</h1>
        <p>{this.state.thing}</p>
        <input onChange={this.handleChange}></input>
      </div>
    );
  }
}
