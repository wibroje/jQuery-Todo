$(document).ready(function(){



	$('#forminput').submit(function(e){
		e.preventDefault();
		let addList = $('#input').val();
				$('ul').prepend('<li>' + addList + '</li');
			$('#input').val('');
	});

	$('#btn').click(function(e){
		e.preventDefault();
		let addList = $('#input').val();
				$('ul').prepend('<li>' + addList + '</li');
			$('#input').val('');
	});

});




