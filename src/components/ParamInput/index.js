import React, { Component } from 'react';
import './style.css';

export default class ParamInput extends Component {

    render(){
        return (
            <div className="param_style">
                <div className="left_p">
                    <input className="input_p"></input>
                </div>
                <div className="right_p">
                    <input className="input_p"></input>
                </div>
            </div>
        );
    }
}