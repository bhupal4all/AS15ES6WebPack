import angular from 'angular';
import usersList from './components/usersList.component.js';
import SampleController from './SampleController.js'

angular
    .module('myApp', [])
    .component('usersList', usersList)
	.controller('SampleController',SampleController)
	.run(function(){
		console.log('ready');
	});