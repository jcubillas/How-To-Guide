import React from 'react';
import {render} from 'react-dom';
import Map from './Map';
import RouterForm from './RouteForm';
import Result from './Result';
import NavBarReact from './navbar.jsx'

class App extends React.Component{

  constructor(props){
    super(props)
    this.findRoute = this.findRoute.bind(this)
    this.generateMap = this.generateMap.bind(this)
    this.state = { route : {} }
  }

  toLatLng(address){
    return fetch("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDwpxOB_1gTbUHGwkyQ6XdCRXZG6hX3t94&address=" + address)
      .then( r => r.json() )
      .then(msg => ({
        lat : msg.results[0].geometry.location.lat,
        lng : msg.results[0].geometry.location.lng
      }))
  }

  findRoute(routeData){
    const fromP = this.toLatLng(routeData.from.address)
    const toP = this.toLatLng(routeData.to.address)
    
    Promise.all([fromP,toP])
      .then( ([from,to]) => {
        fetch("/route",{
            method : "POST",
            headers : {
              "content-type":"application/json"
            },
            body : JSON.stringify({from,to})
          }).then(resp => resp.json())
            .then(resp => {
                if(resp.error) {
                  throw new Error (resp.error)
                } else return resp  
            })
            .then( route => this.setState({route}))
            .then(this.generateMap)
            .catch(alert)
      })
    
  }

  generateMap() {
    const points = this.state.route;
    console.log("POINTS");
    console.log(points)
    const gPoints = points.map( s => ({lat:parseFloat(s.latitude),lng:parseFloat(s.longitude), number: s.number, name: s.name, branch_id: s.branch_id, id: s.id}));

    const waypoints =  gPoints.slice(1, -1).map( p => ({ location : p , stopover : false}))

    let request = {
      origin: gPoints[0],
      destination: gPoints[gPoints.length - 1],
      waypoints: waypoints,
      optimizeWaypoints: true,   
      travelMode: 'DRIVING'
    };

    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
          directionsDisplay.setDirections(result);
          directionsDisplay.setOptions({
              suppressMarkers: true,
              polylineOptions : {
                  visible: true
              }
          })
      } else {
          console.error(response);
      }
  })     

  }

  render(){
    return ( 
      <div>
        <NavBarReact/>
        <RouterForm onFind={this.findRoute}/>
        <Result route={this.state.route} />
      </div>
    )
  }

}

render(<App/>, document.getElementById('app'));

// Mapa de google maps
var directionsDisplay = new google.maps.DirectionsRenderer({ 
      polylineOptions: {strokeColor:"#4a4a4a",strokeWeight:5}, 
      suppressMarkers: false });
var directionsService = new google.maps.DirectionsService;
let routesDisplays = [];

var bsas = {lat: -34.6037, lng: -58.3816};

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: bsas
})
directionsDisplay.setMap(map);

fetch("/allRoutes")
  .then(resp => resp.json())
  .then(console.log)
  .catch(console.error)