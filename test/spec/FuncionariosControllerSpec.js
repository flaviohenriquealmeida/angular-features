describe("FuncionariosController", function() {
	var $scope;

	beforeEach(module('funcionarios'));
	beforeEach(inject(function($injector){
		$scope = $injector.get('$rootScope').$new();
	}));

	it("Should fill Funcionario object when passing route param", inject(function($controller, $location) {
		$controller('FuncionariosController', {
			$scope: $scope, 
			Funcionario: {
				query: function(){ 
					return [{id: 1, salario: 200.0}, {id: 2, salario: 300.0}, {id: 3, salario: 400.0}];
				}, 
				delete: function(parans, func) {
					func();
				}
			}
		});
		$scope.init();
		$scope.remove({id: 1});
		expect($location.path()).toBe('/#/');
	}));
});