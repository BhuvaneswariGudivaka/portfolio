import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Email
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "⚠ Please fill in all required fields." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: "error", message: "⚠ Please enter a valid email address." });
      return;
    }

    // Success message
    setStatus({ type: "success", message: "✅ Thank you! Your message has been sent." });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-black text-white py-24" id="contact">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Let&apos;s Connect
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-300 mb-6">
              I&apos;m always excited to discuss new opportunities, innovative
              projects, or just chat about technology. Whether you&apos;re
              looking for a developer, have a project in mind, or want to
              connect, I&apos;d love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <span>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:gudivakabhuvaneswari25@gmail.com"
                    className="hover:underline text-cyan-300"
                  >
                    gudivakabhuvaneswari25@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-green-400 text-xl" />
                <span>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+917995453177"
                    className="hover:underline text-green-300"
                  >
                    +91 7995453177
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span>
                  <strong>Location:</strong> Andhra Pradesh, India
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-3">Quick Actions</h5>
              <a
                href="/Bhuvaneswari_Gudivaka_Resume.pdf"
                download="Bhuvaneswari_Gudivaka_Resume.pdf"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-all duration-300"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more about your project or idea... *"
                rows="5"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>

              {/* Status message */}
              {status.message && (
                <p
                  className={`text-sm font-medium ${
                    status.type === "error" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
