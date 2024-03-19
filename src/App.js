import { useState } from "react";
import "./App.css";

function App() {

  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (e) => {
    const clickedValue = e.target.value;
    if (clickedValue === "=") {
      try {
        const Result = eval(expression);
        setResult(Result);
      } catch (error) {
        setResult("Error");
      }
    } else if (clickedValue === "AC") {
      setExpression('');
      setResult('');
    } else if (clickedValue === "DE") {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + clickedValue);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={expression} />
          </div>
          <div className="display">
            <input type="text" value={result} />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleButtonClick} />
            <input type="button" value="DE" onClick={handleButtonClick} />
            <input type="button" value="." onClick={handleButtonClick} />
            <input type="button" value="/" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleButtonClick} />
            <input type="button" value="8" onClick={handleButtonClick} />
            <input type="button" value="9" onClick={handleButtonClick} />
            <input type="button" value="*" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleButtonClick} />
            <input type="button" value="5" onClick={handleButtonClick} />
            <input type="button" value="6" onClick={handleButtonClick} />
            <input type="button" value="+" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleButtonClick} />
            <input type="button" value="2" onClick={handleButtonClick} />
            <input type="button" value="3" onClick={handleButtonClick} />
            <input type="button" value="-" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleButtonClick} />
            <input type="button" value="0" onClick={handleButtonClick} />
            <input type="button" value="=" className="equal" onClick={handleButtonClick} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
