(function (angular) {
  'use strict';
  window.aplicacion = angular.module('Examen', [
    'ngRoute',
    'ngAnimate',
    'Utilerias'
  ]);

  window.aplicacion.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "aplicacion/vistas/Inicio.html",
        controller: "ControladorInicio"
      })
      .when("/Clima", {
        templateUrl: "aplicacion/vistas/clima.html",
        controller: "ControladorClima"
      })
        .when("/Deporte", {
            templateUrl: "aplicacion/vistas/deporte.html",
            controller: "ControladorDeporte"
        })
        .when("/Calculadora", {
            templateUrl: "aplicacion/vistas/calculadora.html",
            controller: "ControladorCalculadora"
        })
  });
} (window.angular));