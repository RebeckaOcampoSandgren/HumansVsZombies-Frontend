import React from "react";
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

const outer = [
  [36.9072,-79.0369],
  [39.9072,-74.0369],
]

const outerTwo = [
  [36.9072,-79.0369],
  [39.9072,-74.0369],
]

var graveIcon = L.icon({
  iconUrl: './gravesite.png',
  iconSize: [50, 50]
})

var missionIcon = L.icon({
  iconUrl: './missionM1.png',
  iconSize: [50, 50]
})

const positionMark = [38.9072,-77.0369];

function GameMap() {

  return (

    
    <MapContainer center={[38.9072, -77.0369]} zoom={13} scrollWheelZoom={false}>
   <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

        <Marker 
          position={[positionMark[0], positionMark[1]]} icon ={graveIcon}
        >
           <Pane name="purple-rectangle">
        <Rectangle bounds={outer} pathOptions={{ color: 'black' }} />
      </Pane>
        <Popup >
             This is a grave stone.
             <br></br>
             Information
             </Popup>
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
             </Popup>
      </Marker>
      ))}
</MapContainer>
  );
}

export default GameMap;
