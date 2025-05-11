import './style.css'

let tamaño = document.querySelector("#tamaño")
let time = document.querySelector("#time")
let numRandom=document.querySelector("#numRandom")
let numMostrar = document.querySelector("#numMostrar")

//Verifica si existe o no  y borra el elemento si existe o no
function exist(){

        let exist = document.getElementById("divJS")
        let result=false
        if(exist){
                result=true
        }
        return result
     }

//Eliminar el elemento si existe
function deleteDiv(){
      if(exist()){
        let exist = document.getElementById("divJS")
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



//Crea el div con los numeros
function createDiv(numerosRandom){

        let divNum= document.createElement("div")
        divNum.innerText= numerosRandom.join("  ");
        divNum.style.backgroundColor= "antiquewhite"
        divNum.style.borderRadius="12px"
        divNum.style.padding="20px";
        divNum.style.justifySelf= "center";
        divNum.style.marginTop="40px";
        divNum.style.fontSize="2rem";
        divNum.id="divJS";
        divNum.style.color="black";
        document.body.appendChild(divNum);
}

//Muestra  unos segundos los numeros y despues desaparecen
function timeShow(time){
                  if(time!=null ){
                time=time*1000;
                time.toString(); //Con este metodo de js convertimos time de number a string
                setTimeout(()=>{

                let numDiv = document.getElementById("divJS")
                numDiv.style.display="none"
                },time)
        }
        else{
                alert("No ingresaste el tiempo ")
        }
}


//Aqui añadimos el evento que escuchara si hacen click en el boton generar numeros y que puede
numRandom.addEventListener("click", () =>{
  let tamañoLista = tamaño.value;
  let tiempoMuestra= time.value;
  deleteDiv();
  let numerosRandom=createNumber(tamañoLista);
  if(numerosRandom!=null && tiempoMuestra!=""){
          createDiv(numerosRandom);
          timeShow(tiempoMuestra)          
  }else{
          alert("No ingressaste el tiempo")
  }
})



//El evento escuchara si se planea
numMostrar.addEventListener("click", ()=>{
        
        if(exist()){
                let numDiv = document.getElementById("divJS");
                numDiv.style.display="block";
       }else{
                alert("Primero debes generar los numeros")
        }

})


