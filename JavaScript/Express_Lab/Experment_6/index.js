const express = require('express')
const app = express()
const port = 3000

let login=false;
app.get('/Home', (req, res) => {
  res.send('Hello World!');
})



app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Student Dashboard</h1>
              <p>This is a simple Express app.</p>
              <a href="/AIML">Go to AIML Page</a>`);
})



app.use((req,res,next)=>{
    if(!login && req.path !== '/login'){
        return res.redirect('/login');
    }
    else{
        next();
    }
})

app.get('/login',(req,res)=>{
    res.send(`<input type="text" placeholder="Enter course">`);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})