angular.module('funcionarios', ['ngRoute', 'ngAnimate', 'recursos', 'components']).config(function($routeProvider) {
    $routeProvider.when('/', 
    	{
    		templateUrl: 'funcionario/funcionarios.tpl.html',
    		controller: 'FuncionariosController'
    	}
    );
    
    $routeProvider.when('/funcionario/:funcionarioId', 
    	{
    		templateUrl: 'funcionario/funcionario.tpl.html', 
    		controller: 'FuncionarioController'
    	}
    );

    $routeProvider.when('/funcionario/', 
        {
            templateUrl: 'funcionario/funcionario.tpl.html', 
            controller: 'FuncionarioController'
        }
    );
    $routeProvider.otherwise({redirectTo: '/'});
});