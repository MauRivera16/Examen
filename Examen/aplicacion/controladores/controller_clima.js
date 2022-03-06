(function (angular, app) {
  'use strict';
  var controlador, parametrosControlador;

  controlador = function (
    $scope,
    $utilerias
  ) {
    $scope.TituloControlador = "Clima";
    $scope.DatosEntrada = {
      lugar: '',
      dias: 3
    };

    $scope.DatosSalida = {
      obtenido: false,
      informacionBasica: {
        latitud: 0,
        longitud: 0,
        nombre: '',
        region: '',
        pais: ''
      },
      prediccionesDias: [],
      actual: {
        condicion: '',
        condicion_icono: '',
        temperatura: ''
      }
    };

    function _reinicializarDatos() {
      $scope.DatosSalida.informacionBasica.latitud = 0;
        $scope.DatosSalida.informacionBasica.longitud = 0;
        $scope.DatosSalida.informacionBasica.nombre = '';
        $scope.DatosSalida.informacionBasica.region = '';
        $scope.DatosSalida.informacionBasica.pais = '';
        $scope.DatosSalida.prediccionesDias = Array();
        $scope.DatosSalida.actual.condicion = '';
        $scope.DatosSalida.actual.condicion_icono = '';
        $scope.DatosSalida.actual.temperatura = 0;
    }

    $scope.redireccionar = function (opcion) {
      $utilerias.redireccionar(opcion);
    }

    $scope.consultarClima = function () {
        $utilerias.peticion('/aplicacion/Webmethods/Servicios.asmx/ConsultarClima', { lugar: $scope.DatosEntrada.lugar, dias: $scope.DatosEntrada.dias }).then(function (respuesta) {
        console.log(respuesta);
        $scope.DatosSalida.obtenido = true;
        _reinicializarDatos();
        $scope.DatosSalida.informacionBasica.latitud = respuesta.location.lat;
        $scope.DatosSalida.informacionBasica.longitud = respuesta.location.lon;
        $scope.DatosSalida.informacionBasica.nombre = respuesta.location.name;
        $scope.DatosSalida.informacionBasica.region = respuesta.location.region;
        $scope.DatosSalida.informacionBasica.pais = respuesta.location.country;
        respuesta.forecast.forecastday.forEach(function (info){
          var detalle = {};
          detalle.fecha = info.date;
          detalle.temperaturaPromedio = info.day.avgtemp_c;
          detalle.condicion = info.day.condition.text;
          detalle.condicion_icono = info.day.condition.icon;
          detalle.probabilidadLluvia = info.day.daily_chance_of_rain;
          detalle.temperaturaMaxima = info.day.maxtemp_c;
          detalle.temperaturaMinima = info.day.mintemp_c;
          $scope.DatosSalida.prediccionesDias.push(detalle);
        });
        $scope.DatosSalida.actual.condicion = respuesta.current.condition.text;
        $scope.DatosSalida.actual.condicion_icono = respuesta.current.condition.icon;
        $scope.DatosSalida.actual.temperatura = respuesta.current.emp_c;
      });
    }

  }

  parametrosControlador = [
    '$scope',
    '$utilerias',
    controlador
  ];

  app.controller('ControladorClima', parametrosControlador);
}(window.angular,  window.aplicacion));