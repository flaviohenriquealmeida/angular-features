angular.module('components', [])
.directive('bsPainel', function() {
	return {
		restrict: 'E',
		transclude: true, 
		scope: {
			titulo: '@'
		},
		templateUrl: '../common/directives/bspainel.html'
	}
}).directive('bsBotao', function() {

	return {
		restrict: 'E', 
		scope: {
			label: '@',
			callback: '&executar'
		}, 
		template: '<buttom class="btn btn-primary" ng-click="callback()">{{label}}</buttom>'
	}
}).directive('real', function($filter) {

	return {
	  require: 'ngModel',
	  link: function(scope, element, attrs, ngModel) {
	  	// View to Model
	    ngModel.$parsers.push(function(data) {
	    	if(data) {
	    		return parseFloat(data.replace('.', '').replace(',','.'));
	    	} else {
	    		return 0.00;
	    	}
	    	
	    });

	    //Model to View
	    ngModel.$formatters.push(function(data) {
	    	//ngModel.$setViewValue($filter('currency')(data, ''));
	    	//ngModel.$render();
	    	return $filter('currency')(data, '');
	    });


	    /*
	
		$render is the result of a value passing from the model to the view.
$	setViewValue is the start of passing a value from the view to the model.

	    */
	  }
	}
});

/*
.directive('dinheiro', function() {
	return {
		restrict: 'A', 
		ngModel: '=', 
		link: function(scope, element, attrs) {

			scope.$watch(attrs.ngModel, function() {
       			console.log("Changed"); 
   			 });
		}
	}

	*/
/*
var FLOAT_REGEXP = 
app.directive('smartFloat', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (FLOAT_REGEXP.test(viewValue)) {
          ctrl.$setValidity('float', true);
          return parseFloat(viewValue.replace(',', '.'));
        } else {
          ctrl.$setValidity('float', false);
          return undefined;
        }
      });
    }
  };
});
*/






