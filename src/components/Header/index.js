import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render(){
        return (<div className="controller">
            <div className="method"><span>POST</span></div>
            <div className="host">
                <input 
                placeholder='请输入请求的host'
                className="input">
                </input>
            </div>
            <div className="url">
                <input
                placeholder='请输入请求的url'
                className="input">
                </input>
                </div>
            <div className="send"><span>发送</span></div>
        </div>);
    }
}


export default Header;