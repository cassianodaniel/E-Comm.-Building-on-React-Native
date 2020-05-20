//REGULAR REACT IMPORTS
import React from 'react';

//REGULAR ANTD IMPORTS
import 'antd/dist/antd.css';

//MAINSTYLE IMPORT
import '../styles/mainstyle.css';

//ANTD COMPONENT IMPORTS
import { Button } from 'antd';

function FacebookAuthButton(){
    return(
        <div className="divapoiar">
            <Button className ="botãoapoiar" type="primary">
                <h1>Apoiar!</h1>
            </Button>
        </div>
    );
}

export default FacebookAuthButton;