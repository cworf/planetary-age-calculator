class Person {
	constructor(day, place){
		this.birthDay = day;
		this.earthSeconds = this.ageSeconds(day); //birthday enters constructor as ms from epoch
		this.earthYears = this.yearRnd();
		this.mercuryYears = Math.round(10 * (this.earthYears / .24)) / 10;
		this.venusYears = Math.round(10 * (this.earthYears / .62)) / 10;
		this.marsYears = Math.round(10 * (this.earthYears / 1.88)) / 10;
		this.jupiterYears = Math.round(10 * (this.earthYears / 11.86)) / 10;
		this.lifeExpectancy = this.lifeExp(day, place);
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

	lifeExp(day, place){
		const now = 2018;
		const birthYear = Math.floor(day / 31556926000) + 1970;
		const worldAverageNow = 70;
		const locationMod = {
			"North America" : 10,
			"Latin America" : 4,
			"Asia" : -1,
			"Africa" : -5
		};
		return worldAverageNow + (birthYear - now) * .24 + locationMod[place];
	}
}
exports.personModule = Person;
