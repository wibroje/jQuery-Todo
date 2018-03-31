$(document).ready(function(){

//Grabbing the form and using a submit function
$('#forminput').submit(function(e){
	e.preventDefault();
//Adding variable for the input value
		let addList = $('#input').val();
//Appending list items plus input value to unordered list
$('ul').append($('<li>-' + addList + '</li>').fadeIn('slow'));
//Resetting the input to empty so the field clears
$('#input').val('');
	});


//Grabbing the button and using a click function
$('#btn').click(function(e){
//Same as above

//I couldn't get these two actions to work in one function

//I did it easily using vanilla so I can't really figure out why its not working using jEasy
let addList = $('#input').val();

$('ul').append($('<li>-' + addList + '</li>').fadeIn('slow'));
			
$('#input').val('');
	});
//Urgency feature!
$(document).on('click','li', function(	){
	$(this).css('font-weight','bold').css('color', 'red');
	});

//Adding deletion functionality
//Using double click method
//strikethrough 
//wait and then fade away and delete
$(document).on('dblclick','li', function(){
        $(this).css('text-decoration', 'line-through').css('color','black').delay(2000).toggleClass('strike').fadeOut('slow');
      });


});




