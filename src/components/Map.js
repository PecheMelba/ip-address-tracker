import { useEffect, useState } from "react";

import L from 'leaflet';
import markerLogo from '../icon-location.svg'
import 'leaflet/dist/leaflet.css';

const Map = (props)=>
{
    useEffect(() => 
    {
        if(props.ip_informations.data)
        {
            console.log(props.ip_informations);

            let current_lat = props.ip_informations.data.location.lat;
            let current_long = props.ip_informations.data.location.lng;
            let current_zoom = 13;
            let center_lat = current_lat;
            let center_long = current_long;
            let center_zoom = current_zoom;

            // The <div id="map"> must be added to the dom before calling L.map('map')
            var container = L.DomUtil.get('map');
            if(container != null)
            {
                container._leaflet_id = null;
            }
            let customIcon = L.icon(
                {
                    iconUrl: markerLogo,//https://cdn-icons-png.flaticon.com/512/3658/3658773.png
                    iconSize:[25, 45],
                    iconAnchor:[12.5,0]
                });

            let map = L.map("map", {center: [center_lat, center_long],zoom: center_zoom,});
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
            L.marker([current_lat, current_long], {icon:customIcon}).addTo(map);
            console.log(map);
        }
    }, [props.ip_informations]);

    return(
        <div id ="map"></div>
    );
}
export default Map;