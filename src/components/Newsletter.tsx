import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const [buttonText, setButtonText] = useState('Send Email');

  useEffect(() => {
    emailjs.init('7DJX-VaZmQXFU3_yJ');
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setButtonText('Sending...');
    
    const serviceID = 'default_service';
    const templateID = 'template_022wjoe';

    emailjs.sendForm(serviceID, templateID, event.currentTarget)
      .then(() => {
        setButtonText('Send Email');
        alert('Sent!');
      }, (err) => {
        setButtonText('Send Email');
        alert(JSON.stringify(err));
      });
  };

  return (
    <div > {/*className="flex justify-center items-center  min-h-screen bg-gray-100 p-4 */}
      <div className="w-full max-w-md p-6 bg-white border border-black rounded-lg shadow-md">
        <form id="form" onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="to_name" className="text-sm text-gray-700">Email</label>
            <input 
              type="text" 
              name="to_name" 
              id="to_name" 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="to_act_name" className="text-sm text-gray-700">Name</label>
            <input 
              type="text" 
              name="to_act_name" 
              id="to_act_name" 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
          </div>
          <button 
            type="submit" 
            id="button" 
            className="w-full py-2 px-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

{/*
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Define styles as a JavaScript object or use styled-components
const styles = {
  field: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    fontSize: '12px',
    color: '#777',
  },
  input: {
    display: 'block',
    minWidth: '250px',
    lineHeight: '1.5',
    fontSize: '14px',
  },
  submit: {
    display: 'block',
    padding: '6px 30px',
    fontSize: '14px',
    backgroundColor: '#4460AA',
    color: '#fff',
    border: 'none',
  }
};

const Newsletter = () => {
  const [buttonText, setButtonText] = useState('Send Email');
  
  useEffect(() => {
    emailjs.init('7DJX-VaZmQXFU3_yJ');
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setButtonText('Sending...');
    
    const serviceID = 'default_service';
    const templateID = 'template_022wjoe';

    emailjs.sendForm(serviceID, templateID, event.currentTarget)
      .then(() => {
        setButtonText('Send Email');
        alert('Sent!');
      }, (err) => {
        setButtonText('Send Email');
        alert(JSON.stringify(err));
      });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div style={styles.field}>
        <label htmlFor="to_name" style={styles.label}>Email</label>
        <input type="text" name="to_name" id="to_name" style={styles.input} />
      </div>
      <div style={styles.field}>
        <label htmlFor="to_act_name" style={styles.label}>Name</label>
        <input type="text" name="to_act_name" id="to_act_name" style={styles.input} />
      </div>
      <input type="submit" id="button" value={buttonText} style={styles.submit} />
    </form>
  );
};

export default Newsletter;
*/}

{/*import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Newsletter: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSending(true);
    setError(null);

    const serviceID = 'service_08m1wiw';
    const templateID = 'template_8b88igj';

    try {
      await emailjs.sendForm(serviceID, templateID, event.currentTarget);
      setSending(false);
      alert('Sent!');
    } catch (err) {
      setSending(false);
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('An unknown error occurred.'));
      }
      alert('An error occurred: ' + (err instanceof Error ? err.message : 'An unknown error occurred.'));
    }
  };

  // Helper function to convert error to a string
  const formatError = (error: Error | null): string => {
    if (error) {
      return error.message;
    } else {
      return 'An unknown error occurred.';
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="to_name">To Name</label>
        <Input type="text" name="to_name" id="to_name" />
      </div>
      <Button type="submit" disabled={sending}>
        {sending ? 'Sending...' : 'Send Email'}
      </Button>
      {error && <p className="error">{formatError(error)}</p>}
    </form>
  );
};

export default Newsletter;
*/}

{/* ME- .send("service_rmihqvf", "template_022wjoe", values, "7DJX-VaZmQXFU3_yJ") */}
    {/* Gabi- .send("service_08m1wiw", "template_8b88igj", values, "4UDRjSQKlKIX9WDLC") */}
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
  const [status, setStatus] = useState(""); // To track success or error
  const [loading, setLoading] = useState(false); // To track loading state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic form validation
    if (!values.fullName.trim() || !values.email.trim()) {
      alert("Please enter your full name and email.");
      return;
    }

    setLoading(true); // Start loading

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
          setLoading(false); // Stop loading
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("ERROR");
          setLoading(false); // Stop loading
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
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray rounded-xl p-4">
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
            
            
            className="mb-6 bg-white block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 focus:border-primary border-gray-300 rounded-md shadow-sm"
          />
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            //id="email"  Adding a unique id attribute
            
            id="to_name"
            className="mb-6 bg-white block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 focus:border-primary border-gray-300 rounded-md shadow-sm"
          />
          <Button
            className={`bg-primary text-secondary ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            type="submit"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Sending..." : "Join"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
*/}

//

{/* .send("service_rmihqvf", "template_022wjoe", values, "7DJX-VaZmQXFU3_yJ") */}
    {/* Gabi- .send("service_08m1wiw", "template_8b88igj", values, "4UDRjSQKlKIX9WDLC") */} 
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

    // Basic form validation
    if (!values.fullName.trim() || !values.email.trim()) {
      alert("Please enter your full name and email.");
      return;
    }
   
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
*/}
///NOOOT HERE

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

