import React from "react";

export default function FooterContactForm() {
  return (
    <form className="bg-accentDarkSecondary px-8 sm:px-12 lg:px-16 py-8 w-full md:w-1/2 rounded-lg shadow-lg">
      <div className="w-full">
        <h2 className="text-3xl font-semibold mb-6 text-dark text-center uppercase tracking-wide">
          Get In Touch
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full px-6 py-3 text-dark placeholder-gray-500 bg-light border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark transition-all"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            className="w-full px-6 py-3 text-dark placeholder-gray-500 bg-light border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark transition-all"
          />
        </div>

        <textarea
          rows={4}
          placeholder="Your Message"
          name="message"
          className="w-full px-6 py-3 text-dark placeholder-gray-500 bg-light border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark transition-all mb-6"
        />

        <button className="w-full px-6 py-3 text-xl font-semibold border-2 border-dark text-light bg-dark hover:bg-light hover:text-dark uppercase tracking-wider transition-all duration-200 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-light">
          Submit
        </button>
      </div>
    </form>
  );
}
