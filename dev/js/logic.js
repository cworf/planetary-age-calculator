class Person {
	constructor(birthDay){
		this.earthSeconds = this.ageSeconds(birthDay); //birthday enters constructor as ms from epoch
		this.earthYears = this.yearRnd();
		this.mercuryYears = this.earthYears / .24;
		this.venusYears = this.earthYears / .62;
		this.marsYears = this.earthYears / 1.88;
		this.jupiterYears = this.earthYears / 11.86;
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
