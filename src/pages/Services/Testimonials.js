import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import "./testimonials.css";

const quotes = [
  {
    message:
      "I highly recommend Victor for your website development needs. He exceeded my expectations, delivered on time and created a beautiful and functional website using HTML, CSS and JavaScript.",
    client: "Joshua",
  },
  {
    message:
      "Victor exceeded my expectations and delivered a high-performance, visually stunning Next.js website. He is extremely knowledgeable and detail-oriented. I highly recommend him.",
    client: "Tobi",
  },
  {
    message:
      "I was impressed by Victor's ability to deliver a visually appealing and user-friendly React website. His technical and design skills are exceptional. I recommend him for any React project.",
    client: "Tomi",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIdx((idx - 1 + quotes.length) % quotes.length);
  const next = () => setIdx((idx + 1) % quotes.length);

  return (
    <div className="svc-testimonials">
      <div className="svc-tcard">
        <FaQuoteLeft className="svc-tcard__icon" />
        <p className="svc-tcard__text">{quotes[idx].message}</p>
        <span className="svc-tcard__author">— {quotes[idx].client}</span>
      </div>
      <div className="svc-testimonials__nav">
        <button onClick={prev} aria-label="Previous">
          <AiOutlineLeft />
        </button>
        <div className="svc-testimonials__dots">
          {quotes.map((_, i) => (
            <button
              key={i}
              className={`svc-dot${i === idx ? " svc-dot--active" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next">
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}
