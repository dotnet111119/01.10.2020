
import React from 'react';

class UpdateCar extends React.Component {
    state = {
        id : null,
          brand: null, 
          model:null, 
          color:null, 
          year : null
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.updateCarMethod(this.state)
    }
    handleChange = (e) => {
        //console.log(e.target);
        //console.log(e.target.value)
        this.setState ({
            [e.target.id] : e.target.value
        })
    }
    render() {
      return (
        <div>
          <p>Update new car:</p>
          <form onSubmit={this.handleSubmit}>
                <label htmlFor="id">Id:</label>
              <input type="number" id="id" onChange={this.handleChange} /><br />              
              <label htmlFor="brand">Brand:</label>
              <input type="text" id="brand" onChange={this.handleChange} required/><br />
              <label htmlFor="model">Model:</label>
              <input type="text" id="model" onChange={this.handleChange} /><br />    
              <label htmlFor="color">Color:</label>
              <input type="text" id="color" onChange={this.handleChange} /><br />
              <label htmlFor="year">Year:</label>
              <input type="number" id="year" onChange={this.handleChange} /><br />   
              <button>Update</button>        
          </form>
          <hr />
        </div>
      );
    }
  }
  
  export default UpdateCar;