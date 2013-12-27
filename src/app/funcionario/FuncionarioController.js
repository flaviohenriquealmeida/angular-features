angular.module('funcionarios').controller(
	'FuncionarioController', 
	function($scope, $routeParams, Funcionario) {

		$scope.init = function() {

			$scope.funcionario = $routeParams.funcionarioId 
				? Funcionario.get({id: $routeParams.funcionarioId}) 
				: new Funcionario();
		}
		$scope.init();

		$scope.salva = function(funcionario) {
			funcionario.$save().then(
				function() {
					$scope.mensagem = 'Salvo sucesso';
				}
			);
		}
	}
);