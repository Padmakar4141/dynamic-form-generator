
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../styles/FormGenerator.css";

const FormGenerator = ({ schema }: { schema: any }) => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(z.object({})), // Placeholder
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{schema.formTitle}</h2>
      <p>{schema.formDescription}</p>
      {schema.fields.map((field: any) => (
        <div key={field.id} className="form-field">
          <label>{field.label}</label>
          <Controller
            name={field.id}
            control={control}
            render={({ field }) => {
              switch (field.type) {
                case "text":
                case "email":
                  return <input {...field} placeholder={field.placeholder} />;
                case "select":
                  return (
                    <select {...field}>
                      {field.options.map((option: any) => (
                        <option value={option.value} key={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  );
                case "textarea":
                  return <textarea {...field} placeholder={field.placeholder} />;
                case "radio":
                  return (
                    <div>
                      {field.options.map((option: any) => (
                        <label key={option.value}>
                          <input
                            type="radio"
                            value={option.value}
                            {...field}
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  );
                default:
                  return null;
              }
            }}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormGenerator;
                