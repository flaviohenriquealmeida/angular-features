angular.module('funcionarios').controller('DestaquesController', function($scope, $http, $q) {

	function funcionarios() {
		var defer = $q.defer();
		$http.get('/destaques/funcionarios').success(function(retorno) {
			defer.resolve(retorno);
		});
		return defer.promise;
	};

	function gerentes() {
		var defer = $q.defer();
		$http.get('/destaques/gerentes').success(function(retorno) {
			defer.resolve(retorno);
		});
		return defer.promise;
	};

	function diretores() {
		var defer = $q.defer();
		$http.get('/destaques/diretores').success(function(retorno) {
			defer.resolve(retorno);
		});
		return defer.promise;
	};

	$q.all([funcionarios(), gerentes(), diretores()])
	.then(function(resultados) {
		$scope.funcionarios = [];
		resultados.forEach(function(resultado) {
			$scope.funcionarios.push.apply($scope.funcionarios, resultado);	
		})
	}, function(erro) {
		console.erro(erro);
	});
});