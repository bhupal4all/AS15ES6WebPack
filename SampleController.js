import angular from 'angular';
import RandomNumbers from './Sample.service.js';

class SampleController {
	constructor(RandomNumbers) {
		this.service = RandomNumbers;
		this.numbers=[];
		this.title = 'Loading from SampleController using RandomNumbers service';
		
		for(let i=0; i<5; i++) {
			this.numbers.push(this.service.getNumber());
		}
		
		console.log('SampleController created');
	}
	
	reload() {
		this.numbers=[];
		for(let i=0; i<5; i++) {
			this.numbers.push(this.service.getNumber());
		}
	}
};

export default SampleController