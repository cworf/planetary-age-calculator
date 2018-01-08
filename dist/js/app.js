(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	$("#birthday").datepicker({
		changeMonth: true,
		changeYear: true
	});
	$('#user-input').submit(function (event) {
		event.preventDefault();
		var birthday = Date.parse($('#birthday').val()),
		    place = $('#place').val();
		console.log(birthday);
		if (birthday && place) {
			var person = new Person(birthday, place);
			console.log(person);
		} else {
			alert('please fill out all fields');
		}
	});
});

var Person = function () {
	function Person(day, place) {
		_classCallCheck(this, Person);

		this.birthDay = day;
		this.earthSeconds = this.ageSeconds(day); //birthday enters constructor as ms from epoch
		this.earthYears = this.yearRnd();
		this.mercuryYears = Math.round(10 * (this.earthYears / .24)) / 10;
		this.venusYears = Math.round(10 * (this.earthYears / .62)) / 10;
		this.marsYears = Math.round(10 * (this.earthYears / 1.88)) / 10;
		this.jupiterYears = Math.round(10 * (this.earthYears / 11.86)) / 10;
		this.lifeExpectancy = this.lifeExp(day, place);
	}

	_createClass(Person, [{
		key: 'ageSeconds',
		value: function ageSeconds(bDay) {
			var timeNow = Date.now(); //get current date in ms from epoch
			var ageSeconds = (timeNow - bDay) / 1000;
			return ageSeconds;
		}
	}, {
		key: 'yearRnd',
		value: function yearRnd() {
			var years = this.earthSeconds / 31556926;
			return Math.round(10 * years) / 10;
		}
	}, {
		key: 'lifeExp',
		value: function lifeExp(day, place) {
			var now = 2018;
			var birthYear = Math.floor(day / 31556926000) + 1970;
			var worldAverageNow = 70;
			var locationMod = {
				"North America": 10,
				"Latin America": 4,
				"Asia": -1,
				"Africa": -5
			};
			return worldAverageNow + (birthYear - now) * .24 + locationMod[place]; //.24 is the linear change in life expectancy per birth year
		}
	}]);

	return Person;
}();

exports.personModule = Person;

},{}]},{},[1]);
