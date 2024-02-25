"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "✨Say Hello✨";
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID
    ) {
      throw new Error("Environment variables are not set");
    }
    if (!form.current) {
      throw new Error("Form is not defined");
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current?.reset();
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.error(error);
        }
      );
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}>
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-stone-950 text-xl rounded-xl flex flex-col gap-8 justify-center p-24">
          <span className="">Dear Aurora Web,</span>
          <textarea
            className="bg-transparent border-b-2 outline-none resize-none"
            rows={6}
            name="user_message"
          />
          <span className="">My email address is:</span>
          <input
            className="bg-transparent border-b-2 outline-none"
            type="email"
            name="user_email"
          />
          <span className="">Regards,</span>
          <button className="bg-stone-300 text-black rounded p-4 font-semibold">
            Send
          </button>
          {success && (
            <span className="text-green-500 font-semibold">
              Your message has been sent successfully
            </span>
          )}
          {error && (
            <span className="text-red-500 font-semibold">
              An error occurred while sending your message. Please try again
              later.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
