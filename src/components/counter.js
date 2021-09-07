import React, { Component } from "react";

const Counter = (props) =>  {
    return (
      <div className="container">
        <div className="row">
        <div className="title">
          <h1>Contador Simple ReactJS</h1>
        </div>
        <div className="counter">
          <p>
            {props.horas +
              " horas" +
              " " +
              props.minutos +
              " minutos" +
              " " +
              props.segundos +
              " segundos"}
          </p>
        </div>
        </div>
      </div>
    );
  }
export default Counter;
