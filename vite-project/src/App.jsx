

const App = () => {

  let age = "21";
  return (
    <div>
       {age > 20 ? <h1>You are eligible to vote</h1> : <h1>You are not eligible to vote</h1>}
    </div>
  );
};

export default App;

