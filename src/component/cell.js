import React from 'react';

export default class Cell extends React.Component{

    render(){
        return (<div
            style={{
              padding: '0 15px',
              backgroundColor: 'white',
            }}
          >
            <div style={{ display: 'flex', padding: '15px' }}>
              <img style={{ height: '40px', width: '40px', marginRight: '15px' }} src={this.props.rowData.thumbUrl} alt="" />
              <div style={{ display: 'inline-block' }}>
                <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{this.props.rowData.title}</div>
                <div>
                    <img style={{ height: '12px', width: '12px',marginRight: '8px'}} src={this.props.rowData.thumbUrl} alt="" />
                    <span style={{ fontSize: '12px', color: '#999999'}}>{this.props.rowData.createTime}</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
}