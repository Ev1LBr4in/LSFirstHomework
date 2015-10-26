var feedback = (function () {

    var init = function () {
        _setUpListner();
    }

    var _setUpListner = function () {
        $('#login').on('submit', _submitForm);       
    };

    var _submitForm = function(ev){
    	console.log("Отправка формы");
    	ev.preventDefault();

    	var form = $(this),
    		url = '../' + $(this).attr('action'),
    		defObj = _ajaxForm(form, url);
    }

    var _ajaxForm = function (form, url){
    	console.log("ajax запрос с проверкой");
    	if (!validation.validateForm(form)) return false;
    };

    return {
        init:init

    };

})();

feedback.init();