
import React, { useState } from "react";
import "../styles/JSONEditor.css";

const JSONEditor = ({ schema, onChange }: { schema: any; onChange: (schema: any) => void }) => {
  const [json, setJson] = useState(JSON.stringify(schema, null, 2));
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJson(value);
    try {
      const parsed = JSON.parse(value);
      setError("");
      onChange(parsed);
    } catch (err) {
      setError("Invalid JSON");
    }
  };

  return (
    <div className="json-editor">
      <textarea value={json} onChange={handleChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default JSONEditor;
            