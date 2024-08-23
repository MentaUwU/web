    // Obtener la referencia a la imagen de la bombilla
    var imagen = document.getElementById("foco");

    // Función para encender la bombilla
    function encender() {
      imagen.src = "dist/img/Bocchi 1.ico"; // Cambiar la imagen a la bombilla encendida
      hablar("La bombilla se ha encendido"); // Llamar a la función hablar con el mensaje
    }

    // Función para apagar la bombilla
    function apagar() {
      imagen.src = "dist/img/Bocchi 2.ico"; // Cambiar la imagen a la bombilla apagada
      hablar("La bombilla se ha apagado"); // Llamar a la función hablar con el mensaje
    }

    // Función para hablar utilizando síntesis de voz
    function hablar(mensaje) {
      const utterance = new SpeechSynthesisUtterance(mensaje); // Crear un nuevo objeto de mensaje de síntesis de voz
      speechSynthesis.speak(utterance); // Hacer que el navegador hable el mensaje
    }
// gauge
document.addEventListener('DOMContentLoaded', function() {
    // Crear el gauge llamado radial
    var radial = new RadialGauge({
      renderTo: 'gauge',
      width: 200,
      height: 200,
      units: "°C",
      title: "Temperature",
      minValue: -50,
      maxValue: 50,
      majorTicks: [
        -50,
        -40,
        -30,
        -20,
        -10,
        0,
        10,
        20,
        30,
        40,
        50
      ],
      minorTicks: 2,
      strokeTicks: true,
      highlights: [
        {
          from: -50,
          to: 0,
          color: "rgba(0,0, 255, .3)"
        },
        {
          from: 0,
          to: 50,
          color: "rgba(255, 0, 0, .3)"
        }
      ],
      ticksAngle: 225,
      startAngle: 67.5,
      colorMajorTicks: "#ddd",
      colorMinorTicks: "#ddd",
      colorTitle: "#eee",
      colorUnits: "#ccc",
      colorNumbers: "#eee",
      colorPlate: "#222",
      borderShadowWidth: 0,
      borders: true,
      needleType: "arrow",
      needleWidth: 2,
      needleCircleSize: 7,
      needleCircleOuter: true,
      needleCircleInner: false,
      animationDuration: 1500,
      animationRule: "linear",
      colorBorderOuter: "#333",
      colorBorderOuterEnd: "#111",
      colorBorderMiddle: "#222",
      colorBorderMiddleEnd: "#111",
      colorBorderInner: "#111",
      colorBorderInnerEnd: "#333",
      colorNeedleShadowDown: "#333",
      colorNeedleCircleOuter: "#333",
      colorNeedleCircleOuterEnd: "#111",
      colorNeedleCircleInner: "#111",
      colorNeedleCircleInnerEnd: "#222",
      valueBoxBorderRadius: 0,
      colorValueBoxRect: "#222",
      colorValueBoxRectEnd: "#333",
      value:-50
    }).draw();
  
    var contador=-50;
    var aumentar=1;
    function Incrementa() {
      if(radial.value<50){
    }
    if(aumentar==1){
        if(radial.value < 50){
          contador=contador+10;
          radial.value=contador;
          console.log("valor:",radial.value )
        }else{aumentar--;}
    }else{
        if(radial.value > -50){
          contador=contador-10;
          radial.value=contador;
          console.log("valor:",radial.value )
        }else{aumentar++;}
    }
    
    }
  setInterval(Incrementa,1600);
});
// linear
var gauge = new LinearGauge({
  renderTo: 'Linear',
  width: 100,
  value: 0
}).
draw();
var contador2=0;
var aumentarL=1;
function linea() {
if(aumentarL==1){
    if(gauge.value < 100){
      contador2=contador2+10;
      gauge.value=contador2;
      console.log("valor:",gauge.value )
    }else{aumentarL--;}
}else{
    if(gauge.value <= 100){
      contador2=contador2-10;
      gauge.value=contador2;
      console.log("valor:",gauge.value )
      if(gauge.value == 0){aumentarL++;}
    }
}

}
setInterval(linea,1600);
//tiempo
var mitiempo = setInterval(mytymer,1000)
function mytymer(){
  const date = new Date();
  document.getElementById("tiempo").innerHTML = date.toLocaleTimeString();
}
