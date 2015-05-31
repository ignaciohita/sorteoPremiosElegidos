/*global angular*/
var angularApp = angular.module('SorteoPremios', ['ui.bootstrap']);

angularApp.controller('PremioController', function ($scope) {
	'use strict';

	$scope.listaPremios = {
		viajes: ['viaje a Japón', 'crucero por el Caribe'],
		motor: ['coche deportivo', 'fuera borda'],
		propiedades: ['apartamento en la playa', 'piso en la Plaza Mayor']
	};

	$scope.elegirPremios = function (tipoPremio) {
		var premiosPosibles = $scope.listaPremios[tipoPremio];
		$scope.premio = premiosPosibles[Math.floor(Math.random() * premiosPosibles.length)];
	};
});
