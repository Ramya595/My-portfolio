"use client";

import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        const json = await res.json();
        alert("Failed to send message: " + (json?.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30 backdrop-blur-md">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <a
              href="mailto:ramyalatha595@gmail.com"
              className="flex items-center gap-3 text-gray-600 hover:text-black transition"
            >
              <Mail className="w-6 h-6" />
              <span>ramyalatha595@gmail.com</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Ramya595"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              >
                <Github className="w-6 h-6 text-gray-800" />
              </a>

              <a
                href="https://www.linkedin.com/in/ramya-latha/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition"
              >
                <Linkedin className="w-6 h-6 text-blue-700" />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
            <p className="text-sm text-gray-500 mb-4">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
