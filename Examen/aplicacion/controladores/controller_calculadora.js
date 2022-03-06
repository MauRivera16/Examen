(function (angular, app) {
    'use strict';
    var controlador, parametrosControlador;

    controlador = function (
        $scope,
        $utilerias
    ) {
        $scope.TituloControlador = "Clima";
        $scope.redireccionar = function (opcion) {
            $utilerias.redireccionar(opcion);
        }
    }

    parametrosControlador = [
        '$scope',
        '$utilerias',
        controlador
    ];
    app.controller('ControladorCalculadora', parametrosControlador);
}(window.angular, window.aplicacion));
