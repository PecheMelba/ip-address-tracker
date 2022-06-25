//key: at_LVDf3lucJoLUG0SVO2mrtZkg1q7Kl
//https://geo.ipify.org/api/v2/country,city?apiKey=at_LVDf3lucJoLUG0SVO2mrtZkg1q7Kl&ipAddress=8.8.8.8

const axios = require('axios'); 

export async function get_ip_location(method, current_ip) 
{
    try 
    {
        const response = await axios.get("https://geo.ipify.org/api/v1", 
        {
            params: 
            {                            
                apiKey: "at_LVDf3lucJoLUG0SVO2mrtZkg1q7Kl",
                ipAddress: ""+ current_ip,
            }
        })
        console.log(response);
        method(response);
    } 
    catch (error) 
    {
        console.error(error);
        return error;
    }
    // setTimeout(function() 
    // {
    //     method(temp);
    // }, 1000);
}

let temp = {
    "data": {
        "ip": "8.8.8.8",
        "location": {
            "country": "US",
            "region": "California",
            "city": "Mountain View",
            "lat": 37.38605,
            "lng": -122.08385,
            "postalCode": "94035",
            "timezone": "-07:00",
            "geonameId": 5375480
        },
        "domains": [
            "000000000000000000000000000000000.xyz",
            "000180.top",
            "000xs.net",
            "00154021-836e-4c82-9fb4-fb4abf951347.pong.s.elliq.co",
            "001cdaee-0a08-4779-987f-b6b612361079.pong.s.elliq.co"
        ],
        "as": {
            "asn": 15169,
            "name": "GOOGLE",
            "route": "8.8.8.0/24",
            "domain": "https://about.google/intl/en/",
            "type": "Content"
        },
        "isp": "Google LLC",
        "proxy": {
            "proxy": false,
            "vpn": false,
            "tor": false
        }
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "cache-control": "no-cache, private",
        "content-type": "application/json"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {
            "FormData": null
        },
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "params": {
            "apiKey": "at_LVDf3lucJoLUG0SVO2mrtZkg1q7Kl",
            "ipAddress": "8.8.8.8"
        },
        "method": "get",
        "url": "https://geo.ipify.org/api/v1"
    },
    "request": {}
};
