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

//verifica si existe el div con el input y si existe lo elimina
function existInput(){
        let divInput = document.getElementById("divNewInput")
        let result =false
        if(divInput){
                result =true
        }
        return result
}

function deleteInput(){
if(existInput()){
        let divInput = document.getElementById("divNewInput")
        containerInput.removeChild(divInput);
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

//Crea el div con el input que vas a recibir
function createInput(numerosRandom){


        let divNum= document.createElement("div")
        divNum.style.backgroundColor= "antiquewhite"
        divNum.style.borderRadius="12px"
        divNum.style.padding="20px";
        divNum.style.justifySelf= "center";
        divNum.style.marginTop="40px";
        divNum.style.fontSize="2rem";
        divNum.id="divNewInput";
        divNum.style.color="black";
        
        let input= document.createElement("input")
        input.style.backgroundColor= "antiquewhite"
        input.style.borderRadius="12px"
        input.style.padding="20px";
        input.style.justifySelf= "center";
        input.style.marginTop="40px";
        input.style.fontSize="1.6rem";
        input.id="inputJS";
        
        let newButton = document.createElement("button")
        newButton.id="buttonVerificate";
        newButton.innerText="Verificar Numeros"


        divNum.appendChild(input);
        divNum.appendChild(newButton);
        containerInput.appendChild(divNum);
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
                createInput();
                },time)
        }
        else{
                alert("No ingresaste el tiempo ")
        }
}

function verificate(listaRandom, listaUser){
                console.log(listaUser)
                console.log(listaRandom)
         let numDiv = document.getElementById("divJS");
        if(listaUser===listaRandom){
                alert("Acertaste en todos los numeros")
                                 numDiv.style.display="block";
        }else{
                alert("Fallaste, verifica tu errores")
                 numDiv.style.display="block";
        }
}

//Aqui añadimos el evento que escuchara si hacen click en el boton generar numeros y que puede
numRandom.addEventListener("click", () =>{
  let tamañoLista = tamaño.value;
  let tiempoMuestra= time.value;
  deleteDiv();
  deleteInput();
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

let containerInput = document.getElementById('containerInput')
containerInput.addEventListener('click', (clickButton)=>{
        if(clickButton.target.tagName=== 'BUTTON'){
                let numDiv = document.getElementById("divJS");
                const div = clickButton.target.parentElement;
                const input = div.querySelector('#inputJS');
                const listaUser= input.value
                const listaRandom=numDiv.innerText 
                verificate(listaRandom, listaUser); 
                
        }
})
