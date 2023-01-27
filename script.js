const textArea = document.querySelector("#encriptar");
const mensaje = document.querySelector("#desencriptar");
mensaje.value = ""

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    allLetter();
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptada;
}

function btnCopiar() {    
    let copyText = document.getElementById("desencriptar");   
    copyText.select();   
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado: " + copyText.value);
    mensaje.value = "";        
}

//validación solo minúsculas

  


  /*function allLetter(){ 
    let inputtxt = document.getElementById("encriptar");
    let letters = /^[a-z]+$/;

        if(!inputtxt.value.match(letters)){             
            alert("Introducir solo letras sin acentos.")
            shaking();
            return true;

        }else

        {
            //alert("Texto correcto");
            //btnEncriptar(); 
            //return false;
                            
        } 

              
    }

  function shake(){
              $(document).ready(function(){
              $("#encriptar").effect('shake', { 
              times: 10,
              duration: 1000,
              direction: 'right' // 'right' for right
              });
          });
          }
          
          function shaking(){
              shake();
          }*/





