import React, { Component } from 'react';

const Carslist = ({list_of_cars}) =>  {
 return (
      <div >
         <h1>List of cars:</h1>
         {list_of_cars.map(car =>  {
          return car.color == 'red' || car.color != 'red'?
          (<div key = {Math.random() * 1000000}>
            <div>Id: {car.id}</div>
            <div>Brand: {car.brand}</div>
            <div>Model: {car.model}</div>
            <div>Color: {car.color}</div>
            <div>Year: {car.year}</div>
            <hr/>
        </div>)
          : null; })}
      </div>
    );
  }

export default Carslist;