import React from "react";
import { MdSchedule } from "react-icons/md";
import "./counter.css"
const Counter = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="title">
                    <h1>Contador Simple ReactJS</h1>
                </div>
                <div className="counter">
                    <div>
                        <MdSchedule />
                        {props.horas +
                            " horas" +
                            " " +
                            props.minutos +
                            " minutos" +
                            " " +
                            props.segundos +
                            " segundos"}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Counter;
