//Selector de preguntas
let puntero = 0;
// lista de todas las preguntas
let preguntas = [
    "1) ¿Te consideras una persona indecisa o que tiene dudas a la hora de tomar decisiones?",
    "2) Cuando inicias un proyecto o te pones una meta. ¿Eres alguien constante en el proceso de conseguirlo ? Es decir, cumples con tus horarios propuestos y le dedicas el tiempo planeado",
    "3) ¿Repudias la negatividad y huyes de ella?¿No te gusta acercarte a ella?",
    "4) ¿Tienes eventos en tu vida que parecen depender del azar, sin forma de predicción alguna?",
    "5) Cuando experimentas emociones, ¿Las experimentas de manera intensa o similar?",
    "6) ¿Te consideras una persona que, anímicamente se viene abajo rápidamente pero que luego de un periodo vuelve a estar mejor?",
    "7) ¿Estás seguro o tienes algún plán de como quieres estar de aquí a 5 años?",
    "8) Si tuvieses que describirte a ti mismo, ¿Dirías que eres alguien muy cambiante?",
    "9) ¿Tienes bien definidas las cosas que quieres y no quieres en tu vida?",
    "10) ¿Te gustaría llegar a algún lugar alto en algún momento? ¿Prefieres eso antes que mantener un perfíl bajo?",
    "11) ¿Tienes hábitos o ciclos en tu vida que se repiten cada cierto tiempo?",
    "12) ¿Tu motivación crece de forma exponencial cuando ves progreso en algo? ",
    "13) ¿Crees que no hay un límite en las cosas que puedes lograr?",
    "14) ¿Te adaptas bien a cambios abruptos sin necesidad de una transición más suave entre etapas de tu vida?",
    "15) Para alguna de las preguntas anteriores, ¿Has tenido alguna que no hayas podido responder con claridad? Es decir, no sabes si puede ser un SI o un NO"
];
//Funciones anonimas, las cuales se ejecutaran si el resultado en el array respuestas es true
const is_true = [
    () => {senx++,tgx++,caos++;},//1
    () => {absx++,ex++,lnx++;},//2
    () => {absx+=2;lnx++;},//3
    () => {senx++;tgx++,caos+=2;},//4
    () => {absx++;ex+=2;tgx+=2;caos++;},//5
    () => {senx+=2;tgx++;},//6
    () => {lnx++;ex++;absx++;},//7
    () => {senx++;tgx++;caos+=2;},//8
    () => {ex++;absx++;lnx++;},
    () => {absx++;ex++;},
    () => {senx++;tgx++;},
    () => {ex+=2;absx++;},
    () => {ex++;absx++;},
    () => {lnx++;ex++;senx++;},
    () => {tgx++;caos+=2;}
];
//Funciones anonimas, las cuales se ejecutaran si el resultado en el array respuestas es false
const is_false = [
    () => {absx++;ex++;},//1
    () => {tgx++;caos++;},//2
    () => {senx++;ex++;tgx++},//3
    () => {absx++;ex++;lnx++;},//4
    () => {senx++;lnx++;},//5
    () => {ex++;lnx++;},//6
    () => {senx++;tgx++,caos++;},//7
    () => {ex++;lnx+=2;absx++;},//8
    () => {tgx++;caos++;},
    () => {senx+=2;tgx++;lnx++;},
    () => {caos++;absx++;lnx++;},
    () => {lnx++;caos++;},
    () => {lnx++;},
    () => {tgx++;caos++;},
    () => {ex++;absx++;lnx++;}
];
//Puntajes con las funciones, la función con más puntaje será la que te tocó
let senx = 0;
let lnx = 0;
let ex = 0;
let tgx = 0;
let absx = 0;
let caos = 0;

//Referencia al parrafo del recuadro para cambiar entre preguntas o dejar el resultado final
const parrafo = document.getElementById("parrafo-preguntas");
const nombre_funcion = document.getElementById("nombre-funcion");
const img_funcion = document.getElementById("img-funcion");
const linea = document.getElementById("linea");
const txt_resultado = document.getElementById("texto-resultado");

