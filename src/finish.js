import {PullToRefresh,ListView} from 'antd-mobile';
import React from 'react';
import {getFinish} from './utils/request';
import Cell from './component/cell';
import Separator from './component/separator';

let array = [];


export default class Finish extends React.Component {
    constructor(props) {
      super(props);
      const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
  
      this.state = {
        dataSource,
        hasMore:true,
        err:null,
        refreshing: true,
        isLoading: true,
        height: document.documentElement.clientHeight,
      };
    }
  
    componentDidUpdate() {
        document.body.style.overflow = 'hidden';
    }
  
    componentDidMount() {
      this.onRefresh();
    }
  
    onRefresh = () => {
      this.setState({ refreshing: true, isLoading: true,hasMore:true });
      array = [];
      this.getFinish();
    };

    getFinish = () => {
        
        getFinish('CD930490950CAFCA0B4AAC57FB1E6D2EB3D5E5694CF1E0C087FC9624EF500B6C11ED2B70672DF1CDFC2D299A49F5CB04',array.length).then(reslove => {
            array = array.concat(reslove.list);
          this.setState({
              hasMore:reslove.hasMore,
              dataSource: this.state.dataSource.cloneWithRows(array),
              refreshing: false,
              isLoading: false,
            });
        },rejected => {
          this.setState({err:rejected || '后台返回异常'})
        });
    }
  
    onEndReached = (event) => {
        
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }

      this.setState({ isLoading: true });

      this.getFinish();
    };
  
    render() {
      return (<div>
        <ListView
          key='1'
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={(rowData, _, rowID) => <Cell key={rowID} rowData={rowData}/>}
          renderSeparator={(sectionID, rowID) => <Separator key={`${sectionID}-${rowID}`}/>}
          style={{
            height: this.state.height,
            margin: '0',
          }}
          pullToRefresh={<PullToRefresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />}
          onEndReached={this.onEndReached}
          pageSize={10}
        />
      </div>);
    }
  }