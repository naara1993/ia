
/** 1 */
const gripe = [
    'Fiebre', 
    'Tos', 
    'Dolor de Cabeza',
    'Dolor Muscular',
    'Dolor de Garganta',
    'Congestion Nasal'
];
/** 2 */
const Covid = [
    'Fiebre', 
    'Tos', 
    'Dolor de Cabeza',
    'Dolor Muscular',
    'Dolor de Garganta',
    'Congestion Nasal',
    'Cansacio o Fatiga',
    'Diarrea',
    'Pérdida del gusto o del olfato',
    'Dificultad para respirar o disnea'
];
/** 3 */
const Polio = [
    'Fiebre', 
    'Vómitos', 
    'Dolor de Cabeza',
    'Dolor Muscular',
    'Dolor de Garganta',
    'Dolor o rigidez en el cuello',
    'Dolor o rigidez en los brazos o en las piernas'
];

var ResultadosObtenidos = [];
let a=0,b=0,c=0;
function fnRespuesta()
{


    let elemento = document.getElementById('Pregunta');
    elemento.innerHTML = '';
    let aleatorioEnf = Math.floor(Math.random() * 3) + 1;

//13 sintomas por eso para mi resultadosObtenidos como maximo debe tener 13 elementos

if(ResultadosObtenidos.length <13){
    if(ResultadosObtenidos.length>=1){
        if(aleatorioEnf == 1)
        {
            let b=false;
            let aleatorioPre = Math.floor(Math.random() * gripe.length);    
            for(i=0;i<ResultadosObtenidos.length;i++){
                if(ResultadosObtenidos[i].pregunta === gripe[aleatorioPre]){
                      b=true;
                      break;
                    }
            }
            if(!b){
                elemento.append(`¿Usted tiene ${gripe[aleatorioPre]}?`);
                ResultadosObtenidos.push({pregunta:gripe[aleatorioPre], enfermedad: 'gripe', respuesta: '' });
            }else{
                fnRespuesta()
            } 
        }
        else if(aleatorioEnf == 2)
        {    

            let b=false;
            let aleatorioPre = Math.floor(Math.random() * Covid.length);
  
            
            for(i=0;i<ResultadosObtenidos.length;i++){
                if(ResultadosObtenidos[i].pregunta === Covid[aleatorioPre]){
                      b=true;
                      break;                
                    }
            }
            if(!b){
                elemento.append(`¿Usted tiene ${Covid[aleatorioPre]}?`);
                ResultadosObtenidos.push({pregunta:Covid[aleatorioPre], enfermedad: 'Covid', respuesta: '' });
                
            }else{
                fnRespuesta()
            }
            
        }
        else if(aleatorioEnf == 3)
        {
            let b=false;
            let aleatorioPre = Math.floor(Math.random() * Polio.length);         
            for(i=0;i<ResultadosObtenidos.length;i++){
                if(ResultadosObtenidos[i].pregunta === Polio[aleatorioPre]){
                      b=true;
                      break;
                    }
            }
            if(!b){
                elemento.append(`¿Usted tiene ${Polio[aleatorioPre]}?`);
                ResultadosObtenidos.push({pregunta:Polio[aleatorioPre], enfermedad: 'Polio', respuesta: '' });
            }else{
                fnRespuesta()
            }
            
        } 
    }
    if(ResultadosObtenidos.length==0){
        //solo va a hacer la condicion una vez
        //inicialmente necesito que por lo menos 1 elemento se guarde para comparar las preguntas
    if(aleatorioEnf == 1)
    {
        let aleatorioPre = Math.floor(Math.random() * gripe.length);
        ResultadosObtenidos.push({pregunta:gripe[aleatorioPre], enfermedad: 'gripe', respuesta: '' });
        elemento.append(`¿Usted tiene ${gripe[aleatorioPre]}?`);
     }
    else if(aleatorioEnf == 2)
    {
        let aleatorioPre = Math.floor(Math.random() * Covid.length);
        ResultadosObtenidos.push({pregunta:Covid[aleatorioPre], enfermedad: 'Covid', respuesta: '' });
        elemento.append(`¿Usted tiene ${Covid[aleatorioPre]}?`);
   
    }
    else if(aleatorioEnf == 3)
    {
        let aleatorioPre = Math.floor(Math.random() * Polio.length);
        ResultadosObtenidos.push({pregunta:Polio[aleatorioPre], enfermedad: 'Polio', respuesta: '' });
        elemento.append(`¿Usted tiene ${Polio[aleatorioPre]}?`);
    }

}



}else{
    console.log("supero el limite de estados disponibles");
}

}
    
fnRespuesta();
function obtenerRespuesta()
{

    let selRespuesta = document.getElementById('Respuesta').value;
    let res= document.getElementById('Resultado');
    res.innerHTML=''

    if (selRespuesta == 'SI')
    {
        ResultadosObtenidos[ResultadosObtenidos.length - 1].respuesta = selRespuesta;
        console.log(ResultadosObtenidos[ResultadosObtenidos.length - 1])
        if(ResultadosObtenidos[ResultadosObtenidos.length - 1].respuesta == 'SI' && 
            ResultadosObtenidos[ResultadosObtenidos.length - 1].enfermedad=='gripe'
        )
         {
            a=a+1;
            console.log(a)

          }else if(
            ResultadosObtenidos[ResultadosObtenidos.length - 1].respuesta == 'SI' && 
            ResultadosObtenidos[ResultadosObtenidos.length - 1].enfermedad=='Covid'
          ){
            b=b+1;
console.log(b)

          }else if(ResultadosObtenidos[ResultadosObtenidos.length - 1].respuesta == 'SI' && 
          ResultadosObtenidos[ResultadosObtenidos.length - 1].enfermedad=='Polio'){
            c=c+1;
console.log(c)
 }
 }
    else
    {
        ResultadosObtenidos[ResultadosObtenidos.length - 1].respuesta = selRespuesta;
    }
if(a>b && a>c){
    console.log('gripe');
    res.append(' usted tiene gripe')
}
else if(b>a && b>c){
    console.log('Covid');
    res.append(' usted tiene Covid')
} else if(c>a && c>b){
    console.log('Polio');
    res.append(' usted tiene Polio')
}
    fnRespuesta();
}


