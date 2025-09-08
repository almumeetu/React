import {useState} from 'react';

const conditionalRendering = () => {
    const [gpa, setGpa] = useState("");

    return (
        <div style={{padding: "20px"}}>
            <h2>Check Gpa Eligibility For Milestone School </h2>

            <input type="number"
            placeholder='Enter Your GPA'
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            style={{padding: "5px", marginBottom: "10px"}} 
            />

            {/* Conditional Rendering */}
        </div>
    );
};

export default conditionalRendering;