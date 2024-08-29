import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };                                   

  const handleClear = () => {
    setInput("");        
  };

  const handleCalculate = () => {        
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="w-64 mx-auto mt-20 p-6 rounded-lg bg-gray-100 shadow-lg">
      <div className="h-12 mb-4 bg-black text-white text-2xl text-right p-2 rounded-md">
        {input}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button className="col-span-1 bg-red-500 text-white p-4 rounded-md" onClick={handleClear}>C</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md"
         onClick={() => handleClick('/')}>/</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md"
         onClick={() => handleClick('*')}>*</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md"
         onClick={() => handleClick('7')}>7</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md" 
        onClick={() => handleClick('8')}>8</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md"
         onClick={() => handleClick('9')}>9</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md" 
        onClick={() => handleClick('-')}>-</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md" 
        onClick={() => handleClick('4')}>4</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md" 
        onClick={() => handleClick('5')}>5</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md" 
        onClick={() => handleClick('6')}>6</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md" 
        onClick={() => handleClick('+')}>+</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md" 
        onClick={() => handleClick('1')}>1</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md"
         onClick={() => handleClick('2')}>2</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md" onClick={() => handleClick('3')}>3</button>
        <button className="col-span-1 bg-green-500 text-white
         p-4 rounded-md" onClick={handleCalculate}>=</button>
        <button className="col-span-2 bg-gray-300 p-4 rounded-md" 
        onClick={() => handleClick('0')}>0</button>
        <button className="col-span-1 bg-gray-300 p-4 rounded-md" 
        onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;


