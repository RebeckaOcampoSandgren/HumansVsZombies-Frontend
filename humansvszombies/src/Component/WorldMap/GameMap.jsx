import React, { useEffect, useState } from "react";
import L from "leaflet";
import mission from "./missions.json";
import "./GameMap.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Pane,
  Rectangle,
} from "react-leaflet";

const apiUrl = process.env.REACT_APP_API_URL;

function GameMap() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [missionData, setData] = useState([]);

  //Game outer blue mark coord
  const outer = [
    [57.6, 12.1],
    [57.7887, 11.7],
  ];

  var graveIcon = L.icon({
    iconUrl: "./gravesite.png",
    iconSize: [30, 30],
  });

  var missionIcon = L.icon({
    iconUrl: "./missionM1.png",
    iconSize: [30, 30],
  });

  //Default position of the map location
  const positionMark = [57.70716, 11.96679];

  //Gets missions
  useEffect(() => {
    fetch(`${apiUrl}/missions`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true);
        setError(error);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
  return (
    <MapContainer
      center={[57.70716, 11.96679]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[positionMark[0], positionMark[1]]} icon={graveIcon}>
        <Pane name="rectangle">
          <Rectangle bounds={outer} pathOptions={{ color: "black" }} />
        </Pane>
        {missionData.map((p) => (
          <Popup>
            This is a grave stone.
            <br></br>
            Information
            <div>
              <p key={p.missionId}>{p.missionName}</p>
            </div>
          </Popup>
        ))}
      </Marker>
      {mission.features.map((mission) => (
        <Marker
          position={[
            mission.geometry.coordinates[0],
            mission.geometry.coordinates[1],
          ]}
          icon={missionIcon}
        >
          {missionData.map((m) => (
            <Popup>
              This is a mission.
              <br></br>
              <br></br>
              <div>Description: {m.description}</div>
            </Popup>
          ))}
        </Marker>
      ))}
    </MapContainer>
  );
}}

export default GameMap;
