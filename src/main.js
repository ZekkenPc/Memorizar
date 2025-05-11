import './style.css'

let tamaño = document.querySelector("#tamaño")
let time = document.querySelector("#time")
let numRandom=document.querySelector("#numRandom")
let numMostrar = document.querySelector("#numMostrar")

function createNumber(tamaño){
  
  let listNumber=[]
  for(let i=0; i<tamaño; i++){
    listNumber.push(Math.floor(Math.random()*100))
  }
 console.log(listNumber)
}



numRandom.addEventListener("click", () =>{
  let valorTamaño = tamaño.value;
  if(valorTamaño!=null){
    createNumber(valorTamaño)
  }
})

