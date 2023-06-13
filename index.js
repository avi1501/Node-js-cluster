const express = require("express")
const cluster = require('cluster')

const totalCPUs = require('os').cpus().length
const PORT = 5000

const fibObj = require("./math-logic/fibonacci")


if(cluster.isMaster){
    console.log(cluster.schedulingPolicy)
    cluster.schedulingPolicy = 2
    console.log(`Total Number of CPUs Count is ${totalCPUs}`)
    for(var i=0;i<totalCPUs;i++){
        cluster.fork();
    }
    cluster.on("online", (worker)=>{
        console.log(`Worker Id is ${worker.id} and the PID ${worker.process.pid} online`)
    })
    cluster.on("exit", (worker)=>{
        console.log(`Worker Id ${worker.id} with process ${worker.process.pid} stopped`)
        console.log("lets fork a new process")
        cluster.fork();
    })


}
else{
    const app = express()

    app.get('/', (req, res)=>{

        console.log(`Process picked by ${cluster.worker.id} with pid ${cluster.worker.process.pid}`)
        var number = Number.parseInt(req.query.number);
        var ans = fibObj.getFibonacciSeries(number)
        console.log(ans)
        res.send(`<h1>${ans}</h1>`)

    })

    app.listen(PORT, ()=>{
        console.log(`Server starts listening to port ${PORT}`)
    })


}