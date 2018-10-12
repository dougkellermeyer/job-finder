var app = angular.module('jobFinder', 
    [
        'ngMessages',
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'ui.router',
        'angularUtils.directives.dirPagination'
    ]);

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressApp = express();

//Connect to mongoose 

mongoose.connect('http://vm-1-rmartin9.paychex.com:8080/');









