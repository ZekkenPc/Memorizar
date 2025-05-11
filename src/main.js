import './style.css'

let tamaño = document.querySelector("#tamaño")
let time = document.querySelector("#time")
let numRandom=document.querySelector("#numRandom")
let numMostrar = document.querySelector("#numMostrar")

//Verifica si existe o no  
function exist(){

        let exist = document.getElementById("divJS")
     if(exist){
       document.body.removeChild(exist);
    }
}


//Crea los numeros randoms
function createNumber(tamaño){
  
  let listNumber=[]
        if(tamaño!=""){
        for(let i=0; i<tamaño; i++){
    listNumber.push(Math.floor(Math.random()*100))
        }
        return listNumber;
        }
        else{
                alert("No ingresaste el tamaño");
                return null;
        }
}


//Crea el div
function createDiv(numerosRandom){

        let divNum= document.createElement("div")
        divNum.innerText= numerosRandom;
        divNum.style.backgroundColor= "#002549"
        divNum.style.borderRadius="12px"
        divNum.style.padding="10px";
        divNum.style.justifySelf= "center";
        divNum.style.marginTop="40px";
        divNum.style.fontSize="1.6rem";
        divNum.id="divJS";
        document.body.appendChild(divNum);
}

//Aqui añadimos el evento que escuchara si hacen click en el boton generar numeros y que puede
numRandom.addEventListener("click", () =>{
  let tamañoLista = tamaño.value;
  exist();
  let numerosRandom=createNumber(tamañoLista);
  if(numerosRandom!=null){
  createDiv(numerosRandom);}
})


