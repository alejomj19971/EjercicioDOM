//const btnSuma
//btnSuma.addEventListener('moseenter',function()){
    //alert('eventos');}



function sumarDos(){
const numeroUno=document.querySelector('#numeroUno');
console.log(numeroUno.value);
const numeroDos=document.querySelector('#numeroDos');
console.log(numeroDos.value);
const resultadoSuma=document.querySelector('#resultado');

let suma=parseInt(numeroUno.value)+parseInt(numeroDos.value);
console.log(suma);
resultadoSuma.textContent=suma;
resultadoSuma.classList.add('resultado');
}

const restar=() =>{
    const numeroUno=document.querySelector('#numeroUno');
    const numeroDos=document.querySelector('#numeroDos');
    
    const resultadoResta=document.querySelector('#resultado')
    let resta=parseInt(numeroUno.value)-parseInt(numeroDos.value);
    resultadoResta.textContent=resta;
    resultadoResta.classList.add('resultado')
}

const multiplicacion=()=>{
    const numeroUno=document.getElementByid("numeroUno");
    const numeroDos=document.getElementByid("numeroDos");
    const resultadoMultiplicacion=document.getElementById('resultado');
    let multiplicacion= parseInt(numeroUno.value)*parseInt(numeroDos.value);
    resultadoMultiplicacion.textContent=multiplicacion;

}

    