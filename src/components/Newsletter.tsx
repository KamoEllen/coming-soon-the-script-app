import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateEmail(email)) {
      console.log("Email is valid, proceed to subscribe:", email);
      // Here you can proceed with your subscription logic, e.g., sending the email
      // Reset the form after submission
      setFullName("");
      setEmail("");
      setStatusMessage("Email successfully sent!");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000); // Clear the message after 3 seconds
    } else {
      console.log("Invalid email. Please enter a valid email address.");
      // You can display an error message to the user if needed
      setStatusMessage("Invalid email. Please enter a valid email address.");
    }
  };

  const validateEmail = (email: string) => {
    // A simple email validation using regex
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Community
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Be the first to know when we launch new features and updates.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="full name"
            value={fullName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            value={email}
            onChange={handleChange}
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>

        {statusMessage && (
          <p className="text-green-500 text-center mt-4">{statusMessage}</p>
        )}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};

export default Newsletter;

{/*import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic form validation
    if (!values.fullName.trim() || !values.email.trim()) {
      alert("Please enter your full name and email.");
      return;
    }

    emailjs
      .send("service_rmihqvf", "template_022wjoe", values, "YOUR_USER_ID_HERE")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("ERROR");
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container py-8 sm:py-12 lg:py-18">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray rounded-xl p-4 ">
        {status === "SUCCESS" && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
            Your message was submitted successfully.
          </div>
        )}
        {status === "ERROR" && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
            Oops! Something went wrong. Please try again later.
          </div>
        )}
        <form onSubmit={handleSubmit} className="p-4 sm:p-2">
          <Input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="mb-6 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 focus:border-primary border-gray-300 rounded-md shadow-sm"
          />
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-6 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 focus:border-primary border-gray-300 rounded-md shadow-sm"
          />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;


{/*
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
  
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send("service_rmihqvf", "template_022wjoe", values, "7DJX-VaZmQXFU3_yJ")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
           
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      
      <div className="container py-8 sm:py-12 lg:py-18">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray rounded-xl p-4 ">
        {status && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-12 mb-4 rounded">
            <p>Your Message Was Submitted Successfully.</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="p-4 sm:p-2">
          <Input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="mb-6 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 focus:border-primary border-gray-300 rounded-md shadow-sm"
          />
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-6 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 focus:border-primary border-gray-300 rounded-md shadow-sm"
          />

          
          <Button type="submit">Send Message</Button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Newsletter;
*/}

