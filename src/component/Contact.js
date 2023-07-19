import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  
  function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const validateForm = () => {
      let valid = true;
      const newErrors = { name: "", email: "", message: "" };
  
      if (name.trim() === "") {
        newErrors.name = "Please enter your name";
        valid = false;
      }
  
      if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        newErrors.email = "Please enter a valid email address";
        valid = false;
      }
  
      if (message.trim() === "") {
        newErrors.message = "Please enter a message";
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        setSubmitted(true);
      }
    };
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <h2>Contact Us</h2>
        {submitted ? (
          <p>Thank you for your message! We will get back to you soon.</p>
        ) : (
          <div>
            <Card>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <TextField
                    placeholder="Name"
                    sx={{ margin: "1rem" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                  <TextField
                    placeholder="Email"
                    sx={{ margin: "1rem" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                  <TextField
                    multiline
                    placeholder="Message"
                    sx={{ margin: "1rem" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }
  
  export default Contact;
  