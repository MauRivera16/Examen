<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="Examen.Index" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" ng-app="Examen">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <link type="text/css" rel="stylesheet" href="aplicacion/libs/angular/angular-csp.css" />
    <link type="text/css" rel="stylesheet" href="aplicacion/libs/bootstrap/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="aplicacion/libs/bootstrap/css/bootstrap-theme.css" />
    <link type="text/css" rel="stylesheet" href="aplicacion/css/inicio.css" />
</head>
<body>
    <div ng-view></div>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js"></script>
    <script src="aplicacion/libs/angular/angular.min.js"></script>
    <script src="aplicacion/libs/angular/angular-animate.min.js"></script>
    <script src="aplicacion/libs/angular/angular-aria.min.js"></script>
    <script src="aplicacion/libs/angular/angular-cookies.min.js"></script>
    <script src="aplicacion/libs/angular/angular-loader.min.js"></script>
    <script src="aplicacion/libs/angular/angular-messages.min.js"></script>
    <script src="aplicacion/libs/angular/angular-mocks.js"></script>
    <script src="aplicacion/libs/angular/angular-resource.min.js"></script>
    <script src="aplicacion/libs/angular/angular-route.min.js"></script>
    <script src="aplicacion/libs/angular/angular-sanitize.min.js"></script>
    <script src="aplicacion/libs/angular/angular-scenario.js"></script>
    <script src="aplicacion/libs/angular/angular-touch.min.js"></script>
    <script src="aplicacion/libs/bootstrap/js/bootstrap.min.js"></script>
    <script src="aplicacion/factorias/utilerias.js"></script>
    <script src="aplicacion/aplicacion.module.js"></script>
    <script src="aplicacion/controladores/controller_inicio.js"></script>
    <script src="aplicacion/controladores/controller_clima.js"></script>
    <script src="aplicacion/controladores/controller_deporte.js"></script>
    <script src="aplicacion/controladores/controller_calculadora.js"></script>
</body>
</html>
