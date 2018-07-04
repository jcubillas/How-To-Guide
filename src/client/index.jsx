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


  findRoute(routeData){
    // console.log(routeData)
    fetch("/route",{
      method : "POST",
      headers : {
        "content-type":"application/json"
      },
      body : JSON.stringify(routeData)
    }).then(resp => resp.json())
      .then( route => this.setState({route}))
      .then(this.generateMap)
      .catch(alert)
  }

  generateMap() {
    const points = this.state.route;
    console.log("points");
    console.log(points);
    points.map( s => ({lat:s.latitude,lng:s.longitude, number: s.number, name: s.name, branch_id: s.branch_id, id: s.id}));

    const waypoints =  points.slice(1, -1).map( p => ({ location : p , stopover : false}))

    let request = {
      origin: points[0],
      destination: points[points.length - 1],
      waypoints: waypoints,
      optimizeWaypoints: true,   
      travelMode: 'DRIVING'
    };

    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
          routesDisplays[branch.id].setMap(map);
          routesDisplays[branch.id].setDirections(result);
          routesDisplays[branch.id].setOptions({
              suppressMarkers: false,
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