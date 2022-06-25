import {get_ip_location} from '../apis/get_ip_location';

import React, { useState, useEffect } from 'react';

const Ip_ui = (props)=>
{
    const [ipRequestAns, setIpRequestAns] = useState({});
    const [currentInput, setCurrentInput] = useState('');

    useEffect(() => 
    {
        get_ip_location(setIpRequestAns,"");
    }, []);

    useEffect(() => 
    {
        props.sendIpInfos(ipRequestAns);
    }, [ipRequestAns]);
    
    function  request_handler()
    {
        get_ip_location(setIpRequestAns,currentInput);
    }

    //event handlers
    const onInputChange = (e) =>
    {
        setCurrentInput(e.target.value);
    };

    function render()
    {        
        if(ipRequestAns.data)
        {
            console.log("yooo");
            return(
            <div id="ip-infos">
                <div className='category'>
                    <div className="category-title">IP ADDRESS</div>
                    <div className="category-content">{ipRequestAns.data.ip}</div>
                </div>
                <hr/>
                <div className='category'>
                    <div className="category-title">LOCATION</div>
                    <div className="category-content">{ipRequestAns.data.location.country}, {ipRequestAns.data.location.city}, {ipRequestAns.data.location.postalCode}</div>
                </div>
                <hr/>
                <div className='category'>
                    <div className="category-title">TIMEZONE</div>
                    <div className="category-content">{ipRequestAns.data.location.timezone}</div>
                </div>
                <hr/>
                <div className='category'>
                    <div className="category-title">ISP</div>
                    <div className="category-content">{ipRequestAns.data.isp}</div>
                </div>
            </div>);
        }
    }

    return(
        <div id ="ip-ui">
            <h1>IP Address Tracker</h1>
            <div id="input-ip">
                <input value={currentInput} onChange={onInputChange} type="text" placeholder="please write here..."/>
                <div id="input-btn" onClick={()=>request_handler()}/>         
            </div>
            {render()}
        </div>
    );
}
export default Ip_ui;