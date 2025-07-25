import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 flex flex-col justify-center items-center gap-10">
      <div className="w-full max-w-6xl mx-auto">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 text-sm">{"> CONTACT_INTERFACE.EXE"}</div>
          </div>

          <div className="terminal-content">
            <div className="mb-6">
              <span className="text-green-300">{"nandan@matrix:~$ "}</span>
              <span className="text-green-400">./establish_connection.sh</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-green-300 text-xl font-bold mb-6">{"> CONTACT INFORMATION"}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">{">"}</span>
                    <span className="text-green-400/80">EMAIL:</span>
                    <a
                      href="mailto:nandankumarmle@gmail.com"
                      className="text-green-300 hover:text-green-200 transition-colors"
                    >
                      nandankumarmle@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">{">"}</span>
                    <span className="text-green-400/80">MEDIUM:</span>
                    <a href="#" className="text-green-300 hover:text-green-200 transition-colors">
                      medium.com/in/nandankumarmle
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">{">"}</span>
                    <span className="text-green-400/80">GITHUB:</span>
                    <a href="https://www.github.com/NandanKumar07" className="text-green-300 hover:text-green-200 transition-colors">
                      NandanKumar07
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">{">"}</span>
                    <span className="text-green-400/80">LINKEDIN:</span>
                    <a href="https://www.linkedin.com/in/nandan-kumar-787944229/" className="text-green-300 hover:text-green-200 transition-colors">
                      Nandan Kumar
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-green-300 text-xl font-bold mb-6">{"> SEND MESSAGE"}</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-green-400/80 text-sm mb-2">{"> NAME:"}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-green-400/30 rounded px-3 py-2 text-green-400 focus:border-green-400 focus:outline-none"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div>
                    <label className="block text-green-400/80 text-sm mb-2">{"> EMAIL:"}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-green-400/30 rounded px-3 py-2 text-green-400 focus:border-green-400 focus:outline-none"
                      placeholder="Enter your email..."
                    />
                  </div>

                  <div>
                    <label className="block text-green-400/80 text-sm mb-2">{"> MESSAGE:"}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-black border border-green-400/30 rounded px-3 py-2 text-green-400 focus:border-green-400 focus:outline-none resize-none"
                      placeholder="Enter your message..."
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="matrix-btn w-full">
                    {isSubmitting ? <span>{"> TRANSMITTING..."}</span> : <span>{"> SEND MESSAGE"}</span>}
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-12 text-center text-green-400/70">
              {"> CONNECTION ESTABLISHED. READY TO RECEIVE TRANSMISSION."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
