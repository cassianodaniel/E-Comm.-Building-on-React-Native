//REGULAR REACT IMPORTS
import React from 'react';

//REGULAR ANTD IMPORTS
import 'antd/dist/antd.css';

//MAINSTYLE IMPORT
import '../styles/mainstyle.css';

//ANTD COMPONENT IMPORTS
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function TabsComponent(){
return(
<div className = "container">
    <Tabs defaultActiveKey="home">
    <TabPane tab="Home" key="home">
        QUERO QUE O CONTEÚDO DA MINHA HOME SEJA ESTE
    </TabPane>
    <TabPane tab="Registro" key="signup">
        RegistroContent
    </TabPane>
    <TabPane tab="Loja Virtual" key="shop">
        RegistroContent
    </TabPane>
    <TabPane tab="Contato" key="contact">
        RegistroContent
    </TabPane>
    </Tabs>
</div>
);
}

export default TabsComponent;