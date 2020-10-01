import React, { Component } from 'react';

class Carslist extends React.Component
{
  // ({list_of_cars}) =>  {

 render() {
  return (<div >
         <h1>List of cars:</h1>
         {this.props.list_of_cars.map(car =>  {
          return car.color == 'red' || car.color != 'red'?
          (<div key = {Math.random() * 1000000}>
            <div>Id: {car.id}</div>
            <div>Brand: {car.brand}</div>
            <div>Model: {car.model}</div>
            <div>Color: {car.color}</div>
            <div>Year: {car.year}</div>
            <div><button className="btn" onClick={() => {this.props.del_car(car.id)}}>X</button></div>
            <div><button className="btn" onClick={() => {this.props.addCarMethod(car)}}>X2</button></div>            
            <hr/>
        </div>)
          : null; })}
      </div>
    );
  }
}
export default Carslist;