import React, { useEffect, useState } from "react";
import L from 'leaflet';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Pane,
  Rectangle
} from 'react-leaflet';
import parkData from "./locations.json";
import './GameMap.css';
function GameMap() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [isZombieVisible, setZVisible] = useState();
  const [isHumanVisible, setHVisible] = useState(false);

  const header = new Headers({ "Access-Control-Allow-Origin": "*" });

const outer = [
  [57.60000,12.100000],
  [57.78870,11.70000],
]
var graveIcon = L.icon({
  iconUrl: './gravesite.png',
  iconSize: [30, 30]
})

var missionIcon = L.icon({
  iconUrl: './missionM1.png',
  iconSize: [30, 30]
})

const positionMark = [57.70716, 11.96679];
useEffect(() => {
  fetch('https://humanvszombies.azurewebsites.net/api/v1/missions')
  .then((response) => response.json())
  .then((data) => {
    setIsLoaded(true);
    setError(error);
     setData(data);
   })
   .catch((err) => {
    console.log(err);
   })
 },[])
//  {data.map((p) => (
//   (() => {
//     if(p.isHumanVisible){
//       isHumanVisible == true;
//     }
//   })))}

return(
<MapContainer center={[57.70716, 11.96679]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker 
          position={[positionMark[0], positionMark[1]]} icon ={graveIcon}
        >
           <Pane name="rectangle">
        <Rectangle bounds={outer} pathOptions={{ color: 'blue' }} />
      </Pane>
      {data.map(p => ( 
        <Popup>
             This is a grave stone.
             <br></br>
             Information
             <div >
             <p key={p.missionId}>{p.missionName}</p>
              </div>
             </Popup>
               ))}
      </Marker>
{parkData.features.map(park => (
        <Marker 
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]} icon ={missionIcon}
        >
        <Popup >
            This is a mission.
            <br></br>
            Information
            <div>{park.properties.ADDRESS}</div>
            <div>{park.properties.DESCRIPTIO}</div>
             </Popup>
      </Marker>
      ))}
</MapContainer>

  );
}
export default GameMap;
