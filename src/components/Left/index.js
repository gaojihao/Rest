import React, { Component } from 'react';
import './left.css';

const list = [1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,77,7,7,7,7,7,7,7,7,7];

class Left extends Component {
    render(){
        return (
        <div>
            <div className="left_title">
                <span>文档列表</span>
            </div>
            <div className="repo">
                {this.renderRepoList()}
            </div>
        </div>
        );
    }

    renderRepoList= () => {
        const repos = list;
        if (!repos) {
            return null;
        }

        let that = this;

        return repos.map((item, index) => {
            return (
                <div>
                    <div className="repoTitle"><i>这个是仓库的名称</i></div>
                    {that.renderDocList(repos)}
                </div>
            );
        })
    }

    renderDocList= (list) => {
        const docs = list;
        if (!docs) {
            return null;
        }

        return docs.map((item, index) => {
            return (
                <li className="docTitle">
                    <i>iOS架构设计详解</i>
                </li>
            );
        })
    }

}


export default Left;