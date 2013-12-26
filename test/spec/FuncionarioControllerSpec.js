describe("FuncionarioController", function() {
	var $scope;

	beforeEach(module('funcionarios'));
	beforeEach(inject(function($injector){
		$scope = $injector.get('$rootScope').$new();
	}));

	it("Should create an empty Funcionario resource when no route parameter is defined", inject(function($controller) {
		$controller('FuncionarioController', {
			$scope: $scope
		});
		$scope.init();
		expect($scope.funcionario.id).toBeUndefined();
	}));

	it("Should fill Funcionario object when passing route param", inject(function($controller) {
		$controller('FuncionarioController', {
			$scope: $scope, 
			$routeParams: {funcionarioId: 1}, 
			Funcionario: {
				get: function(){ 
					return {id: 1};
				}
			}
		});
		$scope.init();
		expect($scope.funcionario.id).not.toBeUndefined();
	}));
});