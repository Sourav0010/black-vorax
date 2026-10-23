'use client';

import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Play,
  Plus,
  Sparkles,
  Star,
} from 'lucide-react';

const specialties = [
  {
    title: 'Build a harmonious relationship with your partner',
    kind: 'couple',
    color: '#dfe8ff',
    symbol: '♡',
  },
  {
    title: 'Fight stress and anxiety and experience peace',
    kind: 'calm',
    color: '#f8e5ef',
    symbol: '✳',
  },
  {
    title: 'Fight stress and anxiety and experience peace',
    kind: 'heart',
    color: '#d7f5ed',
    symbol: '♡',
  },
  {
    title: 'Find your purpose and achieve new goals',
    kind: 'purpose',
    color: '#f8e7d5',
    symbol: '✦',
  },
];
const reviews = [
  {
    quote:
      'Thanks to the professional approach of the psychologist, I found inner peace and confidence in my abilities. Now I know how to effectively deal with stress and resolve conflicts. Thank you for your support!',
    name: 'Eleanora Rivera',
    role: 'Client for 4 months',
    avatar: 'photo-1534528741775-53994a69daeb',
  },
  {
    quote:
      'The psychologist turned out to be an excellent listener and effective advisor. The sessions helped me understand my emotions and improve my life. I recommend it to anyone looking for help.',
    name: 'Gerardo Stevens',
    role: 'Client for 6 months',
    avatar: 'photo-1500648767791-00dcc994a43e',
  },
  {
    quote:
      'I finally feel heard. Every session gives me practical tools and a little more confidence to handle the things that used to overwhelm me.',
    name: 'Maya Thompson',
    role: 'Client for 3 months',
    avatar: 'photo-1531123897727-8f129e1688ce',
  },
];
const faqs = [
  [
    'How much does a session with a specialist cost?',
    'The first introductory session is free. After that, your specialist will explain their rates and help you choose a plan that works for you.',
  ],
  [
    'How is payment made?',
    'Payment is made no later than 24 hours before the session using the secure link in your account. You can manage your appointments and payments in one place.',
  ],
  [
    'How is the first session going?',
    'Your first meeting is a relaxed conversation about what brought you here, what you would like to change, and how your specialist can support you.',
  ],
  [
    'How many sessions will I need?',
    'It depends on your goals and circumstances. Together with your specialist, you will choose a pace that feels comfortable and review progress along the way.',
  ],
  [
    "I didn't like the specialist, what should I do?",
    'Finding the right fit matters. Tell us what felt off and we will help you choose another specialist without judgement.',
  ],
  [
    'Everything I said at the session — confidential?',
    'Yes. Your sessions are private, and specialists follow professional confidentiality standards, with limited exceptions required by law or safety.',
  ],
  [
    'Can I cancel/reschedule an appointment?',
    'Yes. You can reschedule or cancel from your account. Please check your specialist’s cancellation window to avoid any fees.',
  ],
  [
    'Can I cancel/reschedule an appointment?',
    'Of course. Contact our support team if you need help changing a booking or finding another time.',
  ],
];

