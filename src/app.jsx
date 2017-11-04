var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var Api = require('./utils/api');

var query = '';
var cities = [];
var citiesWeather = [];
var currentCity = 0;