"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CountrySelect } from "@/components/ui/CountrySelect";

const machineryOptions = [
  "Complete CTC line",
  "Complete orthodox line",
  "Rotorvane",
  "Terman CTC",
  "Continuous fermenting machine",
  "Microwave dryer",
  "Vibro fluid bed dryer",
  "Colour sorter",
  "Tea bag machine",
  "Spares & service",
  "Other — to discuss",
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    machinery: machineryOptions[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          country: "",
          machinery: machineryOptions[0],
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="cform rv in" onSubmit={handleSubmit}>
      <div>
        <span className="eyebrow">Enquiry form</span>
        <h3 style={{ marginTop: "12px", fontSize: "22px" }}>
          Tell us about your project
        </h3>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="f1">Your name</label>
          <input
            id="f1"
            type="text"
            placeholder="Full name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="fld">
          <label htmlFor="f2">Company or estate</label>
          <input
            id="f2"
            type="text"
            placeholder="Estate / factory name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="f3">Email</label>
          <input
            id="f3"
            type="email"
            placeholder="you@company.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="fld">
          <label htmlFor="f4">Phone</label>
          <input
            id="f4"
            type="tel"
            placeholder="+00 000 000 0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="frow">
        <div className="fld">
          <label htmlFor="f5">Country</label>
          <CountrySelect
            id="f5"
            value={formData.country}
            onChange={(name) => setFormData({ ...formData, country: name })}
            required
          />
        </div>
        <div className="fld">
          <label htmlFor="f6">Machinery of interest</label>
          <select
            id="f6"
            value={formData.machinery}
            onChange={(e) => setFormData({ ...formData, machinery: e.target.value })}
          >
            {machineryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="fld">
        <label htmlFor="f7">Project brief</label>
        <textarea
          id="f7"
          placeholder="Estate size, current setup, target throughput, timeline…"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
        <Button variant="ink" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send enquiry"}
        </Button>
        <span className="small">We reply within 24 hours, Monday to Saturday.</span>
      </div>

      {submitted && (
        <div className="ok-note show" role="status">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px", flexShrink: 0 }}>
            <path d="M4 12.5l5.2 5.2L20 7" />
          </svg>
          <span>Thank you — the engineering desk will be in touch shortly.</span>
        </div>
      )}
    </form>
  );
};
