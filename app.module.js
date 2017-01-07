import angular from 'angular';
import usersList from './components/usersList.component.js';
import SampleController from './SampleController.js'
import RandomNumbers from './Sample.service.js';

angular
    .module('myApp', [])
    .component('usersList', usersList)
	.service('RandomNumbers',RandomNumbers)
	.controller('SampleController',SampleController)
	.run(function(){
		console.log('ready');
	}); 