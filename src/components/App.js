
import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calculateSum = () => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    };

    setTimeout(calculateSum, 0);
  }, [numbers]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      setNumbers((prevNumbers) => [...prevNumbers, value]);
      e.target.value = "";
    }
  };

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        placeholder="Enter a number"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleChange(e);
          }
        }}
      />

      <h3>Sum: {sum}</h3>
    </div>
  );
}

export default SumCalculator;
