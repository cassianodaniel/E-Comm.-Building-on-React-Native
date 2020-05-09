//REGULAR REACT IMPORTS
import React from 'react';

//REGULAR ANTD IMPORTS
import 'antd/dist/antd.css';

//MAINSTYLE IMPORT
import '../styles/mainstyle.css';

//ANTD COMPONENT IMPORTS
import {
    WhatsAppOutlined
  } from '@ant-design/icons';

function ComponentWhatsapp(){
    return(
        <div class = "Whatsapp">
            <WhatsAppOutlined/>
        </div>
    );
}

export default ComponentWhatsapp;