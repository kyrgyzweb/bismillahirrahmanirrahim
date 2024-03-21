import React, {useState} from 'react';

export default function FavoriteColor() {
    const [color, setColor] = useState('red');

    return (
        <div>
            <h3>My favorite Color is: {color}</h3>
            <button type="button" onClick={() => setColor('blue')}>
                Blue
            </button>
            <button type='button' onClick={() => setColor('red')}>Red</button>
        </div>
    )
}