function PeopleIllustration() {
  return (
    <svg
      className="people-art"
      viewBox="0 0 430 330"
      role="img"
      aria-label="Colorful illustration of people supporting each other"
    >
      <defs>
        <linearGradient id="shirt" x1="0" x2="1">
          <stop stopColor="#ffc1c8" />
          <stop offset="1" stopColor="#ff8eaa" />
        </linearGradient>
        <linearGradient id="mint" x1="0" x2="1">
          <stop stopColor="#b6f0d9" />
          <stop offset="1" stopColor="#76d8ba" />
        </linearGradient>
      </defs>
      <path
        d="M79 237c-15-46 11-99 50-113 41-14 79 4 106 24 24 18 49 45 70 44 24-1 42-29 59-17 18 13-4 46-24 63-34 30-74 49-121 51-54 3-118-12-140-52Z"
        fill="#e8f5ff"
      />
      <path
        d="M101 191c-22-15-35-39-23-50 12-11 33 13 49 25l23 18-13 24Z"
        fill="#f2a68c"
      />
      <path
        d="M280 204c17-30 41-47 54-34 10 10-10 32-21 48l-15 22Z"
        fill="#f2a68c"
      />
      <path d="M132 155l58-9 18 82-54 13Z" fill="#f8b4c6" />
      <path d="M155 167l28 3-5 60-30 4Z" fill="#ffca4c" />
      <path d="M121 234l48 2-6 43-42 1Z" fill="#9db6ff" />
      <path d="M174 234l28-4 20 45-35 14Z" fill="#f5c2b2" />
      <circle cx="159" cy="120" r="31" fill="#f0b295" />
      <path d="M128 117c-8-38 41-53 59-20l-5 20-16-15-18 18Z" fill="#4b3433" />
      <path d="M139 149l17 12 21-11-1 18-27 8Z" fill="#f0b295" />
      <path d="M197 160l48-17 29 69-50 23Z" fill="url(#mint)" />
      <path d="M216 217l46-8 10 61-45 6Z" fill="#7ed9b9" />
      <path d="M193 223l32 7-4 47-35-2Z" fill="#f4bdac" />
      <circle cx="228" cy="122" r="29" fill="#a96745" />
      <path d="M199 118c-2-37 45-47 58-15l-9 17-16-16-16 17Z" fill="#252525" />
      <path d="M246 171l34 9 3 65-42 0Z" fill="#ffce4c" />
      <path d="M243 244l39 1 10 36-34 7Z" fill="#f3b7a7" />
      <path
        d="M283 205c24 7 38 23 45 35l-11 11c-23-10-43-20-53-34Z"
        fill="#a96745"
      />
      <path
        d="M88 200c-11-23-29-29-37-18-8 12 9 30 25 41l20 12Z"
        fill="#f0b295"
      />
      <path d="M109 170l-21 28 24 24 26-34Z" fill="#ffca4c" />
      <path d="M89 221l42 4 12 53-45 0Z" fill="#9db6ff" />
      <circle cx="108" cy="154" r="24" fill="#d99172" />
      <path d="M85 151c-1-29 33-41 48-17l-4 16-13-12-16 14Z" fill="#252525" />
      <path d="M69 105l8-17 8 17 17 8-17 8-8 17-8-17-17-8Z" fill="#ffd45e" />
      <path d="M327 109l4-11 5 11 11 5-11 4-5 12-4-12-11-4Z" fill="#a6e8d7" />
      <path
        d="M330 258c17-13 32-6 26 8-4 9-19 15-27 21-9-8-23-16-22-26 1-13 14-14 23-3Z"
        fill="#ffb4cb"
      />
      <circle cx="305" cy="74" r="5" fill="#a7bfff" />
      <circle cx="94" cy="70" r="4" fill="#ffb7c8" />
      <path
        d="M350 157l10-7m-6 13 10-7"
        stroke="#a7bfff"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MiniArt({ kind, color }: { kind: string; color: string }) {
  return (
    <div className={`mini-art ${kind}`} style={{ background: color }}>
      <span className="sunburst">✳</span>
      <span className="art-person one" />
      <span className="art-person two" />
      <span className="art-line">{kind === 'purpose' ? '✦' : '♡'}</span>
    </div>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(1);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const shownReviews = [
    reviews[reviewIndex % reviews.length],
    reviews[(reviewIndex + 1) % reviews.length],
  ];
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top" aria-label="Together home">
          <span className="brand-mark" />
          together
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={21} />
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#approaches">Approaches</a>
          <a href="#faq">FAQ</a>
          <a href="#about">About us</a>
          <a href="#therapists">Therapists</a>
          <a href="#business">Business</a>
          <a className="contact-pill" href="#contact">
            Contact us <ArrowUpRight size={13} />
          </a>
        </div>
      </nav>
      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Find inner harmony</p>
          <h1>
            together<span className="title-dot">.</span>
          </h1>
          <div className="hero-bottom">
            <PeopleIllustration />
            <div className="hero-aside">
              <p>
                Find solutions and support in difficult moments of life together
                with a professional psychologist
              </p>
              <div className="button-row">
                <a className="btn btn-dark" href="#contact">
                  Free consultation <ArrowUpRight size={14} />
                </a>
                <a className="btn btn-gradient" href="#therapists">
                  All specialists <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-note">
          <Sparkles size={15} />
          <span>A little support can change everything.</span>
        </div>
      </section>
      <section className="intro wrap" id="about">
        <span className="scribble s1">〰</span>
        <span className="scribble s2">✳</span>
        <span className="scribble s3">◢</span>
        <span className="scribble s4">◜</span>
        <p>
          Our <em>professional</em>
          <br />
          <em className="orange">psychologists</em> are
          <br />
          ready to listen, support
          <br />
          and <em className="orange">help you</em> find a<br />
          way to inner harmony
          <br />
          and mental health.
        </p>
      </section>
      <section className="stats wrap" aria-label="Our results">
        <div className="stat-card blue">
          <strong>12k+</strong>
          <span>
            Clients started
            <br />
            working with our
            <br />
            therapists
          </span>
        </div>
        <div className="stat-card pink">
          <strong>98%</strong>
          <span>
            Clients found their
            <br />
            therapist the first
            <br />
            time
          </span>
        </div>
        <div className="stat-card mint">
          <strong>10 min</strong>
          <span>
            The average time
            <br />
            of searching for a<br />
            specialist
          </span>
        </div>
        <div className="stat-card peach">
          <strong>100%</strong>
          <span>
            Our specialists
            <br />
            are respectful to
            <br />
            customers
          </span>
        </div>
      </section>
      <section className="selection wrap" id="therapists">
        <div className="section-heading">
          <h2>The top 7% of specialists are selected</h2>
          <p>
            We carry out a detailed vetting of specialists so that you can trust
            only qualified professionals.
          </p>
        </div>
        <div className="selection-content">
          <div className="steps">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="selection-copy">
            <h3>Education and license:</h3>
            <p>
              Carrying out a thorough verification of education and the
              availability of the appropriate license.
            </p>
            <p>
              It is important that professionals have advanced degrees in
              psychology or related fields and are licensed to practice in
              accordance with the law.
            </p>
            <a className="btn btn-dark" href="#contact">
              Free consultation <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="portrait-collage">
            <div className="portrait p1">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=320&h=320&fit=crop&crop=faces"
                alt="Therapist portrait"
              />
            </div>
            <div className="blob b1" />
            <div className="portrait p2">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&h=320&fit=crop&crop=faces"
                alt="Therapist portrait"
              />
            </div>
            <div className="portrait p3">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=320&h=320&fit=crop&crop=faces"
                alt="Therapist portrait"
              />
            </div>
            <div className="blob b2" />
            <span className="tiny-star">✦</span>
          </div>
        </div>
      </section>
      <section className="approaches wrap" id="approaches">
        <div className="section-heading">
          <h2>
            Psychotherapy helps to
            <br />
            achieve harmony in life
          </h2>
        </div>
        <div className="approach-grid">
          {specialties.map((item, i) => (
            <a href="#contact" className="approach-card" key={item.kind}>
              <span className="card-number">
                0{i + 1} <ArrowUpRight size={12} />
              </span>
              <MiniArt kind={item.kind} color={item.color} />
              <p>{item.title}</p>
            </a>
          ))}
        </div>
      </section>
      <section className="reviews wrap">
        <div className="section-heading">
          <h2>
            We have already helped
            <br />
            more than 12,000 customers
          </h2>
        </div>
        <div className="review-track">
          {shownReviews.map((review, i) => (
            <article
              className={`review-card ${i === 0 ? 'primary' : 'secondary'}`}
              key={review.name}
            >
              <span className="quote-mark">“</span>
              <p>{review.quote}</p>
              <div className="review-author">
                <img
                  src={`https://images.unsplash.com/${review.avatar}?w=96&h=96&fit=crop&crop=faces`}
                  alt=""
                />
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                  <div className="stars" aria-label="5 out of 5 stars">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="slider-controls">
          <button
            onClick={() =>
              setReviewIndex(
                (reviewIndex + reviews.length - 1) % reviews.length,
              )
            }
            aria-label="Previous review"
          >
            <ArrowLeft size={15} />
          </button>
          <button
            className="dark-circle"
            onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
            aria-label="Next review"
          >
            <ArrowRight size={15} />
          </button>
        </div>
      </section>
      <section className="faq wrap" id="faq">
        <div className="section-heading">
          <h2>FAQ</h2>
          <p>Everything you need to know before getting started.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], i) => (
            <div
              className={`faq-item ${activeFaq === i ? 'active' : ''}`}
              key={`${question}-${i}`}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                aria-expanded={activeFaq === i}
              >
                <span className="faq-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{question}</span>
                {activeFaq === i ? (
                  <Plus className="minus" size={15} />
                ) : (
                  <ChevronDown size={15} />
                )}
              </button>
              {activeFaq === i && <p className="faq-answer">{answer}</p>}
            </div>
          ))}
        </div>
      </section>
      <section className="cta wrap" id="contact">
        <div className="cta-copy">
          <p className="eyebrow">A good place to start</p>
          <h2>
            The first hour of a session
            <br />
            with a specialist is free!
          </h2>
          <a href="mailto:hello@together.example" className="btn btn-gradient">
            Try now <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="cta-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="cta-person">☻</div>
          <div className="cta-cushion">✦</div>
          <span>✳</span>
        </div>
      </section>
      <footer className="footer wrap">
        <div className="footer-brand">
          <a className="brand light" href="#top">
            <span className="brand-mark" />
            together
          </a>
          <p>
            Find inner harmony
            <br />
            together.
          </p>
          <span className="copyright">
            © 2026 Together. All rights reserved.
          </span>
        </div>
        <div className="footer-col">
          <strong>Pages</strong>
          <a href="#approaches">Approaches</a>
          <a href="#faq">FAQ</a>
          <a href="#about">About us</a>
          <a href="#therapists">Therapists</a>
          <a href="#business">Business</a>
        </div>
        <div className="footer-col">
          <strong>Legal information</strong>
          <a href="#privacy">Privacy policy</a>
          <a href="#terms">Terms & conditions</a>
        </div>
        <div className="footer-col social-col" id="business">
          <strong>Contact us</strong>
          <div className="socials">
            <a href="mailto:hello@together.example" aria-label="Email">
              <span>@</span>
            </a>
            <a href="#instagram" aria-label="Instagram">
              {/* <Instagram size={14} /> */}
            </a>
            <a href="#youtube" aria-label="YouTube">
              {/* <Youtube size={14} /> */}
            </a>
            <a href="#videos" aria-label="Videos">
              <Play size={12} />
            </a>
          </div>
        </div>
        <a className="back-top" href="#top" aria-label="Back to top">
          <ArrowUpRight size={18} />
        </a>
      </footer>
    </main>
  );
}
