import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > 500) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.firstname.trim()) errs.firstname = "First name is required";
    if (!formData.lastname.trim()) errs.lastname = "Last name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email is invalid";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSending(true);

      const templateParams = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mobile: formData.mobile,
        subject: formData.subject,
        message: formData.message,
      };

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setSubmitted(true);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
        setErrors({});
        toast.success("Message sent successfully!");
      } catch (error) {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.");
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl mt-28">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Connect With Me
        </h2>
        {submitted && (
          <p className="text-green-600 text-center mb-4">
            Form submitted successfully!
          </p>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Firstname *</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm">{errors.firstname}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Lastname *</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm">{errors.lastname}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Message *</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">Word limit: 500</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              disabled={sending}
              className={`${
                sending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white px-6 py-2 rounded-md transition`}
            >
              {sending ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
