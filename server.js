const path = require('path')

const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())


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

//HTML Routes










//Home route
app.get('/',(req, res)=>{
   
//    res.send('May the force be with you!')
   res.sendFile(path.join( __dirname +'./public/index.html'))
})
app.get('/add',(req, res)=>{
    res.sendFile(path.join( __dirname +'./public/add.html'))
})

// api/characters - show all character data
app.get('/api/characters', (req,res)=>{
    res.json(characters)
})


// api/characters/:routeName/:more /:more(parameter..can be dynamic) - show all character data/  such as /api/characters/princessleia
app.get('/api/characters/:routeName', (req,res)=>{
  const targetCharacter = req.params.routeName
    //to view console.log (enter in browser route and see terminal)

   const character =  characters.find( (character)=>{
       //console.log(character)...
        return character.routeName === targetCharacter
   })

   res.json(character)

})


//add new characters 
app.post('/api/characters/add',(req, res)=>{
    // console.log(req.body)
    const newCharacter = req.body

    newCharacter.routeName = newCharacter.name.replace(/ /g, '').toLowerCase()
    characters.push(newCharacter)
    // console.log(characters)
    res.status(200).send()

})


app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})