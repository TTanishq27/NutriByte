import React from 'react';
import axios from 'axios';
import JSONData from "./something.json";
// import {getFoodItems} from "../components/something"

function API() {
    
    
    const input_ref = React.useRef(null);
    const handleSubmit = async () => {
        const state = input_ref.current.value;
        const something = await axios.get(`http://localhost:8000/${state}`);
        console.log(something.data[0]);
    }
    return (
        <div>
            <input ref={input_ref}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default API;
