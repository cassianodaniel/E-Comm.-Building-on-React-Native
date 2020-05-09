//REGULAR REACT IMPORTS
import React from 'react';

//REGULAR ANTD IMPORTS
import 'antd/dist/antd.css';

//MAINSTYLE IMPORT
import '../styles/mainstyle.css';

//ANTD COMPONENT IMPORTS
import { Button } from 'antd';

function ComponentButton(){
    return(
        <div className = "BUTTON">
    <Button type="primary">Cadastrar</Button>
        </div>
    );
}

export default ComponentButton;