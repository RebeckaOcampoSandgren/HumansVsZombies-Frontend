// import React, { useEffect, useState } from "react";
// import L from 'leaflet';
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   Pane,
//   Rectangle
// } from 'react-leaflet';
// import parkData from "./locations.json";
// import './GameMap.css';
// import { createMission } from '../../api/missions'

// function CreateMission() {

//     const [positionMark, setPosition] = useState();

//     var graveIcon = L.icon({
//         iconUrl: './gravesite.png',
//         iconSize: [30, 30]
//       })
      
//       var missionIcon = L.icon({
//         iconUrl: './missionM1.png',
//         iconSize: [30, 30]
//       })

// const handleMissionClicked = async (mission) => {

//     const [error, result] = await createMission(mission)

//     {result}
//     positionMark()
//     console.log('Error', error);
//     console.log('Result', result);
// } 
// return(
//     <>
//         <Marker 
//           position={[
//           ]} icon ={missionIcon}
//         >
//         <Popup >
//             This is a mission.
//             <br></br>
//             Information
//             <div>{}</div>
//             <div>{}</div>
//              </Popup>
//       </Marker>
// )
//     </>
//     )}
// export default CreateMission;