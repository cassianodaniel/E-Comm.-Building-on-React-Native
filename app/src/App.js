//REGULAR REACT IMPORTS
import React from 'react';

//CSS IMPORT
import '../src/App.css';

//ANTD IMPORTS
import 'antd/dist/antd.css';
import TabsComponent from './components/Tabs';

import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;

function App() {
  return (
    <div class="main">
      <div class = "divBlock">
          <header>
              <TabsComponent></TabsComponent>
          </header>
          <aside>
              <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Whey">
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="BCAA">
                <Menu.Item key="4">option4</Menu.Item>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Creatina">
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
                <Menu.Item key="9">option9</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          </aside>
      </div>
    </div>
  );
}

export default App;
