import React, { Component } from 'react';

class Carslist extends React.Component
{
  // ({list_of_cars}) =>  {
  state = {
    cars_style : []
  }
   getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  change_color = (index) => {
    const car_new_styles = [...this.state.cars_style]
    console.log(index)
    car_new_styles[index] = {
      backgroundColor : this.getRandomColor(),
      padding : '12px',
      borderRadius : '12px',
      margin : '10px',
      width: '50%'
    }
      this.setState(
        {
          cars_style : car_new_styles
        }
      )
  }
 render() {
   /*
   //Set interval example:
   if  (this.state.cars_style.length == 0)
   {
    setInterval(() => {
      console.log(new Date())
          const new_car_style = []
          for (let i=0; i < this.props.list_of_cars.length;i++)
          {new_car_style.push(
              {
                backgroundColor : this.getRandomColor(),
                padding : '12px',
                borderRadius : '12px',
                margin : '10px',
                width: '50%'
              })
          }
          this.setState({cars_style : new_car_style})


  }, 1000);
  */
   if  (this.state.cars_style.length == 0)
   {
    const new_car_style = []
    for (let i=0; i < this.props.list_of_cars.length;i++)
    {new_car_style.push(
        {
          backgroundColor : this.getRandomColor(),
          padding : '12px',
          borderRadius : '12px',
          margin : '10px',
          width: '50%'
        })
    }
    this.setState({cars_style : new_car_style})
  }
  let index = 0;
  return (<div >
         <h1>List of cars:</h1>
         {
          this.props.list_of_cars.map(car =>  {
          return car.color == 'red' || car.color != 'red'?
          (<div key = {Math.random() * 1000000} style={this.state.cars_style[index++]}>
            <div>Id: {car.id}</div>
            <div>Brand: {car.brand}</div>
            <div>Model: {car.model}</div>
            <div>Color: {car.color}</div>
            <div>Year: {car.year}</div>
            <div><button className="btn" onClick={() => {this.props.del_car(car.id)}}>X</button></div>
            <div><button className="btn" onClick={() => {this.props.addCarMethod(car)}}>X2</button></div>            
            <div><button className="btn" onClick={() => {this.change_color(car.id-1)}}>Color</button></div>            

            <hr/>
        </div>)
          : null; })}
      </div>
    );
  }
}
export default Carslist;