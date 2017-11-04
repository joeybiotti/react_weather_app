var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var Api = require('./utils/api');

var query = '';
var cities = [];
var citiesWeather = [];
var currentCity = 0;

var Weather = React.createClass({
    render: function() {

    }
});

// Assign the React comps to DOM Element
var element = React.createElement(Weather, {});
ReactDOM.render(element, document.querySelector('.container'));

//Init data for UI
getInitialState: function() {
    return {
        weather: '',
        temp: 0,
        humidity: 0,
        wind: 0
    }
},