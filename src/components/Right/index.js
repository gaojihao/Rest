import React, { Component } from 'react';
import './styls.css';
import ReactJson from 'react-json-view'

class Right extends Component {
    render(){
        return (
        <div>
            <div className="title">
                <span>Response Header</span>
            </div>
            <div>
                <ReactJson />
            </div>
            <div className="title">
                <span>Response Body</span>
            </div>
            <div>
                <ReactJson />
            </div>
        </div>
        );
    }
}


export default Right;