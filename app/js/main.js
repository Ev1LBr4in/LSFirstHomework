$(document).ready(function($) {
     console.log("я на главной странице");    
});

//POPUP WINDOW
$(document).ready(function() {

	$('#addproj-button').on('click', function(e) {
		$('#addproj').bPopup({
			modalClose: false,
            opacity: 0.6,
            positionStyle: 'fixed'
		});
	});

	$('#addproj-close').on('click', function(e){
		var bPopup = $('#addproj').bPopup();
		bPopup.close();
	});


	$('#addfile-input').change(function() {
       	var fileName = $(this).val().replace("C:\\fakepath\\", "");
        $('#addfile-text').html(fileName);
     }).change();




});

// FAKE FAIL INPUT

