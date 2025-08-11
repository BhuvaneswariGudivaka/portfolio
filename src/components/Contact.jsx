import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-black text-white py-24" id="contact">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Let's Connect
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-300 mb-6">
              I'm always excited to discuss new opportunities, innovative
              projects, or just have a chat about technology. Whether you're
              looking for a developer, have a project in mind, or want to
              connect, I'd love to hear from you!
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
                href="/Bhuvaneswari_Gudivaka_Resume.pdf" // Place PDF in public folder
                download="Bhuvaneswari_Gudivaka_Resume.pdf"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                placeholder="Tell me more about your project or idea..."
                rows="5"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition-colors w-full"
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
