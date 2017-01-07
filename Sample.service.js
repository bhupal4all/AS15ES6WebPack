import angular from 'angular';

class RandomNumbers {
	constructor() {
		this.numbers = [1,2,3,4,5,6,7,8,9,10];
		console.log('from service');
	}
	
	getNumber() {
		const totalNumbers = this.numbers.length;
		const rand = Math.floor(Math.random()*totalNumbers);
		
		return this.numbers[rand];
	}
};

export default RandomNumbers