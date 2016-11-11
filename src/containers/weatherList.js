import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkLine from 'sparkline';
import _ from 'lodash';
import Map from 'map';

class WeatherList extends Component {
    
    
    renderWeather(cityData){

        const { name }      = cityData.city;
        const temps         = cityData.list.map( weather => (weather.main.temp - 273.15)*1.8 + 32 );
        const humidity      = cityData.list.map( weather =>  weather.main.humidity );
        const pressure      = cityData.list.map( weather =>  weather.main.pressure );
        const { lon, lat }  = cityData.city.coord;

        console.log('Humidity: ', humidity);
        console.log('Pressure: ', pressure);

        return(
            <tr key={ name }>
                <td><Map lon={lon} lat={lat} /></td>
                <td><SparkLine data={temps} svgHeight={120} svgWidth={180} color="blue" units="F"/></td>
                <td><SparkLine data={pressure} svgHeight={120} svgWidth={180} color="black" units="hPa" /></td>
                <td><SparkLine data={humidity} svgHeight={120} svgWidth={180} color="green" units="%" /></td>
            </tr>
        );
    }
    
    
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);