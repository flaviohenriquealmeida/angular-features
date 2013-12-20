angular.module('recursos', ['ngResource']).factory('Funcionario', function($resource) {
	return $resource('/funcionarios/:id');
});
