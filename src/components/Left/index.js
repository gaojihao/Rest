import React, { Component } from 'react';
import './styls.css';

const list = [1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,77,7,7,7,7,7,7,7,7,7];

class Left extends Component {
    render(){
        return (
        <div>
            <div className="title">
                <span>文档列表</span>
            </div>
            <div className="content">
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
                    <div className="repoTitle"><span>title</span></div>
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
                    <span>content</span>
                </li>
            );
        })
    }

}


export default Left;