import styled from "styled-components";
import { useState } from "react";

const FormStyles = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }
  label {
    margin-top: 2rem;
  }
  input,
  textarea {
    padding: 0.5rem 1rem;
    border: 0;
    border-bottom: 1px solid #b0b0b0;
    color: black;
    background: transparent;
  }
  button {
    margin-top: 1.8rem;
    padding: 0.8rem;
    border: 0;
    border-radius: var(--rounding-slight);
    background-color: #176e6b;
    color: white;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.7;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      setInputs({
        name: "",
        surname: "",
        email: "",
        message: "",
      });

      setFormStatus({ state: "success" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormStyles>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Förnamn</label>
        <input
          type="text"
          id="name"
          value={inputs.name}
          required
          onChange={handleChange}
        ></input>

        <label>Efternamn</label>
        <input
          type="text"
          id="surname"
          value={inputs.surname}
          required
          onChange={handleChange}
        ></input>

        <label>E-Post</label>
        <input
          type="text"
          id="email"
          value={inputs.email}
          required
          onChange={handleChange}
        ></input>

        <label>Meddelande</label>
        <textarea
          id="message"
          value={inputs.message}
          required
          onChange={handleChange}
        ></textarea>

        <button>Skicka →</button>

        {formStatus.state === "success" ? (
          <div>Meddelande skickat</div>
        ) : (
          <div></div>
        )}
      </form>
    </FormStyles>
  );
};

export default ContactForm;
