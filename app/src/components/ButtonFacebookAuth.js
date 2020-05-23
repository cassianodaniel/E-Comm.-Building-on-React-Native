//REGULAR REACT IMPORTS
import React, {useState} from 'react';

//REGULAR ANTD IMPORTS
import 'antd/dist/antd.css';

//MAINSTYLE IMPORT
import '../styles/mainstyle.css';

//ANTD COMPONENT IMPORTS
import { Button } from 'antd';

//FACEBOOK AUTH IMPORT
import Facebook from '../components/Facebook';


function FacebookAuthButton(){
    const [showFacebookBtn, setShowFacebookBtn] = useState(false);

    const abrirFB = e => {
        setShowFacebookBtn(true);
    };

    return(
        <div className="divapoiar">
            <div className ="botãoapoiar" type="primary">
                {showFacebookBtn ? (
                    <button style={{color: "black"}} 
                    onClick={() => setShowFacebookBtn(true)}>
                    <Facebook/>
                    </button>
                ) : (
                    <Button type="primary" style={{color: "white"}} 
                    onClick={abrirFB}>Abrir</Button>
                )}
            </div>
        </div>
    );
}

export default FacebookAuthButton;