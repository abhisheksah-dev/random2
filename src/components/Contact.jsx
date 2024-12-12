import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}. We have received your message: "${message}"`);
    setName("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 my-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
