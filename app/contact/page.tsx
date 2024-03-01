"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setSending(true);
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
          setSending(false);
          form.current?.reset();
        },
        (error) => {
          setError(true);
          setSuccess(false);
          setSending(false);
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
        <div className="h-1/4 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className="text-center">
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
          className="h-3/4 lg:h-full lg:w-1/2 bg-stone-950 text-xl rounded-xl flex flex-col gap-2 sm:gap-4 lg:gap-8 justify-center p-6 lg:p-24">
          <span className="">Hello Aurora Web,</span>
          <textarea
            className="bg-transparent border-b-2 outline-none min-h-[2rem]"
            name="user_message"
            placeholder="I'd like to discuss..."
            rows={4}
          />
          <span className="">You can reach me at:</span>
          <input
            className="bg-transparent border-b-2 outline-none"
            type="email"
            name="user_email"
            placeholder="Your email address"
          />
          <span className="">Or call me at (optional):</span>
          <input
            className="bg-transparent border-b-2 outline-none"
            type="tel"
            name="user_phone"
            placeholder="Your phone number (optional)"
          />
          <span className="">Best,</span>
          <input
            className="bg-transparent border-b-2 outline-none"
            type="text"
            name="user_name"
            placeholder="Your name"
          />
          <button
            className="bg-stone-200 text-black rounded p-4 font-semibold"
            disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
          {success && (
            <span className="text-green-500 font-semibold">
              Your message has been sent successfully! We&apos;ll get back to
              you soon.
            </span>
          )}
          {error && (
            <span className="text-red-500 font-semibold">
              Oops! There was an issue sending your message. Please try again
              later.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
