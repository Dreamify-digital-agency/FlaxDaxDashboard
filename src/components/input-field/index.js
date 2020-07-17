import React, { useState } from "react";
import Editable from './editable'
import "./index.css";

const InputField = (props) => {
  const { previousValue, propertyName } = props;
  const [inputText, setInputText] = useState(previousValue);
  
  return (
    <div className="input-field-container">
      {propertyName}
      <Editable>
      <input
        type="text"
        name="task"
        placeholder="Write a task name"
        value={inputText}
        onChange={e => setInputText(e.target.value)}/>
      </Editable>
    </div>
  );
};

export default InputField;
