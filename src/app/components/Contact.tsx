"use client";
import React, { useState, useTransition, useRef, useEffect } from 'react';
import styles from './Contact.module.css';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { useActionState } from "react";
import { submitForm } from '../actions';

export default function Contact() {
  const [state, formAction] = useActionState(submitForm, { message: "" });
  const [isPending, startTransition] = useTransition();
  const [isCaptchaSolved, setIsCaptchaSolved] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (state.message === "Form Submitted Successfully") {
      formRef.current?.reset();
      turnstileRef.current?.reset();
      setIsCaptchaSolved(false);
    }
  }, [state]);

  return (
    <div className={styles.container}>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Contact Us</h2>
        <input type="text" name="name" placeholder="Full Name" required className={styles.input} />
        <input type="email" name="email" placeholder="Email Address" required className={styles.input} />
        <textarea name="message" placeholder="Your Message" required className={styles.textarea}></textarea>
        <Turnstile ref={turnstileRef} siteKey="0x4AAAAAABtRqLVlPY7f3Da6" onSuccess={() => setIsCaptchaSolved(true)} />
        <button type="submit" className={styles.button} disabled={!isCaptchaSolved || isPending}>
          {isPending ? "Submitting..." : "Submit Form"}
        </button>
      </form>
      <span className={styles.result}>{state.message}</span>
    </div>
  );
}
