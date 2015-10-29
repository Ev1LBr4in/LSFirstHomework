
var validation = (function () {


    var init = function () {
        _setUpListner();
    };

    var _setUpListner = function () {
        $('form').on('keydown', '.error', _removeError); 
        $('form').on('reset', _clearForm);  
    };

    var _removeError = function () {
    	$(this).removeClass('error');
    };

    var _clearForm = function (form){
    	var form = $(this);
    	form.find('input, textarea').trigger('hideTooltip');
    	form.find('.error').removeClass('error');
    }

    // QTIP
    var _createQtip = function (element, position) {

    	// Qtip position	
    		if (position === 'right') {
    			position = {
    				my: 'left center',
    				at: 'right center'
    			}
    		}else{
    			position = {
    				my: 'right center',
    				at: 'left center',
    				adjust:{
    					method: 'shift none'
    				}
    			}
    		}

    	// Qtip init
    	element.qtip({
    		content: {
    			text: function(){
    				return $(this).attr('qtip-content');
    			}
    		},
    		show:{
    			event: 'show'
    		},
    		hide:{
    			event: 'keydown hideTooltip'
    		},
    		position: position,
    		style: {
    			classes: 'qtips',
    			tip:{
    				height: 8,
    				width: 12
    			}
    		}
	
	    	}).trigger('show');

    };
	
		//VALIDATION
		var validateForm = function (form) {

			var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"], input[type="submit"], input[type="reset"]'),
				valid = true;

			$.each(elements, function (index, value){
				var element = $(value),
				val = element.val(),
				pos = element.attr('qtip-pos');

				if(val.length === 0){
					element.addClass('error');
					_createQtip(element, pos);
					valide=false;
				}

		});
		return valid;
    };

    return {
        init:init,
        validateForm: validateForm 
    };

})();

validation.init();