//Para guardar las respuestas del usuario
let n = preguntas.length; // Número de elementos
let respuestas = new Array(n);  // Crea un array n elementos

/*Botones*/ 
let boton_si = document.getElementById("boton-si");
let boton_no = document.getElementById("boton-no");

//Respuestas para cada funcion
let resultados = {
    "Sen(x)": "Eres una persona que se mantiene oscilando entre ciertos estados de animo, te gusta mantenerte en tu zona de confort, en lugares en donde ya has estado antes, es dificil definirte de aqui a un largo tiempo, eres un poco cambiante y tienes muchos momentos altos y bajos, lo cual está bien y hacen de tu vida algo similar a una montaña rusa pero controlada, prefieres fluir y aceptar cosas en vez de forzar situaciones o cambios bruscos, aunque tengas muchos altibajos, siempre tienes un punto medio sobre el cual te mantienes, esto expresa un poco de estabilidad y orden en tu vida, pero deberías perder el miedo y salir de tu zona de confort, tener nuevas experiencias y emociones, tomar una meta fija y perseguirla a medida que te acercas al infinito. ",

    "Tan(x)": "Puede que tengas una personalidad extrema y un poco impredecible, bastante cambiante, aunque vivas las emociones que experimentas, existen momentos en los que quizá tus emociones o pensamientos no pueden estar del todo definidos, cuando te involucras en algo, lo haces con todo tu ser, no te gusta la mediocridad y sueles ser alguien que puede experimentar cambios o emociones abruptas, nunca eres una linea constante, deberías buscar un ritmo más sereno y poder conocerte un poco mejor, aunque en algunos puntos seas alguien un poco dificil de definir, impredecible y hasta un poco riesgoso para tu entorno, en algún momento encontrarás tu punto de equilibrio y una dirección estable para seguir. ",

    "ln(x)": "Eres alguien que sigue su camino de manera constante y tranquila, puede que seas un poco conservador y controles bien tus emociones, tanto negativas como positivas, tienes una buena idea de a donde quieres llegar, te gusta avanzar de forma progresiva y estructurada, puede que hayas empezado desde lo más bajo pero vas avanzando a tu ritmo, lo cual está bien, no eres una persona muy cambiante, eres perseverante y un poco selectivo con las personas con las cuales te quieres relacionar, puedes parecer alguien distante y reservado, tienes un poco de dificultad para expresar tus emociones de manera intensa, te vendría bien un poco más de soltura y rebeldía.",

    "e^x": "Eres una persona que aspira a ir a lo alto, tienes buenas metas, quizá no tan bien definidas, pero tienes una idea de a donde te quieres dirigir y te esfuerzas en ir lo más alto posible, puede que hayan veces en las cuales tengas un poco más de prisa de lo necesario y necesites frenar un poco para no estrellarte, quieres alejarte de la mediocridad y de lo monótono, sueles comenzar las cosas de manera lenta, pero en cierto punto, con motivación y disciplina eres capaz de despegar exponencialmente, tienes un amplio espectro de sentimientos y de como puedes experimentarlos, las emociones intensas a menudo predominan en tí, hay veces en las que deberias pensar un poco más en los pasos que das, ya que sueles ir un poco apresurado.",
    
    "|x|":"Eres una persona que siempre intenta mantenerse positiva, por más de que hayan veces en las que puedes ir hacia abajo, siempre intentas volver a despegar hacia arriba, de manera constante y tranquila, puede que intentes ocultar la tristeza o huir de ella, deberías aceptar que a veces hay que recibir a las emociones negativas como parte y razón de tu crecimiento, sueles ser bastante objetivo y poco flexible, con el paso del tiempo puedes desarrollar emociones intensas, cuando tocas fondo tienes una dirección o rumbo indefinido, pero en el momento que consigues salir de ese punto, puedes convertirte en alguien bastante estable y que avanza a un ritmo constante pero seguro, debes aceptar que a veces está bien sentirse mal, aceptar tu lado negativo :). ",
   
    "Caos": 'Te asemejas al "Caos" en las matemáticas, el caos trata sobre un sistma dinámico totalmente impredecible, el cual es muy sensible a condiciones iniciales, ejemplos de esto en la vida real serían: un péndulo doble, epidemias, los movimientos de las aves y los peces, los espasmos del corazón, entre otros, esto no necesariamente implica que eres alguien malo, simplemente puedes llegar a ser una persona muy impredecible y dificil de definir, tanto a tí como a las cosas que suceden en tu entorno, puede que seas una persona un poco desorganizada y dificil de descifrar, pero tu personalidad rara hace que quizás seas alguien interesante de descubrir y comprender, deberías intentar dedicarte más tiempo y conocerte más, ya que resultas ser todo un misterio, antes de descubrir alguna pasión o dirección, primero puedes iniciar descubriendote a tí mismo/a  ;).'
};
let img_links = {
    "Sen(x)" : "images/senx.png",
    "Tan(x)" : "images/tgx.png",
    "ln(x)"  : "images/lnx.png",
    "e^x"    : "images/ex.png",
    "|x|"    : "images/absx.png",
    "Caos"   : "images/caos.png"
}


