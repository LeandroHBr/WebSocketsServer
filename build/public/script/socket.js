const socket = io();

const table_rows = document.getElementsByTagName("tr")

for(let i = 0; i < table_rows.length; i++){
    table_rows[i].addEventListener("click",()=>{
        let id = table_rows[i].cells[0].textContent
        console.log(id)
        socket.emit("room",id)
        
    })
}

let arr = {
reservatorio:[{
    teste:1
}]}

arr.reservatorio.forEach(a =>{
   console.log(a.teste)
})