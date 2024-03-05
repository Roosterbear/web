const progressBarFull = document.getElementById('progressBarFull');
const done = document.getElementById('done');

let porcentaje = 0;
let intervalo = setInterval(()=>{
  porcentaje = porcentaje+10;
  if(porcentaje == 100){
    clearInterval(intervalo);
    done.innerText = 'done';
  }
  progressBarFull.style.width = `${porcentaje}%`;
},700);