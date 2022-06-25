import logo from './logo.svg';
import './styles/style-mobile.css';

import Ip_ui from './components/Ip_ui';
import Map from './components/Map';

import React, { useState, useEffect } from 'react';


function App() 
{
  const [ipInfos, SetIpInfos] = useState({});

  function update_ip_infos(_infos)
  {
    SetIpInfos(_infos);
    console.log(_infos);
  }

  return (
    <div className="App">
      <Ip_ui sendIpInfos = {update_ip_infos} />      
      <Map ip_informations = {ipInfos}/>
    </div>    
  );
}

export default App;
