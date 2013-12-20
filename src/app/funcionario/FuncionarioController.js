angular.module('funcionarios').controller(
	'FuncionarioController', 
	function($scope, $routeParams, Funcionario) {

		$scope.init = function() {

			var funcionarioId = $routeParams.funcionarioId;
			if(funcionarioId) {
				$scope.funcionario = Funcionario.get({id: funcionarioId});
			} else {
				$scope.funcionario = new Funcionario;
			}
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