"use client";

import { useState, useEffect } from "react";
import GravityForm from "../../components/GravityForm";

// A very simple example of dynamic form picking.

const FormPicker = ({ formData, formIds }) => {
  // Set up a state variable to hold the form data.
  const [form, setForm] = useState(null);

  // When the component mounts, pick a random form.

  useEffect(() => {
    // Pick a random form from the list of form IDs.
    const randomFormId = formIds[Math.floor(Math.random() * formIds.length)];
    // Find the form data that matches the random form ID.
    const randomForm = formData[randomFormId];
    // Set the form data to the random form.
    setForm(randomForm);
  }, [formData, formIds]);

  return form ? <GravityForm form={form} /> : <p>Loading...</p>;
};

export default FormPicker;
