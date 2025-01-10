const socket = io("http://localhost:3000/");


socket.on("message",(mensage)=>{
    console.log(mensage)
})