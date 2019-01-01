import React, { Component } from 'react';
import './Tour.scss';


export default class Tour extends Component {
  render() {
    return (
      <div className="card Tour">
        <img src="https://www.gannett-cdn.com/-mm-/62c15e2bde49eeb7991aa8672fefbb6b21fd132f/c=108-0-1991-1416/local/-/media/2015/01/24/USATODAY/USATODAY/635577030179736795-476881195.jpg" 
            alt="Avatar" width="100%"
         />
        <div className="container">
          <h3><b>City</b></h3> 
          <h3><b>Name</b></h3> 
          {"Info"}
          <span>
            <i className = "fa fa-caret-square-down" />
          </span>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
      </div>
    )
  }
}
