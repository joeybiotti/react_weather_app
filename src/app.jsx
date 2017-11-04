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
        //build class names w/ dynamic data
        var weatherClass = classNames('wi wi-owm-' + this.state.weather);
        var bgColorClass = 'weather-widget'; 

        //set bg color based on temp
        if(this.state.temp >= 30){
            bgColorClass += 'very-warm';
        }
        else if(this.state.temp > 20 && this.state.temp < 30){
            bgColorClass += 'warm';
        }
        else if(this.state.temp > 10 && this.state.temp < 20){
            bgColorClass += 'normal';
        }
        else if(this.state.temp > 0  && this.state.temp < 10){
            bgColorClass += 'cold';
        }
        else if(this.state.temp <= 0){
            bgColorClass += 'very-cold';
        }

        // render the DOM elements
        return <div className = {bgColorClass}>
            <h1 className="city">{cities[currentCity]}</h1>
            <div className="weather">
                <i className= {weatherClass}></i>
            </div>
            <section className="weather-details">
                <div className="temp"><span className="temp-number">{this.state.temp}</span><span className="wi wi-degrees"></span></div>
                <div className="humidity"><i className="wi wi-raindrop"></i>{this.state.humidity} %</div>
                <div className="wind"><i className="wi wi-small-craft-advisory"></i>{this.state.wind}<span className="vel">Km/h</span></div>
            </section>
            </div>
    },
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