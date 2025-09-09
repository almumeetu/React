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
            {gpa && Number(gpa) >= 4 ? (
                <h3>You are eligible to Milestone School ✅</h3>
            ) : gpa ? (
                <h3>You are not eligible to Milestone School ❌</h3>
            ) : (
                <h3>Please enter your gpa 🙂</h3>
            )}
        </div>
    );
};

export default conditionalRendering;