angular.module('myCore', []).directive('myCurrency', function($filter) {
	
	var exp = /^\s*(?:[1-9]\d{0,2}(?:\.\d{3})*|0)(?:,\d{1,2})?$/;

	return {
	  require: 'ngModel',
	  link: function(scope, element, attrs, ctr) {
	  	
	    ctr.$parsers.push(function(viewValue) {
	    	if(viewValue) {
	    		if(exp.test(viewValue)) {
	    			ctr.$setValidity('currency', true);
	    			// escaped \.
	    			return parseFloat(viewValue.replace(/\./g, '').replace(/,/g,'.'));
	    		} else {
	    			ctr.$setValidity('currency', false);
	    			return undefined;
	    		}
	    	} else {
	    		return 0.00;
	    	}
	    });

	    ctr.$formatters.push(function(modelValue) {
	    	return $filter('currency')(modelValue, '');
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
	     		if(mDate.isValid()) {
	     			ctr.$setValidity('date', true);
	     			return mDate.toDate();
	     		} else {
	     			ctr.$setValidity('date', false);
	     			return undefined;
	     		}
	     	});
	     }
	 }
 });