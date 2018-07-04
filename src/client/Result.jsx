import React from 'react'

// borra todas las paradas intermedias
function beautifyRoute( points ){
    console.log(points)
    return points.reduce( (route,point)=> {
        const resp = route.concat(point)
        
        if(resp.length < 3){
            return resp
        }

        if( resp[resp.length - 2].branch_id === resp[resp.length - 1].branch_id &&
            resp[resp.length - 3].branch_id === resp[resp.length - 2].branch_id ){
            resp.splice( resp.length - 2 , 1 )
            return resp
        }
        return resp

    } ,[])
}


export default function Result (props){
    if(! props.route || !props.route.length)
        return null 
    const route = beautifyRoute(props.route)
    console.log("route");
    console.log(route);
    let lastPoint = "";
    let action = "";
    let label = "";
    let classNameAction = "";
    let classNameLabel = "";
    const lis = route.map( (point,i)  =>{
        if(lastPoint == ""){
            action = "Caminar hasta " + point.name + ".";
            label = "Tomar ahi mismo el colectivo del ramal #" + point.branch_id + ".";
            classNameAction = "fas fa-walking";
            classNameLabel = "fas fa-bus";
        }
        else {
            if(lastPoint.branch_id != point.branch_id) {
                action = "Bajarse en " + point.name + ".";
                if(i == route.length - 1) {
                    label = "Caminar hacia destino.";
                    classNameLabel = "fas fa-walking";
                }
                else {
                    label = "Tomar ahi mismo el colectivo del ramal #" + point.branch_id + ".";
                    classNameLabel = "fas fa-bus";
                }
                    
                classNameAction = "fas fa-sort-down";
                
            }
            else {
                action = "Bajarse en " + point.name + ".";
                label = "Caminar hacia destino.";
                classNameAction = "fas fa-sort-down";
                classNameLabel = "fas fa-walking";
            }

        }

        lastPoint = point;
        return <li key={i}><i className={classNameAction}></i>  {action}<br/><i className={classNameLabel}></i>  {label}</li>
    })
    return <ul>{lis}</ul>
}