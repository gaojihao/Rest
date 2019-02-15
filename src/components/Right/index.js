import React, { Component } from 'react';
import './right.css';
import ReactJson from 'react-json-view'

let json = {};

let headerf = {
  };

const json_view_style={
    height:'100%',
    width:'calc(100vw - 620px);',
    overflow:'scroll',
    display:'block',
    position:'relative',
};

class Right extends Component {

    render(){
        return (
        <div>
            <div className="right_title">
                <i>Response Header</i>
            </div>
            <div className="res_header">
                <ReactJson 
                src={json} 
                theme="google" 
                style={json_view_style}/>
            </div>
            <div className="right_title">
                <i>Response Body</i>
            </div>
            <div className="res_body">
                <ReactJson 
                src={json} 
                theme="google"
                style={json_view_style}/>
            </div>
        </div>
        );
    }
}


export default Right;