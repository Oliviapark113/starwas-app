const express = require('express')
const app = express()
const PORT = 3000

//Home route
app.get('/',(req, res)=>{
   res.send('May the force be with you!')
})

app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})