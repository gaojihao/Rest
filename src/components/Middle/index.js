import React, { Component } from 'react';
import './styls.css';

const list = [1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,77,7,7,7,7,7,7,7,7,7];

class Middle extends Component {
    render(){
        return (
        <div>
            <div className="title">
                <span>Request Body</span>
            </div>
            <div className="content">
                {this.renderRequestItem()}
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
                <li className="docTitle">
                    <span>content</span>
                </li>
            );
        })
    }
}


export default Middle;