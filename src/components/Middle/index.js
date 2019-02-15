import React, { Component } from 'react';
import ParamInput from '../ParamInput';
import './middle.css';

const list = [1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,77,7,7,7,7,7,7,7,7,7];

class Middle extends Component {
    render(){
        return (
        <div>
            <div className="middle_head">
                <i>Request Body</i>
            </div>
            <div className="bg">
                <div className="key_value_bg">
                {this.renderKeyValueHeader()}
                {this.renderRequestItem()}
                </div>
            </div>
        </div>
        );
    }

    renderRequestItem= () => {
        const items = list;
        if (!items) {
            return null;
        }

        return items.map((item, index) => {
            return (
                <li className="itemstyle">
                    <ParamInput />
                </li>
            );
        })
    }

    renderKeyValueHeader = () => {
        return (
            <div className="key_value_head">
                <div className="key"><span>Key</span></div>
                <div className="value"><span>Value</span></div>
            </div>
        );
    }
}


export default Middle;