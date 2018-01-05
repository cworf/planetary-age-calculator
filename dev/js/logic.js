class Person {
	constructor(birthDay){
		this.earthSeconds = this.ageSeconds(birthDay); //birthday enters constructor as ms from epoch
		this.earthYears = this.yearRnd();
		this.mercuryYears = Math.round(10 * (this.earthYears / .24)) / 10;
		this.venusYears = Math.round(10 * (this.earthYears / .62)) / 10;
		this.marsYears = Math.round(10 * (this.earthYears / 1.88)) / 10;
		this.jupiterYears = Math.round(10 * (this.earthYears / 11.86)) / 10;
	}

	ageSeconds(bDay){
		const timeNow = Date.now(); //get current date in ms from epoch
		const ageSeconds = (timeNow - bDay) / 1000;
		return ageSeconds;
	}

	yearRnd(){
		const years = this.earthSeconds / 31556926;
		return Math.round(10*years)/10;
	}
}

exports.personModule = Person;
