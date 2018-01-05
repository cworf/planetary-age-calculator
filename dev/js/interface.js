$(function(){
	$( "#birthday" ).datepicker({
		changeMonth: true,
		changeYear: true
    });
	$('#user-input').submit(function(event){
		const birthday = parseInt($('#birthday').val()),
			place = $('#place').val();
		if (birthday && place) {
			const person = new Person(birthday, place);
		} else {
			alert('please fill out all fields');
		}
	});
});
