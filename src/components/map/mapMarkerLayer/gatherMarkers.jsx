import axios from "axios";

const SIGNED_URL= "http://localhost:4000/api/mapMarkers";

export async function gatherMarkers(_ne,_sw,callback)
{
   axios.get(SIGNED_URL,{
       params : {
        topNorthEast:{
            latitude:_ne.lat,
            longitude:_ne.lng
        },
        bottomSouthWest:{
            latitude:_sw.lat,
            longitude:_sw.lng
        }
     }})
   .then(function(res) { 
    callback(res.data);
   })
   .catch(err => {
      console.log(err);
   })

}