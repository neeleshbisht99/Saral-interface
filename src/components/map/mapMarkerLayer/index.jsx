import React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import userResult from '../../../img/userResult.svg';
function MapMarkerLayer (props)
{
    const {markers} = props;
    console.log(markers);
    return (
          markers.map(marker => 
             <Marker key={marker._id} longitude={marker.lng} latitude={marker.lat}  >
                adsd
                 <img src={userResult}/>
             </Marker>                    
          )
    );
} 

export default MapMarkerLayer;