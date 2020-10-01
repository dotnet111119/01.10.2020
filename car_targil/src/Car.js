import React, { Component } from 'react';

class Car extends Component {
  render() {
      console.log(this.props)
    return (
      <div >
          <div>Brand: {this.props.brand}</div>
          <div>Model: {this.props.model}</div>
          <div>Color: {this.props.color}</div>
          <div>Engine {this.props.engine ? this.props.engine : '-?-'}</div>
      </div>
    );
  }
}
export default Car;