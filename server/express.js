var express = require('express')
var cors =require('cors')
var app = express();

let blogs = {results:[]}

app.use(express.json())
app.use(cors())
// all app methods for only the end point '/'
app.all('/',(req,res,next)=>{
    res.send('hello from the main route')
    next()
})
app.get('/api/blogs', (req,res)=>{
    res.json(blogs)
})
app.post('/api/blogs', (req,res)=>{
 blogs.results.push(req.body)
 res.status(201).json(blogs)
})

app.delete('/api/blogs/:username', (req,res)=>{
   blogs.results=blogs.results.filter(e=>e.username!==req.params.username)


   res.json(blogs)

   })
// using params
  app.get('/api/blogs/:query', (req,res)=> {
   console.log(req.params)
var search=blogs.results.filter(e=>e.username===req.params.query || e.id===req.params.query)
     
    res.json(search)
 
    })
  
app.listen(3000, ()=>{
    console.log("express server is listenning in the port 3000 ")
});

