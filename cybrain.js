// console.log(1 + +"2" + "2"); // 1 22

// let a=false;
// a= (5===9) ? true: false;  
// console.log(a) //false

import React, { useState } from 'react';

const DynamicInputComponent = () => {
  const [inputs, setInputs] = useState([{ id: 1, value: '' }]);

  const handleAddInput = (index) => {
    const newInput = { id: inputs.length + 1, value: '' };
    const updatedInputs = [...inputs];
    updatedInputs.splice(index + 1, 0, newInput);
    setInputs(updatedInputs);
  };

  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].value = value;
    setInputs(updatedInputs);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={input.id}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <button onClick={() => handleAddInput(index)}>
            +{input.id}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DynamicInputComponent;
