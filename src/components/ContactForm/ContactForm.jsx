import React from "react";
import "./ContactForm.css";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mldryqbw");
  if (state.succeeded) {
    return <p>Thanks for letter! We will reply soon &#x1F9E1;</p>;
  }
  return (
    <form
      className="contact__form"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mldryqbw"
      method="POST"
    >
      <label htmlFor="name">Your Name:</label>
      <input
        className="contact__name"
        id="name"
        type="text"
        name="name"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Submit your email:</label>
      <input
        className="contact__email"
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">Tell us what do you want to see in Japan?</label>
      <textarea
        className="contact__message"
        id="message"
        name="message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="contact__button"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
