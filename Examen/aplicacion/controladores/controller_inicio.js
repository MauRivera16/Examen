(function (angular, app) {
  'use strict';
  var controlador, parametrosControlador;

  controlador = function (
    $scope,
    $window,
    $utilerias
  ) {
    $scope.TituloControlador = "Examen de prueba";

    $scope.redireccionar = function (opcion) {
      $utilerias.redireccionar(opcion);
    }
  }

  parametrosControlador = [
    '$scope',
    '$window',
    '$utilerias',
    controlador
  ];

  app.controller('ControladorInicio', parametrosControlador);
}(window.angular,  window.aplicacion));