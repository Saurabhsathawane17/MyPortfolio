import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_khy4z57",  //EmailJS Service ID
        "template_1lm42yk",  //EmailJS Template ID
        form.current,
        "6hZjIeBmfexb7buhe"  //EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold transition-colors">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-gray-50 dark:bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center transition-colors">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;