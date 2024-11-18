
import React, { useState } from "react";
import FormGenerator from "./components/FormGenerator";
import JSONEditor from "./components/JSONEditor";
import "./styles/App.css";

const App = () => {
  const [schema, setSchema] = useState({
    formTitle: "Project Requirements Survey",
    formDescription: "Please fill out this survey about your project needs",
    fields: [
      {
        id: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name",
      },
      // Add other fields here
    ],
  });

  return (
    <div className="app-container">
      <div className="editor">
        <JSONEditor schema={schema} onChange={setSchema} />
      </div>
      <div className="form-preview">
        <FormGenerator schema={schema} />
      </div>
    </div>
  );
};

export default App;
            