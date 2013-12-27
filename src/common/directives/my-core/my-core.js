angular.module('myCore', []).directive('myCurrency', function($filter) {

	return {
	  require: 'ngModel',
	  link: function(scope, element, attrs, ngModel) {
	  	
	    ngModel.$parsers.push(function(data) {
	    	if(data) {
	    		return parseFloat(data.replace('.', '').replace(',','.'));
	    	} else {
	    		return 0.00;
	    	}
	    	
	    });

	    ngModel.$formatters.push(function(data) {
	    	return $filter('currency')(data, '');
	    });
	  }
	}
}).directive('myDate', function() {

	return {
		require: '^ngModel',
	    restrict: 'A',
	    scope:{
	        myDate: '=ngModel'
	    },
	     link: function(scope, element, attrs, ngModelCtrl) {
	     	
	     	ngModelCtrl.$formatters.unshift(function(modelValue) {
	     		return modelValue ? moment(modelValue).format(attrs.format) : "";
	     	});

	     	ngModelCtrl.$parsers.unshift(function(viewValue) {
	     		var mDate = moment(viewValue, attrs.format);
	     		return mDate.isValid() ? mDate.toDate(): undefined;
	     	});
	     }
	 }
 });