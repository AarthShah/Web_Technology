// handing Response and Request in Express JS
 // express application Handling means http request handling
// request (req) contains information about the client request eg URL,Headers,query parameters,request body etc;
app.get ('/',(req,res)=>{
    console.log(req.query.name) // very import to understand query parameters
})
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
