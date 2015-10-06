// $(document).ready(function($) {
//      console.log("я на главной странице");    
// });


$(document).ready(function() {
//POPUP WINDOW
	$('#addproj-button').on('click', function(e) {
		$('#addproj').bPopup({
            positionStyle: 'fixed',
            speed: 450,
            transition: 'slideBack',
            onClose: function(){
            	this.find('form').trigger("reset");
            }
		});
	});

// FAKE INPUT

	$('#addfile-input').change(function() {
       	var fileName = $(this).val().replace("C:\\fakepath\\", "").substring(0,40);
        $('#addfile-text').html(fileName);
     });

// PLACEHOLDER


if(!Modernizr.input.placeholder){
$('input, textarea').placeholder();
}
});


