import React, { Component } from 'react';

class Statefull extends Component {
  render() {
    return (
      <div>
        <h3>Nama : {this.props.nama}</h3>
        <h3>Umur : {this.props.umur}</h3>
        <div>{this.props.hobi}</div>
        <h3>========================</h3>
      </div>
    );
  }
}

export default Statefull;
