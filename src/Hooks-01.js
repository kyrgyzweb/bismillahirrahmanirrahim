import React, {useState} from "react";

function Toggle() {
    const [toggle, setToggle] = useState();

    return (
        <div>
            <p>The toggle is {toggle}</p>
            <button onClick={() => setToggle('On boldu')}>On</button>
            <button onClick={() => setToggle('Off boldu')}>Off</button>
        </div>
    )

}


export default Toggle;