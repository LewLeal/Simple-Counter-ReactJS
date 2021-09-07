import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Counter from "./components/counter";



let sec = 0;
let min = 0;
let hour = 0;

let counter = setInterval(() => {
  ReactDOM.render(
  <Counter segundos={sec} minutos={min} horas={hour} />,
   document.querySelector("#root"));
   sec++;
   if (sec == 59) {
     sec = 0;
     min ++;
   } else if (min == 59) {
     min = 0;
     hour ++;
   } else if (hour == 24) {
     hour = 0;
     min = 0;
     sec = 0;
    clearInterval(counter);
   }
}, 1000)

