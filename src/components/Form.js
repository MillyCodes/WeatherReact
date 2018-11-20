import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="New York" />
            <input type="text" name="country" placeholder="US" />
            <button>Get Weather</button>
        </form>
    </div>
);

export default Form; 