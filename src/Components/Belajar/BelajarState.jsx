import React, { Component } from 'react';

export class BelajarState extends Component {
  state = {
    nama: 'lino',
    umur: 22,
    hobi: 'Game',
  };

  render() {
    return (
      <div>
        <h3>Nama : {this.state.nama}</h3>
        <h3>Umur : {this.state.umur}</h3>
        <div>{this.state.hobi}</div>
        <h3>========================</h3>
      </div>
    );
  }
}

export default BelajarState;
