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