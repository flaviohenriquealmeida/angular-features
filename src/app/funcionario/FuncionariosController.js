angular.module('funcionarios').controller(
	'FuncionariosController', 
	function($scope, $location, $cookieStore, Funcionario) {
		
		var lastSearch = $cookieStore.get('app.last.search') || '';
		$scope.search = {
			text: lastSearch
		}

		$scope.keepLastSearch = function(text) {
			$cookieStore.put('app.last.search', text);
		}

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