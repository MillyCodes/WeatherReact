import React from 'react';
// Class extension not needed for stateless functional components, they do not contain state so no need to use class, can just define as a function. *****BUT since props are being used, you must pass it in as an argument***** Can also remove the explicit return since it's implied with the arrow function!

const Weather = props => (
    <div className="weather__info">
        {
            props.city && props.country && <p className="weather__key">Location:
            <span className="weather__value"> {props.city},  {props.country}</span>
            </p>
        }
        {
            props.city && props.country && <p className="weather__key"> Temperature:
            <span className="weather__value"> {props.temperature}ºF</span>
            </p>
        }
        {
            props.city && props.country && <p className="weather__key">Humidity:
            <span className="weather__value"> {props.humidity}%</span>
            </p>
        }
        {
            props.city && props.country && <p className="weather__key">Description:
            <span className="weather__value"> {props.description}.</span>
            </p>
        }
        {
            props.error && <p className="weather__error"> {props.error}</p>
        }
    </div>
)

export default Weather;