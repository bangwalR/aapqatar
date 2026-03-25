"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  division: string;
  message: string;
};

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors placeholder:text-gray-400 min-h-[48px]";

export default function B2BForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-14">
        <CheckCircle
          className="text-gold mx-auto mb-4"
          size={56}
          strokeWidth={1.5}
        />
        <h3 className="text-2xl font-bold text-navy mb-2 font-montserrat">
          Inquiry Received!
        </h3>
        <p className="text-navy/60 max-w-sm mx-auto">
          Thank you for reaching out. Our B2B team will contact you within{" "}
          <strong>24 business hours</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
            Full Name *
          </label>
          <input
            {...register("name", { required: "Required" })}
            className={inputClass}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
            Company *
          </label>
          <input
            {...register("company", { required: "Required" })}
            className={inputClass}
            placeholder="Company name"
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">
              {errors.company.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
            Email *
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
            })}
            className={inputClass}
            placeholder="email@company.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
            Phone
          </label>
          <input
            {...register("phone")}
            className={inputClass}
            placeholder="+974 xxxx xxxx"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
          Distribution Division *
        </label>
        <select
          {...register("division", { required: "Please select a division" })}
          className={inputClass + " bg-white cursor-pointer"}
        >
          <option value="">— Select a division —</option>
          <option value="al-ansari-trading">
            Al Ansari & Partners Trading
          </option>
          <option value="aroma-international">Aroma International</option>
          <option value="french-avenue">French Avenue Perfumes</option>
          <option value="new-indian-packing">New Indian Packing Centre</option>
          <option value="al-naadij-trading">Al Naadij Trading</option>
        </select>
        {errors.division && (
          <p className="text-red-500 text-xs mt-1">{errors.division.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
          Message / Requirements
        </label>
        <textarea
          {...register("message")}
          rows={4}
          className={inputClass + " resize-none"}
          placeholder="Tell us about your business requirements, product categories, or distribution needs..."
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg p-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 bg-navy text-white font-bold py-4 min-h-[52px] rounded-lg hover:bg-navy-light transition-colors disabled:opacity-60 text-sm uppercase tracking-widest group active:scale-95"
      >
        {submitting ? (
          "Sending..."
        ) : (
          <>
            Submit Inquiry
            <Send
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>

      <p className="text-center text-xs text-navy/40">
        By submitting you agree to be contacted by AAP Group regarding your
        inquiry.
      </p>
    </form>
  );
}
