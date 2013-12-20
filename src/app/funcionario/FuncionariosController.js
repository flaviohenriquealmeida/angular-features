angular.module('funcionarios').controller(
	'FuncionariosController', 
	function($scope, $location, Funcionario) {
		
		$scope.init = function() {
			$scope.funcionarios = Funcionario.query();
		}
		$scope.init();
		
		$scope.remove = function(funcionario) {
			Funcionario.delete({id: funcionario.id}, function() {
				$location.path('#/');
			});

		}

		$scope.total = function() {
			var total = 0;
			$scope.funcionarios.forEach(function(funcionario) {
				total+= funcionario.salario;
			});
			return total;
		}
	}
);