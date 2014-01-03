// take a look at DestaquesCallbakHellController to contrast with this solution using promises
angular.module('funcionarios').controller('DestaquesController', function($scope, $http, $q) {

	function getFuncionarios() {
		var defer = $q.defer();
		$http.get('/destaques/funcionarios').success(function(retorno) {
			defer.resolve(retorno);
		});
		return defer.promise;
	};

	function getGerentes() {
		var defer = $q.defer();
		$http.get('/destaques/gerentes').success(function(retorno) {
			defer.resolve(retorno);
		});
		return defer.promise;
	};

	function getDiretores() {
		var defer = $q.defer();
		$http.get('/destaques/diretores').success(function(retorno) {
			defer.resolve(retorno);
		});
		return defer.promise;
	};

	$q.all([getFuncionarios(), getGerentes(), getDiretores()])
	.then(function(resultados) {
		$scope.funcionarios = [];
		resultados.forEach(function(resultado) {
			$scope.funcionarios.push.apply($scope.funcionarios, resultado);	
		})
	}, function(erro) {
		console.erro(erro);
	});
});