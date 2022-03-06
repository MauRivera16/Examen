(function (angular, app) {
    'use strict';
    var controlador, parametrosControlador;

    controlador = function (
        $scope,
        $utilerias
    ) {
        $scope.TituloControlador = "Deportes";
        $scope.DatosEntrada = {
            lugar: ''
        };

        $scope.DatosSalida = {
            obtenido: false,
            informacionBasica: {
               
                pais: ''
            },
            Partidos: [],
            matches: {
                torneo: '',
                incio: '',
                partido: '',
                estadio: ''
            }
        };

        function _reinicializarDatos() {
            $scope.DatosSalida.informacionBasica.pais = '';
            $scope.DatosSalida.matches.partido = '';
            $scope.DatosSalida.matches.estadio = '';
            $scope.DatosSalida.matches.inicio = '';
            $scope.DatosSalida.matches.torneo = '';
            $scope.DatosSalida.Partidos = Array();
        }

        $scope.redireccionar = function (opcion) {
            $utilerias.redireccionar(opcion);
        }

        $scope.consultarDeporte = function () {
            $utilerias.peticion('/aplicacion/Webmethods/Servicios.asmx/ConsultarDeporte', { lugar: $scope.DatosEntrada.lugar }).then(function (respuesta) {
                console.log(respuesta);
                $scope.DatosSalida.obtenido = true;
                _reinicializarDatos();
                $scope.DatosSalida.informacionBasica.pais = respuesta.football.country;
                respuesta.football.forEach(function (info) {
                    var detalle = {};
                    detalle.pais = info.country;
                    detalle.partido = info.match;
                    detalle.estadio = info.stadium;
                    detalle.inicio = info.start;
                    detalle.torneo = info.tournament;
                    $scope.DatosSalida.Partidos.push(detalle);
                });
            });

        }
    }
    parametrosControlador = [
        '$scope',
        '$utilerias',
        controlador
    ];
    app.controller('ControladorDeporte', parametrosControlador);
}(window.angular, window.aplicacion));