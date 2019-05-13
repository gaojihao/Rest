import { TabBar } from 'antd-mobile';
import React from 'react';
import Finish from './finish';
import Pending from './pending';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'pending',
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="待我审批"
            key="pending"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'pending'}
            onPress={() => {
              this.setState({
                selectedTab: 'pending',
              });
            }}
            data-seed="logId"
          >
            <Pending/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="我已审批"
            key="finish"
            selected={this.state.selectedTab === 'finish'}
            onPress={() => {
              this.setState({
                selectedTab: 'finish',
              });
            }}
            data-seed="logId1"
          >
            <Finish />
          </TabBar.Item>
          </TabBar>
      </div>
    );
  }
}