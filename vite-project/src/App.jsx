import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(""); // default value empty string

  return (
    <div style={{ padding: "20px" }}>
      <h2>Check Voting Eligibility</h2>

      {/* Input field */}
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />

      {/* Conditional Rendering */}
      {age && Number(age) >= 18 ? (
        <h3>You are eligible to vote ✅</h3>
      ) : age ? (
        <h3>You are not eligible to vote ❌</h3>
      ) : (
        <h3>Please enter your age 🙂</h3>
      )}
    </div>
  );
};

export default App;

