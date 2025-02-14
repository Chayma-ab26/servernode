// $ npm init -y
// $ npm install http

//const http = require('http');

//const server = http.createServer((req, res ) => {
  //  res.writeHead(200, {'ContentType': 'text'} );
    //res.end ('Welcome to my first project');

//})

//const port = 5000
//server.listen(port, ()=>{
   // console.log('Server running ...');
//})
// $ node server.js

//const express = require('express');
const app=express()
app.use(express.json());
const todos =[{id :1,title:"hello"} ,{id:2, title:"test app"}];

app.post('/api/todos/create',(req,res)=>{
todos.push(req.body)
    res.send(todos)
})
app.put("/api/todos/update/:id",(req,res)=>{
const id =req.params.id;
if(todos.length === 0){
    res.send("the array is empty");
}else{
    todos.map((todo)=>{
        return todo.id ===Number (id )? { ...todo.id,...req,body}:todo
    }
)
res.send(todos)
}
});
 
app.delete("/api/todos/delete/:id",(req,res)=>{
    const id =Number (req.params.id)
    todos=todos.filter(todo=>todo.id !==id)
    res.send(todos)
})



app.get('/',(req,res)=>{
    res.send({message:"hello to my website"})
    res.json({message:"hello to my website"})
    res.end()
})

app.get('/file',(req,res)=>{
   res.sendFile(dirname+'/public/index.html')
})
app.listen(5000,()=>{
    console.log('server lestening on port 5000')
}) 
    