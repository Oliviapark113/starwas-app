const express = require('express')
const app = express()
const PORT = 3000

const characters = [
    {
    name: 'Yoda',
    role:'Jedi Master',
    forcePoints:100000,
    age:900,
    avatar:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*',
    routeName: 'yoda'


},

{
    name: 'Luke Skywalker',
    role:'Jedi Master',
    forcePoints:10000,
    age:40,
    avatar:'https://i.pinimg.com/736x/5e/cf/a3/5ecfa35cd13fc15227479b07a491e6b4.jpg',
    routeName: 'lukeskywalker'


},

{
    name: 'Princess Leia',
    role:'General princess',
    forcePoints:100,
    age:40,
    avatar:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F09%2F000239049hrhr1-2000.jpg&q=85',
    routeName: 'princessleia'


}

]

//Home route
app.get('/',(req, res)=>{
   res.send('May the force be with you!')
})


// api/characters - show all character data
app.get('/api/characters', (req,res)=>{
    res.json(characters)
})


// api/characters/:routeName(parameter..can be dynamic) - show all character data/  such as /api/characters/princessleia



app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})