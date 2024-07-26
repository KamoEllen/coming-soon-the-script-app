import "./App.css";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Emaill() {
  // ... state
  useEffect(() => emailjs.init("YOUR-PUBLIC-KEY-HERE"), []);
  // Add these
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "YOUR-SERVICE-ID-HERE";
    const templateId = "YOUR-TEMPLATE-ID-HERE"";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: nameRef.current.value,
        recipient: emailRef.current.value
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <aside></aside>
      <form className="for" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="">name</label>
          <input ref={nameRef} placeholder="enter your name" />
        </div>
        <div className="form_group">
          <label htmlFor="">email</label>
          <input ref={emailRef} type="email" placeholder="enter your email" />
        </div>
        <button className="btn" disabled={loading}>
          subscribe
        </button>
      </form>
    </section>
  );
}
