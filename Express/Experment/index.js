const express = require('express')
const app = express()
const port = 3000 // in company we write this in .env file and import it here but for now we are writing it here directly

function checkRoute(req,res,next){
  console.log(req.url)
  next()
}

app.use((req,res,next)=>{
  console.log('Data Received' , new Date())
  next()
});
app.get('/', (req, res) => { // This is the route handler for the root URL ('/') which is Home page of the website. It listens for GET requests and sends a response with the text 'Hello World!'.
  res.send('Hello World!')
})

app.get('/about', (req, res) => { // This is the route handler for the '/about' URL. It listens for GET requests and sends a response with the text 'This is the about page'.
  res.send('This is the about page')
})

app.get('/profile',(req,res)=>{
  res.send('This is your profile')
})

app.get('/card',(req,res)=>{
  res.send('This is your card')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



app.use(checkRoute)

