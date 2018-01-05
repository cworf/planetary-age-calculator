const Person = require('./../dev/js/logic.js').personModule;

describe( 'Person', function(){
	it('should convert users age into earth years', function(){
		const person = new Person(575494240000);
		// expect(person.earthYears > 29 && person.earthYears < 30).toBeTruthy(); //will be true until Im 30
		expect(person.earthYears).toEqual(29.8); //this will be true for a short while
	});
	it('should calculate users age in seconds', function(){
		const person = new Person(575494240000),  //575494240000 will be true (is my birthday of march 27th 1988 from time of writing this)
			earthSec = person.earthSeconds;
		expect(earthSec > 938521743 && earthSec < 940336128).toBeTruthy(); //this is a range of about + or - 10 days in seconds from my current age
	});
	it('should convert earth years into Mercury years', function(){

	});
	it('should convert earth years into Mercury years', function(){

	});
	it('should convert earth years into Mercury years', function(){

	});
	it('should convert earth years into Mercury years', function(){

	});
	it('should calculate life expectancy in earth years', function(){

	});
	it('should return dead if age is greater than life expectancy', function(){

	});

});
