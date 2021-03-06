import React, {useState} from 'react'
import ReactMapGL from "react-map-gl"

function App() {
  const[viewport, setViewport] = useState({latitude:45, longitude: -75, zoom:10, width:"100vw",height:"100vh" })
  return (
    
    <ReactMapGL 
      {...viewport} 
      apiToken={process.env.REACT_APP_MAPBOX_TOKEN}>
      
    </ReactMapGL>
    
  );
}

export default App;
