



function initMap() {

  var latlng = {
    lat: 21.152920,
    lng: -86.833268
  };

var map = new google.maps.Map(document.getElementById('map'), {
'center': latlng,
'zoom': 13,
'mapTypeId': google.maps.MapTypeId.ROADMAP

});
var informacion = new google.maps.InfoWindow({
  content: "conferencia CANCUN"
});
   var marker =  new google.maps.Marker({
     position:latlng,
     map:map,
     title: 'conferencia'
   });

   marker.addListener('click', function(){
     informacion.open(map,marker);
   });
}


(function(){

  "use strict";

  var regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function(){
  //  console.log("INICIO");

    //Campos Datos del Usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    //campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    //Botones y divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista_Productos');
    var suma = document.getElementById('suma_total');

    //Extras
    var camisas = document.getElementById('camisa_evento');
    var etiqueta = document.getElementById('etiquetas');


    calcular.addEventListener('click', calcularMontos);

    pase_dia.addEventListener('blur', mostrardias);
    pase_dosdias.addEventListener('blur', mostrardias);
    pase_completo.addEventListener('blur',mostrardias);

    nombre.addEventListener('blur' , validarCampos);
    apellido.addEventListener('blur' , validarCampos);
    email.addEventListener('blur' , validarCampos);
    email.addEventListener('blur' , validarMail);


    function validarCampos(){
      if(this.value == ''){
        errorDiv.style.display='block';
        errorDiv.innerHTML="este campo es obligatorio";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      }else {
        errorDiv.style.display ='none';
        this.style.border = '1px solid #cccccc';
      }
    }
    function validarMail(){
      if (this.value.indexOf("@") > -1) {
        errorDiv.style.display ='none';
        this.style.border = '1px solid #cccccc';
      }else {
        errorDiv.style.display='block';
        errorDiv.innerHTML="debe tener almenos un @";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      }
    }

    function calcularMontos(event){
      event.preventDefault();
      if (regalo.value === '') {
        alert("Debes Elegir un regalo");
        regalo.focus();
      } else {
        var boletosDia = parseInt(pase_dia.value, 10) || 0,
            boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
            boletosCompleto = parseInt(pase_completo.value, 10) || 0,
            cantCamisas = parseInt(camisas.value, 10) || 0,
            cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

        var totalpagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletosCompleto * 50) + ((cantCamisas * 10) *.93) + (cantEtiquetas * 2) ;
        //console.log(totalpagar .toFixed(2) );

        var listadoproductos = [];

        if (boletosDia >= 1) {
          listadoproductos.push(boletosDia + ' Pases por dia');
        }
        if (boletos2Dias >= 1) {
        listadoproductos.push(boletos2Dias + ' Pases por 2 dias');
        }
        if (boletosCompleto >= 1) {
        listadoproductos.push(boletosCompleto + ' Pases Completos');
        }
        if (cantCamisas >= 1) {
        listadoproductos.push(cantCamisas + ' Camisas');
        }
        if (cantEtiquetas >= 1) {
        listadoproductos.push(cantEtiquetas + ' Etiquetas');
        }

      lista_productos.style.display  ='block';
      lista_productos.innerHTML = '';
      for (var i = 0; i< listadoproductos.length; i++){
        lista_productos.innerHTML += listadoproductos[i] + '<br/>';
      }
      suma.innerHTML = '$ '+ totalpagar .toFixed(2);

      }

    }

    function mostrardias(){
      var boletosDia = parseInt(pase_dia.value, 10) || 0,
          boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
          boletosCompleto = parseInt(pase_completo.value, 10) || 0;

          var diaselegidos =[];
          if (boletosDia > 0) {
            diaselegidos.push('viernes');
          }
          if (boletos2Dias > 0) {
            diaselegidos.push('viernes','sabado');
          }
          if (boletosCompleto > 0) {
            diaselegidos.push('viernes','sabado','domingo')
          }
          for (var i = 0; i < diaselegidos.length; i++) {
            document.getElementById (diaselegidos[i]).style.display = 'block';
          }

    }


  });//DOM CONTENT LOADED
})();



  $(function(){

      $('.programa-evento .info-curso:first').show();
      $('.menu-programa a').on('click', function(){

        var enlace = $(this).attr('href');
        console.log(enlace);
      });

  });
