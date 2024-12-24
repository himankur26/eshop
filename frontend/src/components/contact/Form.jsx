//import React from "react";
import { red } from "@mui/material/colors";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset(); // Reset the form after successful submission
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ddd", borderRadius: "4px" }}
          />
          {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>}
        </div>

        {/* Subject Field */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            {...register("subject", { required: "Subject is required" })}
            style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ddd", borderRadius: "4px" }}
          />
          {errors.subject && <p style={{ color: "red", fontSize: "12px" }}>{errors.subject.message}</p>}
        </div>

        {/* Message Field */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            rows="5"
            style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ddd", borderRadius: "4px" }}
          />
          {errors.message && <p style={{ color: "red", fontSize: "12px" }}>{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
