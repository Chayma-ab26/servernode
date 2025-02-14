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
    /*const express = require('express');
    const app = express();
    const path = require("path");
    
    app.use(express.json());
    
    let todos = [{ id: 1, title: "hello" }, { id: 2, title: "test app" }];
    
    // Créer une nouvelle tâche
    app.post('/api/todos/create', (req, res) => {
        const newTodo = { id: todos.length + 1, ...req.body };
        todos.push(newTodo);
        res.json(todos);
    });
    
    // Mettre à jour une tâche
    app.put("/api/todos/update/:id", (req, res) => {
        const id = Number(req.params.id);
        if (todos.length === 0) {
            return res.status(400).send("The array is empty");
        }
    
        let updated = false;
        todos.forEach((todo, index) => {
            if (todo.id === id) {
                todos[index] = { ...todo, ...req.body };
                updated = true;
            }
        });
    
        if (!updated) {
            return res.status(404).send({ error: "Todo not found" });
        }
    
        res.json(todos);
    });
    
    // Supprimer une tâche
    app.delete("/api/todos/delete/:id", (req, res) => {
        const id = Number(req.params.id);
        const index = todos.findIndex(todo => todo.id === id);
    
        if (index === -1) {
            return res.status(404).send({ error: "Todo not found" });
        }
    
        todos.splice(index, 1);
        res.json(todos);
    });
    
    // Page d'accueil
    app.get('/', (req, res) => {
        res.json({ message: "Hello to my website" });
    });
    
    // Servir un fichier HTML
    app.get('/file', (req, res) => {
        res.sendFile(path.join(__dirname, "public", "index.html"));
    });
    
    // Démarrer le serveur
    app.listen(5000, () => {
        console.log('Server listening on port 5000');
    });
    */