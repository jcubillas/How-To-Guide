const path = require("path")
const express = require("express")
const ServerProxy = require("./ServerProxy")
const findLogic = require("./FindLogic")
const app = express()
const MongoClient = require('mongodb').MongoClient;

const baseFolder = path.resolve(__dirname,'../../public')

app.use("/",express.static(baseFolder))

app.use(express.json())

/*app.get("/allRoutes",(req,resp)=>{
    ServerProxy.getAllBranches()
        .then( busStopsData => resp.json(busStopsData) )
})*/

app.post("/route",(req,resp) => {
    const routeData = req.body
    ServerProxy.getAllBranches()
        .then(busStopsData =>{
            busStopsData = busStopsData.reduce((rest,line)=>rest.concat(line),[])
                                       .reduce((rest,branch)=>rest.concat(branch),[])
            const route = findLogic.findRoute(busStopsData,routeData)
            resp.json(route) 
        })
        .catch( (err) => {
            console.error(err)
            resp.json({error :err.message})
        } )
})

app.listen(8085,()=>{
    console.log("Server UP!") 
})