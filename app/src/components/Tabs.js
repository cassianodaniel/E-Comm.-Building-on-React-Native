//REGULAR REACT IMPORTS
import React from 'react';

//REGULAR ANTD IMPORTS
import 'antd/dist/antd.css';

//MAINSTYLE IMPORT
import '../styles/mainstyle.css';

//ANTD COMPONENT IMPORTS
import { Tabs } from 'antd';
import ComponentButton from './Button';
const { TabPane } = Tabs;


function TabsComponent(){
return(
<div class = "container">
    <Tabs defaultActiveKey="home">
    <TabPane tab="Home" key="home">

    </TabPane>
    <TabPane class = "signup" tab="Registro" key="signup">
        <div class = "SignUp">
            <strong>Cadastrar</strong>
            <form>

            <div className="input-block">
                <label htmlFor="usuario">Usuário</label>
                <input name="usuario"
                id = "usuario"
                >
                </input>
            </div>

            <div className="input-block">
                <label htmlFor="Senha">Senha</label>
                <input name="senha"
                id = "senha"
                ></input>
            </div>

            <ComponentButton></ComponentButton>
            </form>
        </div>
    </TabPane>
    <TabPane tab="Loja Virtual" key="shop">
        RegistroContent
    </TabPane>
    </Tabs>
</div>
);
}

export default TabsComponent;