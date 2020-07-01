import React from 'react';
import ReactMapGL, { Marker, Source, Layer } from 'react-map-gl';
import userResult from '../../../img/userResult.svg';
import file from '../../../files/earthquakes.geojson';
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from './layers';
/*
  Lazy loading of markers not fullly build
*/
// function MapMarkerLayer(props) {
//   const { markers } = props;
//   console.log(markers);
//   return markers.map(marker => (
//     <Marker key={marker._id} longitude={marker.lng} latitude={marker.lat}>
//       {/* adsd */}
//       <img src={userResult} style={{ height: '10px', width: '10px' }} />
//     </Marker>
//   ));
// }

function MapMarkerLayer(props) {
  const { sourceRef } = props;
  return (
    <React.Fragment>
      <Source
        id="earthquakes"
        type="geojson"
        // data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
        data={file}
        cluster={true}
        clusterMaxZoom={16}
        clusterRadius={100}
        ref={sourceRef}>
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
    </React.Fragment>
  );
}

export default MapMarkerLayer;
