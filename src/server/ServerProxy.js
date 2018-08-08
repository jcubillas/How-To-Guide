const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;

/*const url = "http://localhost:8000/routes";

module.exports = function () {
    return fetch(url).then(resp => resp.json())
}*/

function getEachUrl(){
    return new Promise((fulfill,reject) => {

        const url = 'mongodb://localhost:27017';

        MongoClient.connect(url, function(err, client) { 
            console.log("Connected!");
            const db = client.db('how-to-guide');
            const lines = db.collection("lines");

            lines.find().toArray( function(err, items) {
                if(err){
                    reject(err)
                }else{
                    fulfill(items);
                    console.log("GETREACHURL");
                    console.log(items);
                }
            })
                                                    
            client.close();
        })
    })
}

module.exports.getAllBranches = function(){
   return getEachUrl()
        .then( lines => {
            console.log("getAllBranches");
            console.log(lines);
            const data = lines.map(line => 
                fetch(line.url)
                    .then(r=>r.json())
                    .then(r=>r.map(branches => (branches.stops.forEach((stop)=>{stop.branch_name = branches.name, 
                        stop.line = line.name, stop.branch_id = line.number + " - Ramal " + stop.branch_id }), {...branches})))
            )
            return Promise.all(data)
        })
}

