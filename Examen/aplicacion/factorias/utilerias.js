(function (angular) {
    var utileriasFactoria;
    var utilerias;
    utileriasFactoria = function ($window, $http, $q) {
        function redireccionar(opcion) {
            var protocolo = window.location.href.split('//')[0];
            var urlNombrePath = window.location.href.split('//')[1];
            var urlHost = urlNombrePath.split('/')[0];
            switch (opcion) {
                case 'clima':
                    $window.location = protocolo + '//' + urlHost + "/Index.aspx#/Clima";
                    location.href = "/Index.aspx#/Clima";
                    break;
                case 'inicio':
                    $window.location = protocolo + '//' + urlHost + "/";
                    location.href = "/Index.aspx#/Inicio";
                    break;
                case 'deporte':
                    $window.location = protocolo + '//' + urlHost + "/Index.aspx#/Deporte";
                    location.href = "/Index.aspx#/Deporte";
                    break;
                case 'calculadora':
                    $window.location = protocolo + '//' + urlHost + "/Index.aspx#/Calculadora";
                    location.href = "/Index.aspx#/Calculadora";
                    break;

            }
        }

        function peticion(url, datos) {
            var diferido = $q.defer();
            $http.post(url, datos)
                .success(function (respuesta) {
                    var objeto = {};
                    objeto = angular.fromJson(respuesta.d, true);
                    if (angular.isUndefined(objeto) || objeto == null) {
                        console.error("error");
                    }
                    diferido.resolve(objeto);
                })
                .error(function (data, status) {
                    console.error('%o, %o', data, status)
                });
            return diferido.promise;
        } 
        return {
            redireccionar: redireccionar,
            peticion: peticion,
          
        }
    }

    utilerias = angular.module("Utilerias", []);
    utilerias.factory('$utilerias', ['$window', '$http', '$q', utileriasFactoria]);
}(window.angular));