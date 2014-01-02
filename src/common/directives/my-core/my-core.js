angular.module('myCore', []).directive('myCurrency', function($filter) {
	
	var exp = /^\s*(?:[1-9]\d{0,2}(?:\.\d{3})*|0)(?:,\d{1,2})?$/;

	return {
	  require: 'ngModel',
	  link: function(scope, element, attrs, ctr) {
	  	
	    ctr.$parsers.push(function(data) {
	    	if(data) {
	    		if(exp.test(data)) {
	    			ctr.$setValidity('currency', true);
	    			// escaped \.
	    			return parseFloat(data.replace(/\./g, '').replace(/,/g,'.'));
	    		} else {
	    			ctr.$setValidity('currency', false);
	    		}
	    	} else {
	    		return 0.00;
	    	}
	    });

	    ctr.$formatters.push(function(data) {
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
	     link: function(scope, element, attrs, ctr) {
	     	
	     	ctr.$formatters.unshift(function(modelValue) {
	     		return modelValue ? moment(modelValue).format(attrs.format) : "";
	     	});

	     	ctr.$parsers.unshift(function(viewValue) {
	     		var mDate = moment(viewValue, attrs.format);
	     		return mDate.isValid() ? mDate.toDate(): undefined;
	     	});
	     }
	 }
 });