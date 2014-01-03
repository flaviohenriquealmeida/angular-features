angular.module('funcionarios').controller('DestaquesController', function($scope, $http, $q) {

	var funcionarios = [];
	// callback hell
	$http.get('/destaques/funcionarios').success(function(destaques) {
		funcionarios.push.apply(funcionarios, destaques);

		$http.get('/destaques/gerentes').success(function(destaques) {
			funcionarios.push.apply(funcionarios, destaques);

			$http.get('/destaques/diretores').success(function(destaques) {
				funcionarios.push.apply(funcionarios, destaques);
				$scope.funcionarios = funcionarios;
				$scope.mensagem = 'A lista acima está atualizada';
			}).error(function(error) {
				console.error(error);
			})
		}).error(function(error) {
			console.error(error);
		});
	}).error(function(error) {
		console.error(error);
	});
});

	/* ok 
	function atual() {
		var defer = $q.defer();
		$http.get('/destaques/atual').success(function(dados) {
			defer.resolve(dados);
		});
		return defer.promise;
	};

	function anterior() {
		var defer = $q.defer();
		$http.get('/destaques/anterior').success(function(dados) {
			defer.resolve(dados);
		});
		return defer.promise;
	};

	$q.all([atual(), anterior()]).then(function(resultados) {
		$scope.funcionarios = [];
		resultados.forEach(function(resultado) {
			$scope.funcionarios.push.apply($scope.funcionarios, resultado);	
		})
		$scope.funcionarios.sort(function(a, b) {
			return a.nome > b.nome;
		});
		
	});
	*/