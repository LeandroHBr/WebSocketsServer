const socket = io();


socket.on("message",(mensage)=>{
    console.log(mensage)
})