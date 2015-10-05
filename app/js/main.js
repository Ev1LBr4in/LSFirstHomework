$(document).ready(function($) {
     console.log("я на главной странице");    
});


$(document).ready(function() {

//POPUP WINDOW
	$('#addproj-button').on('click', function(e) {
		$('#addproj').bPopup({
	        opacity: 0.6,
            positionStyle: 'fixed',
            speed: 450,
            transition: 'slideBack'
		});
	});

	$('#addproj-close').on('click', function(e){
		var bPopup = $('#addproj').bPopup();
		bPopup.close();
	});

// FAKE INPUT

	$('#addfile-input').change(function() {
       	var fileName = $(this).val().replace("C:\\fakepath\\", "").substring(0,40);
        $('#addfile-text').html(fileName);
     }).change();

});


