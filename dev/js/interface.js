$(function(){
	$( "#birthday" ).datepicker({
		changeMonth: true,
		changeYear: true,
		yearRange: "1920:2018"
    });
	$('#user-input').submit(function(event){
		event.preventDefault();
		const birthday = Date.parse($('#birthday').val()),
			place = $('#place').val();
			console.log(birthday);
		if (birthday && place) {
			const person = new Person(birthday, place);
			console.log(person);
		} else {
			alert('please fill out all fields');
		}
	});
});
