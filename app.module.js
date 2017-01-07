import angular from 'angular';
import usersList from './components/usersList.component.js';

angular
    .module('myApp', [])
    .component('usersList', usersList);