import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactModal.css";

type Props = {
  onClose: () => void;
};

function ContactModal({ onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Configure these via Vite env vars or replace the fallback values
  const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
  const TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const templateParams = {
      from_name: name,
      from_email: email,
      message: project,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSent(true);
      setLoading(false);
      setTimeout(() => onClose(), 1400);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      const message = err?.text || err?.message || JSON.stringify(err);
      setError(`Error sending message. ${message}`);
      setLoading(false);
    }
  };

  return (
    <div className="contactmodal__overlay" onMouseDown={onClose}>
      <div
        className="contactmodal__dialog"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="contactmodal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <h3 className="contactmodal__title">Write me your project</h3>

        {!sent ? (
          <form className="contactmodal__form" onSubmit={handleSubmit}>
            <label className="contactmodal__label">Name</label>
            <input
              className="contactmodal__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Insert your name"
              required
            />

            <label className="contactmodal__label">Email</label>
            <input
              className="contactmodal__input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insert your email"
              required
            />

            <label className="contactmodal__label">Project</label>
            <textarea
              className="contactmodal__textarea"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Write your project"
              rows={6}
              required
            />

            {error && <div style={{ color: "#d9534f" }}>{error}</div>}

            <button
              type="submit"
              className="button contactmodal__submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}{" "}
              <i className="uil uil-message"></i>
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <strong>Message sent ✓</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
