// // // $(document).ready(function($) {
// // //      console.log("я на главной странице");    
// // // });


// // 
// // //POPUP WINDOW
// // 	$('#addproj-button').on('click', function(e) {
// // 		$('#addproj').bPopup({
// //             positionStyle: 'fixed',
// //             speed: 450,
// //             transition: 'slideBack',
// //             onClose: function(){
// //             	this.find('form').trigger("reset");
// //             }
// // 		});
// // 	});
// // });

// // // // FAKE INPUT

// // 	$('#addfile-input').change(function() {
// //        	var fileName = $(this).val().replace("C:\\fakepath\\", "").substring(0,40);
// //         $('#addfile-text').html(fileName);
// //      });

// // // 


var myModule = (function () {

// INITIALIZATION
    var init = function () {
        _setUpListner();
    };

// LISTNER
    var _setUpListner = function (){
        $('#addproj-button').on("click", _showPopup); // open popup window
        $("#addprojectbox-form").on("submit", _addProj); // Project add
        $('.addprojectbox-inputfiles').on('change', _fileUpload);
    }


// FILEUPLOAD

var _fileUpload = function (){

    var fileName = $(this).val().replace("C:\\fakepath\\", "");
    $('#addfile-text')
                    .val(fileName)
                    .trigger('hideTooltip')
                    .removeClass('error');

}


// POPUP WINDOW
    var _showPopup = function (ev){
        ev.preventDefault(); 
        console.log("вызов окна");
        $('#addproj').bPopup({
            positionStyle: 'fixed',
            speed: 150,
            transition: 'slideBack',
            onClose: function() {
                $(".addprojectbox-errormsgbox").hide();
                $(".addprojectbox-successmsgboxwrap").hide();
                $('#addproj').find("form").trigger("reset");        
             }

        });
    }

// ADD PROJECT
    var _addProj = function (ev) {
        console.log("Добавление проекта");
        ev.preventDefault();

        //Обявляем переменные
        var form = $(this),
            url = '../' + $(this).attr('action');
            serverAnswer = _ajaxForm(form, url);

           serverAnswer
            .done(function(ans){
                console.log(ans);
                if(ans.status === "OK"){
                    console.log(ans.text);
                    $(".addprojectbox-successmsgboxwrap").show();
                }
                else{
                    console.log(ans.text);
                    $(".addprojectbox-errormsgbox").show();
                    $(".addprojectbox-errormsgtext").text(ans.text);
                }
            })
            .always(function(){
                console.log("complete");

            });
    };

// AJAX  
    var _ajaxForm = function (form, url) {

        // Проверить форму
        // Собрать данные формы
        // Вернуть ответ сервера

        if (!validation.validateForm(form)) return false;

        data = form.serialize();

        var result = $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            data: data
            }).fail(function(ans){
                console.log("Проблемы в PHP");
                $(".addprojectbox-errormsgbox").show();
                $(".addprojectbox-errormsgtext").text('На сервере произошла ошибка');
            });

        return result;
    };



    return{
        init:init
    }

})();








$(document).ready(function() {
    
    myModule.init();
    
    // PLACEHOLDER FOR IE8
    
    if(!Modernizr.input.placeholder){
    $('input, textarea').placeholder();
    }
    
    // ADD PROJECT ERROR MSG COLOSE
    $('.addproject-errorboxclose').on("click", function(){
        $(".addprojectbox-errormsgbox").hide();
    });
    // ADD PROJECT SUCCESS MSG COLOSE
    $('.addproject-successboxclose').on("click", function(){
        $(".addprojectbox-successmsgboxwrap").hide();
    });
    
    
});