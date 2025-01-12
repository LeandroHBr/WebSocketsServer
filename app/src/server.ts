import express from 'express';
import { Server } from 'socket.io';
import path from 'path';
import { Socket } from 'dgram';
import router from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();
app.use(cors({
  origin: "*", 
  methods: "*",
  allowedHeaders: "*"
  
}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
const http = require('http');
const server = http.createServer(app);

const io = new Server(server,{connectionStateRecovery: {},  cors: {
  origin: '*',
}
});

let messages = []; // Array to store messages




//////////////////

interface user_data {
  id:string,
  user:string,
  reservatorio:string
}

const users:user_data[] = []


server.listen(443,()=>{
  console.log('connectado')
})

io.emit("teste","teste")

io.on('connection', (client) => {
console.log('seja bem vindo')
  client.emit('message',"oi")

  client.on("disconnection",()=>{
    io.emit("hello", "world");
    console.log("aaaaa");
  })
})
  