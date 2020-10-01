import React from 'react';
import './App.css';
import Car from './Car';
import ListOfCar from './Carslist';
import AddCar from './AddCar';
import UpdateCar from './UpdateCar';

class App extends React.Component {
  state = {
    cars: [
        { brand: "Honda", model:"Civic", color:"black", year : 2019, id : 1},
        { brand: "Ferrari", model:"Testa Rossa", color:"red", year : 2021, id : 2},
        { brand: "Chevrolet", model:"Cicalvaliervic", color:"green", year : 2020, id : 3}
      ]
  }
  addCarFunc = (newCar) => {
    console.log(`add car func ${newCar.model}`)
    // bad -- this.state.cars.push(newCar)
    const newCarsList = [...this.state.cars, {...newCar, id : this.state.cars.length + 1}]
    //this.state.cars.push(newCar)
    this.setState ({
      cars : newCarsList
    })
  }
  updateCarFunc = (updatedCar) => {
    console.log(`update car func ${updatedCar.model}`)
    // bad -- this.state.cars.push(newCar)
    const newCarsList = this.state.cars.map(car => {
      if (car.id != updatedCar.id)
        return car;
      else
        return updatedCar;
    })
    //this.state.cars.push(newCar)
    this.setState ({
      cars : newCarsList
    })
  }
  deleteCarFunc = (id) => {
    console.log(`delete car func ${id}`)
    // bad -- this.state.cars.push(newCar)
    const newCarsList = this.state.cars.filter(car => car.id != id)
    //this.state.cars.push(newCar)
    this.setState ({
      cars : newCarsList
    })
  }
  render() {
    return (
      <div >
        <p>Hello React!</p>
        <AddCar addCarMethod = {this.addCarFunc}/>
        <UpdateCar updateCarMethod = {this.updateCarFunc}/>
        <ListOfCar list_of_cars = {this.state.cars} del_car = {this.deleteCarFunc}
            addCarMethod = {this.addCarFunc}/> 
      </div>
    );
  }
}

export default App;
