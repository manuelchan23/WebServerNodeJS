const express = require('express')
const app = express()
 
//servir contenido estatico

app.set('view engine', 'hbs');

app.use(express.static("public"))

app.get('/',  (req, res) => {
  res.render("home", {
    nombre : 'Manuel Chan',
    titulo : 'Curso NodeJS'
  })
})

app.get('/generic',  (req, res) => {
  res.sendFile(__dirname + "/public/generic.html")
})
 
app.get('/elements',  (req, res) => {
  res.sendFile(__dirname + "/public/elements.html")
})
app.get('*',  (req, res) => {
  res.send("Page no found")
})
app.listen(8080)