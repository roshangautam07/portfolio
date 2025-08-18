"use client";
import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setResult("Sending....");
    const formData = new FormData(form);

    formData.append("access_key", "d21b1182-099f-41fd-ad74-560261528c00");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <h2 className={styles.title}>Contact Us</h2>
        <input type="text" name="name" placeholder="Full Name" required className={styles.input} />
        <input type="email" name="email" placeholder="Email Address" required className={styles.input} />
        <textarea name="message" placeholder="Your Message" required className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>Submit Form</button>
      </form>
      <span className={styles.result}>{result}</span>
    </div>
  );
}
