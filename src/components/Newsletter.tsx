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

    // Basic form validation
    if (!values.fullName.trim() || !values.email.trim()) {
      alert("Please enter your full name and email.");
      return;
    }
    {/* .send("service_rmihqvf", "template_022wjoe", values, "7DJX-VaZmQXFU3_yJ") */}
    emailjs
      .send("service_08m1wiw", "template_8b88igj", values, "4UDRjSQKlKIX9WDLC")
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
      {/*  bg-white shadow-lg  border-gray */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray rounded-xl p-4 ">
        {/* <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden border border-gray rounded-xl p-4 "> */}
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
            className="mb-6  bg-white block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 focus:border-primary border-gray-300 rounded-md shadow-sm"
          />
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-6  bg-white block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 focus:border-primary border-gray-300 rounded-md shadow-sm"
          />
          <Button className="bg-primary text-secondary" type="submit">Join</Button>
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

