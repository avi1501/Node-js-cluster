const express = require("express")
const cluster = require('cluster')



const PORT = 5000
const fibObj = require("./math-logic/fibonacci")

const app = express()

 
app.get('/', (req, res)=>{
    console.log(`Process picked by  with pid ${process.pid}`)
    var number = Number.parseInt(req.query.number);
    var ans = fibObj.getFibonacciSeries(number)
    console.log(ans)
    res.send(`<h1>${ans}</h1>`)

})

app.listen(PORT, ()=>{
    console.log(`Server starts listening to port ${PORT}`)
})

