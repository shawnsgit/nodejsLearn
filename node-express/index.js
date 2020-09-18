const express = require('express')
const http = require('http');
const hostname = 'localhost';
const port = 3000;
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
});
app.get('/dishes',(req,res,next)=>{
    res.end('Send data to you');
});
app.post('/dishes',(req,res,next)=>{
    res.end('Add new data: ' + req.body.name + 
    'with details: '+ req.body.description);
});
app.put('/dishes',(req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported');
});
app.delete('/dishes',(req,res,next)=>{
    res.end('Delete all data');
});

app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Send data details to you: '+ req.params.dishId);
});
app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});
app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating the dish: '+res.params.dishId+'/n');
    res.end('Update dish: '+req.body.name + 
    'with detail: '+ req.body.description);
});
app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('Delete dish: '+req.params.dishId);
});

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})