//--------------FUNCIONES-----------------------------------------------------------------
// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    parrafo.textContent = preguntas[puntero];
});

// Función para mostrar el contenido de la variable en el párrafo
function mostrarPregunta() {
     // Reducir opacidad a 0 antes de cambiar el texto
     parrafo.style.opacity = 0;

     setTimeout(() => {
         parrafo.textContent = preguntas[puntero];
         // Volver a aumentar opacidad
         parrafo.style.opacity = 1;
     }, 500); // Debe coincidir con la duración de la transición
}

function avanzar(){
    if(puntero == preguntas.length - 1) {
        //Mostrar resultado final si ya respondimos todas las preguntas
        if(respuestas.includes(undefined)){
            alert("Debes responder a todas las preguntas, retrocede y marca la que te falte");
        }else{
            evaluar();
            limpiar_container();
            let func_name = get_mayor(); //Obtener el nombre de la funcion
            nombre_funcion.textContent = "Tu función es: " + func_name; //Escribir la funcion que te toco
            img_funcion.src = img_links[func_name];//Colocar la ruta a la imagen de la funcion que toco
            txt_resultado.textContent = resultados[func_name];//Colocar la descripcion de la funcion
            //Hacer visibles el nombre e imagen de la funcion
            nombre_funcion.classList.remove("oculto");
            img_funcion.classList.remove("oculto");
            linea.classList.remove("oculto");
            txt_resultado.classList.remove("oculto");
        }
    }
    else{
        puntero++;
        mostrarPregunta();
        refrescar_seleccion();
    }
}

function retroceder(){
    if(puntero > 0){
        puntero--;
        refrescar_seleccion();
    }
    mostrarPregunta();
}

function get_decision(eleccion){
    respuestas[puntero] = eleccion;
    refrescar_seleccion();
}

function refrescar_seleccion(){

    boton_si.classList.remove("seleccionado");
    boton_no.classList.remove("seleccionado");

    if(respuestas[puntero] != null){
        if(respuestas[puntero]){
            boton_si.classList.add("seleccionado");
        }else{
            boton_no.classList.add("seleccionado");
        }
    }
}

function evaluar(){
    for(let i = 0; i < preguntas.length;i++){
        if(respuestas[i]){
            is_true[i]();
        }else{
            is_false[i]();
        }
    }
}

function limpiar_container() {
    document.querySelectorAll(".ocultar-luego").forEach(elemento => {
        elemento.classList.add("oculto");
    });
}

function get_mayor(){
    let puntajes = [senx,tgx,lnx,ex,absx,caos];
    let keys =["Sen(x)","Tan(x)","ln(x)","e^x","|x|","Caos"]
    let indice_mayor = 0;
    //Encontramos el indice donde se encuentra el mayor
    for(let i = 0; i < puntajes.length;i++){
        if(puntajes[i]> puntajes[indice_mayor]){
            indice_mayor = i;
        }
    }
    return keys[indice_mayor];
}
