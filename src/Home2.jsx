import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import {
  FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope,
  FaArrowRight, FaBars, FaTimes, FaCode, FaUsers, FaLaptopCode,
  FaExternalLinkAlt, FaUserGraduate, FaBriefcase, FaGraduationCap,
  FaCalendarAlt, FaMapMarkerAlt, FaChalkboardTeacher, FaVideo,
  FaHeart, FaQuoteLeft, FaAward
} from 'react-icons/fa';
import {
  SiGooglemeet, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss
} from 'react-icons/si';
import mypic from './assets/mypic.png';

/* ─────────────────────────────────────────────────────────────
   NEON GLOW HELPERS  (inline styles keep Tailwind JIT happy)
───────────────────────────────────────────────────────────── */
const GLOW = {
  indigo: '0 0 16px rgba(99,102,241,0.7), 0 0 40px rgba(99,102,241,0.3)',
  indigoSoft: '0 0 8px rgba(99,102,241,0.4)',
  purple: '0 0 16px rgba(168,85,247,0.7), 0 0 40px rgba(168,85,247,0.3)',
  textIndigo: '0 0 18px rgba(99,102,241,0.9), 0 0 40px rgba(99,102,241,0.4)',
  border: '0 0 0 1px rgba(99,102,241,0.6), 0 0 20px rgba(99,102,241,0.2)',
};

/* ─────────────────────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────────────────────── */
const navItems = ['Home', 'Journey', 'Projects', 'Students', 'Contact'];

const personalProjects = [
  {
    title: 'ZN ERP',
    description: 'Complete student management system with attendance tracking, grade management, course enrollment, and fee collection for ZN Infotech.',
    tech: ['MERN', 'Tailwind CSS', 'MongoDB', 'JWT'],
    link: 'https://zn-erp.vercel.app',
    deployed: true,
    category: 'personal',
    year: '2025',
  },
  {
    title: 'All India PES',
    description: 'Professional examination platform for competitive tests with real-time results, analytics dashboard, and certificate generation.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    link: 'https://allindiapes.vercel.app',
    deployed: true,
    category: 'personal',
    year: '2025',
  },
  {
    title: 'Learning Resources',
    description: 'Curated resource hub for learners with categorised links, topics, and guided paths for web development beginners.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
    link: 'https://resources-lyart-eight.vercel.app/',
    deployed: true,
    category: 'personal',
    year: '2024',
  },
];

const studentProjects = [
  {
    title: 'Safargo',
    description: 'Uber clone with real-time ride booking, driver tracking, fare calculation, and admin dashboard.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://safargo.vercel.app/',
    deployed: true,
    category: 'student',
    studentName: 'Final Year Project',
    year: '2025',
  },
  {
    title: 'RideRestRoti',
    description: 'All-in-one platform combining ride booking, hotel reservation, and food delivery in a single application.',
    tech: ['MERN', 'Tailwind', 'Razorpay', 'Google Maps API'],
    link: '#',
    deployed: false,
    category: 'student',
    studentName: 'Team Project',
    year: '2025',
  },
  {
    title: 'Hiring Platform',
    description: 'Job portal with company listings, resume upload, application tracking, and interview scheduling.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    deployed: false,
    category: 'student',
    studentName: 'Major Project',
    year: '2024',
  },
  {
    title: 'Hospital Management',
    description: 'Complete hospital solution with patient registration, appointment booking, prescription management, and billing.',
    tech: ['MERN', 'Redux', 'Tailwind CSS'],
    link: '#',
    deployed: false,
    category: 'student',
    studentName: 'Team Project',
    year: '2024',
  },
  {
    title: 'Hostel Management',
    description: 'Hostel administration with room allocation, fee management, complaint system, and mess menu tracking.',
    tech: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
    link: '#',
    deployed: false,
    category: 'student',
    studentName: 'Group Project',
    year: '2024',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with product catalog, cart, wishlist, payment gateway, and order tracking.',
    tech: ['MERN', 'Stripe', 'Redux Toolkit'],
    link: '#',
    deployed: false,
    category: 'student',
    studentName: 'Individual Project',
    year: '2025',
  },
  {
    title: 'Food Delivery App',
    description: 'Restaurant food ordering system with live order tracking, restaurant dashboard, and delivery partner integration.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#',
    deployed: false,
    category: 'student',
    studentName: 'Final Year Project',
    year: '2025',
  },
];

const skills = [
  { name: 'MongoDB',    Icon: SiMongodb,     color: '#22c55e' },
  { name: 'Express.js', Icon: SiExpress,     color: '#94a3b8' },
  { name: 'React',      Icon: SiReact,       color: '#22d3ee' },
  { name: 'Node.js',    Icon: SiNodedotjs,   color: '#22c55e' },
  { name: 'Tailwind',   Icon: SiTailwindcss, color: '#22d3ee' },
  { name: 'Python',     Icon: FaCode,        color: '#60a5fa' },
];

const stats = [
  { Icon: FaUsers,       value: '50+',  label: 'Students Trained' },
  { Icon: SiGooglemeet,  value: '200+', label: 'Online Sessions' },
  { Icon: FaLaptopCode,  value: '7+',   label: 'Student Projects' },
  { Icon: FaAward,       value: '100%', label: 'Satisfaction Rate' },
];

/* ─────────────────────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────────────────────── */

/** Animated section heading with glowing underline */
function SectionTitle({ pre, highlight, sub }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
        {pre} <span className="text-indigo-400" style={{ textShadow: GLOW.textIndigo }}>{highlight}</span>
      </h2>
      <div className="w-16 h-0.5 mx-auto mb-4 rounded-full bg-indigo-500"
        style={{ boxShadow: GLOW.indigo }} />
      {sub && <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

/** Floating orb blob */
function Orb({ className, color = 'indigo' }) {
  const bg = color === 'purple' ? 'bg-purple-600' : 'bg-indigo-600';
  return (
    <div
      className={`absolute rounded-full mix-blend-screen filter blur-3xl opacity-10 pointer-events-none ${bg} ${className}`}
      style={{ animation: 'pulse 4s ease-in-out infinite' }}
    />
  );
}

/** Subtle grid overlay */
function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
  );
}

/** NeonCard – glass card with animated neon border glow on hover */
function NeonCard({ children, className = '' }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-gray-800/70 backdrop-blur-sm border rounded-2xl transition-all duration-300 ${className}`}
      style={{
        borderColor: hovered ? 'rgba(99,102,241,0.7)' : 'rgba(55,65,81,0.8)',
        boxShadow: hovered ? GLOW.indigoSoft : 'none',
      }}
    >
      {hovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(99,102,241,0.06) 0%, transparent 60%)',
          }}
        />
      )}
      {children}
    </div>
  );
}

/** Fade-up animation wrapper */
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function Home() {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData]         = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [scrolled, setScrolled]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const allProjects = [...personalProjects, ...studentProjects];
  const filteredProjects =
    activeCategory === 'all'      ? allProjects
    : activeCategory === 'personal' ? personalProjects
    : studentProjects;

  const scrollToSection = (id) => {
    // alert(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    // setTimeout(() => setIsMenuOpen(false), 300);

    // if(window.innerWidth < 768) {
    //   setIsMenuOpen(false);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  /* ── Stagger children ── */
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const fadeItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden font-sans selection:bg-indigo-600/40">

      {/* ══════════════════════ NAVBAR ══════════════════════ */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/80 backdrop-blur-xl border-b border-indigo-500/10'
            : 'bg-transparent'
        }`}
        style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer select-none"
              onClick={() => scrollToSection('home')}
            >
              <span className="text-xl md:text-2xl font-extrabold tracking-tight">
                Kapil{' '}
                <span className="text-indigo-400" style={{ textShadow: GLOW.textIndigo }}>
                  Bhargava
                </span>
              </span>
            </motion.div>

            {/* Desktop links */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="hidden md:flex items-center gap-8"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  variants={fadeItem}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-gray-400 hover:text-indigo-300 transition-colors text-sm font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-indigo-400 transition-all duration-300"
                    style={{ boxShadow: GLOW.indigo }} />
                </motion.button>
              ))}
            </motion.div>

            {/* Burger */}
            <button
              className="md:hidden text-gray-300 hover:text-indigo-400 transition-colors p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
            >
              <div className="flex flex-col px-4 py-4 gap-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/10 text-left py-2.5 px-4 rounded-lg transition-all text-sm font-medium"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden"
      >
        {/* Background */}
        <GridOverlay />
        <Orb className="w-80 h-80 sm:w-[500px] sm:h-[500px] -top-24 -left-24" color="indigo" />
        <Orb className="w-72 h-72 sm:w-[400px] sm:h-[400px] bottom-0 -right-20" color="purple" />
        <Orb className="w-48 h-48 sm:w-64 sm:h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="indigo" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Left ── */}
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Availability badge */}
              <div
                className="inline-flex items-center gap-2.5 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full mb-7 text-sm"
                style={{ boxShadow: '0 0 12px rgba(34,197,94,0.15)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-green-400 font-medium">Web Developer</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-4 tracking-tight">
                Kapil{' '}
                <span
                  className="text-indigo-400"
                  style={{ textShadow: GLOW.textIndigo }}
                >
                  Bhargava
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg md:text-xl text-indigo-300/80 font-medium mb-5 leading-relaxed">
                From Video Creator → Software Trainer → Web Developer
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 text-xs sm:text-sm mb-8">
                {[
                  { icon: FaMapMarkerAlt, text: 'Based in Lucknow' },
                  { icon: FaGraduationCap, text: 'B.Tech CSE 2024' },
                  { icon: FaChalkboardTeacher, text: 'Ex-Trainer @ Z.N. Infotech' },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <Icon size={12} className="text-indigo-400" />
                    {text}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 overflow-hidden"
                  style={{ boxShadow: GLOW.indigo }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <FaArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-indigo-500 hover:text-indigo-400 text-gray-300 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                >
                  Contact Me
                </button>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-5">
                {[
                  { href: 'https://github.com/kapil-bhargava',                    Icon: FaGithub,   hoverClass: 'hover:text-white' },
                  { href: 'https://www.instagram.com/zn_infotech/',               Icon: FaInstagram, hoverClass: 'hover:text-pink-400' },
                  { href: 'https://www.linkedin.com/in/kapil-bhargava-zninfotech/', Icon: FaLinkedin, hoverClass: 'hover:text-blue-400' },
                  { href: 'https://wa.me/919565017342',                           Icon: FaWhatsapp, hoverClass: 'hover:text-green-400' },
                ].map(({ href, Icon, hoverClass }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 ${hoverClass} transition-all duration-200 text-xl hover:-translate-y-0.5`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Profile image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Rotating neon ring */}
                <div
                  className="absolute inset-[-12px] rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 60%, rgba(99,102,241,0.8) 80%, rgba(168,85,247,0.8) 90%, transparent 100%)',
                    animation: 'spin 6s linear infinite',
                    filter: 'blur(2px)',
                  }}
                />
                {/* Static ring */}
                <div
                  className="absolute inset-[-2px] rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(99,102,241,0.6), rgba(168,85,247,0.6))',
                  }}
                />
                {/* Image */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                  style={{ boxShadow: '0 0 60px rgba(99,102,241,0.4), 0 0 120px rgba(168,85,247,0.2)' }}
                >
                  <img
                    src={mypic}
                    alt="Kapil Bhargava"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 sm:-right-8 bg-gray-900 border border-indigo-500/50 rounded-xl px-3 py-2 text-xs font-semibold"
                  style={{ boxShadow: GLOW.indigoSoft }}
                >
                  <span className="text-indigo-400">50+</span>
                  <span className="text-gray-400 ml-1">Students</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-2 -left-4 sm:-left-8 bg-gray-900 border border-purple-500/50 rounded-xl px-3 py-2 text-xs font-semibold"
                  style={{ boxShadow: '0 0 12px rgba(168,85,247,0.3)' }}
                >
                  <span className="text-purple-400">200+</span>
                  <span className="text-gray-400 ml-1">Sessions</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════ JOURNEY ══════════════════════ */}
      <section id="journey" className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/20" />
        <GridOverlay />

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionTitle
            pre="My"
            highlight="Journey"
            sub="From shooting videos to writing code — a story of continuous growth"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                Icon: FaVideo,
                period: '2020 – 2022',
                title: 'Video Creator',
                body: 'Started my creative journey with video shooting and editing. Learned the art of visual storytelling, color grading, and post-production. This foundation taught me attention to detail and creative thinking.',
              },
              {
                Icon: FaCode,
                period: '2023 – 2024',
                title: 'Learning & B.Tech',
                body: 'Pursued B.Tech CSE from SRIMT, Lucknow. Simultaneously learned Web Development, Python, Android, and Flutter from Z.N. Infotech. Completed my degree in 2024 with focus on full-stack development.',
              },
              {
                Icon: FaChalkboardTeacher,
                period: '2024 – 2025',
                title: 'Software Trainer',
                body: 'Became a Software Development Trainer at Z.N. Infotech. Taught 50+ students, conducted 200+ online sessions via Google Meet. Mentored students to build real-world projects.',
              },
            ].map(({ Icon, period, title, body }, i) => (
              <motion.div key={title} variants={fadeItem}>
                <NeonCard className="h-full p-6 sm:p-7 group">
                  {/* Icon circle */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 bg-indigo-500/10 group-hover:bg-indigo-500/20"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.3)' }}
                  >
                    <Icon className="text-2xl text-indigo-400" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-medium mb-2">
                    <FaCalendarAlt size={10} />
                    {period}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                </NeonCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote block */}
          <FadeUp delay={0.3} className="mt-10">
            <div
              className="rounded-2xl p-6 sm:p-8 border border-indigo-500/20 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.05) 100%)',
                boxShadow: '0 0 40px rgba(99,102,241,0.08)',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              <div className="flex items-start gap-4">
                <FaQuoteLeft className="text-3xl text-indigo-500/50 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    My journey from video editing to teaching coding wasn't planned — it evolved. Video taught me to
                    see the big picture while focusing on details. Teaching forced me to simplify complex concepts.
                    Development gave me the tools to build what I imagine. Today, I combine all three to create
                    impactful web solutions and mentor aspiring developers.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {['50+ Students Trained', '200+ Online Sessions', '10+ Projects Mentored'].map((tag) => (
                      <span
                        key={tag}
                        className="bg-indigo-500/15 border border-indigo-500/30 px-3 py-1 rounded-full text-xs text-indigo-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════ SKILLS ══════════════════════ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <Orb className="w-64 h-64 bottom-0 right-0 opacity-5" color="purple" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionTitle
            pre="Technical"
            highlight="Skills"
            sub="Technologies I work with daily"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {skills.map(({ name, Icon, color }) => (
              <motion.div key={name} variants={fadeItem}>
                <NeonCard className="p-5 text-center group cursor-default">
                  <Icon
                    className="text-4xl mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ color, filter: `drop-shadow(0 0 8px ${color}88)` }}
                  />
                  <p className="text-xs sm:text-sm font-semibold text-gray-300">{name}</p>
                </NeonCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ PROJECTS ══════════════════════ */}
      <section id="projects" className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/20" />
        <GridOverlay />

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionTitle
            pre="My"
            highlight="Work"
            sub="Personal projects and student work I've delivered"
          />

          {/* Category filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-10">
            {[
              { id: 'all',      label: 'All Projects',     Icon: FaCode },
              { id: 'personal', label: 'Personal / Client', Icon: FaBriefcase },
              { id: 'student',  label: 'Student Projects',  Icon: FaUserGraduate },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                }`}
                style={activeCategory === id ? { boxShadow: GLOW.indigo } : {}}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div key={`${project.title}-${idx}`} variants={fadeItem} className="h-full">
                <NeonCard className="h-full overflow-hidden flex flex-col group">
                  {/* Card header gradient */}
                  <div
                    className="h-28 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(168,85,247,0.25) 100%)',
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.4) 100%)' }} />
                    <FaLaptopCode
                      className="text-5xl text-indigo-300/40 group-hover:text-indigo-300/70 transition-all duration-300 group-hover:scale-110 relative z-10"
                    />
                    {/* Year badge */}
                    <span className="absolute top-3 left-3 text-xs text-indigo-300/70 font-mono bg-indigo-900/40 px-2 py-0.5 rounded-full border border-indigo-500/20">
                      {project.year}
                    </span>
                    {/* Status badge */}
                    {!project.deployed && (
                      <span className="absolute top-3 right-3 text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded-full font-medium">
                        Coming Soon
                      </span>
                    )}
                    {project.deployed && (
                      <span className="absolute top-3 right-3 flex items-center gap-1 text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="flex-1 flex flex-col p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="bg-gray-700/80 text-gray-300 text-xs px-2 py-0.5 rounded-md border border-gray-600/50"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="bg-gray-700/80 text-gray-400 text-xs px-2 py-0.5 rounded-md">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      target={project.deployed ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      onClick={(e) => !project.deployed && e.preventDefault()}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                        project.deployed
                          ? 'text-indigo-400 hover:text-indigo-300'
                          : 'text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {project.deployed ? (
                        <>Live Demo <FaExternalLinkAlt size={10} /></>
                      ) : (
                        'Not Deployed Yet'
                      )}
                    </a>
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ TEACHING IMPACT ══════════════════════ */}
      <section id="students" className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
        <Orb className="w-72 h-72 top-10 left-0" color="indigo" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionTitle
            pre="Teaching"
            highlight="Impact"
            sub="Making a difference through education"
          />

          {/* Stats grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10"
          >
            {stats.map(({ Icon, value, label }) => (
              <motion.div key={label} variants={fadeItem}>
                <NeonCard className="p-5 sm:p-7 text-center group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.25)' }}
                  >
                    <Icon className="text-xl text-indigo-400" />
                  </div>
                  <div
                    className="text-3xl sm:text-4xl font-black text-indigo-400 mb-1"
                    style={{ textShadow: GLOW.textIndigo }}
                  >
                    {value}
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">{label}</p>
                </NeonCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Teaching mode banner */}
          <FadeUp delay={0.2}>
            <div
              className="rounded-2xl p-5 sm:p-6 border border-indigo-500/20 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(168,85,247,0.05) 100%)',
                boxShadow: '0 0 30px rgba(99,102,241,0.06)',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
              <p className="text-gray-300 text-sm sm:text-base">
                🎓{' '}
                <span className="font-bold text-indigo-400">Teaching via Google Meet</span>
                {' '}— Live coding sessions, project-based learning, and 24/7 doubt resolution
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════ CONTACT ══════════════════════ */}
      <section id="contact" className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/20" />
        <GridOverlay />
        <Orb className="w-80 h-80 bottom-0 right-0" color="purple" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionTitle
            pre="Let's"
            highlight="Connect"
            sub="Available for freelance projects and training inquiries"
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Info card */}
            <FadeUp>
              <NeonCard className="p-6 sm:p-8 h-full">
                <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919565017342"
                    className="flex items-center gap-3 text-gray-300 hover:text-green-400 group transition-colors"
                  >
                    <span
                      className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors"
                    >
                      <FaWhatsapp className="text-green-400" />
                    </span>
                    <span className="text-sm">+91 9565017342</span>
                  </a>
                  <a
                    href="mailto:kapil@zninfotech.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 group transition-colors"
                  >
                    <span
                      className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors"
                    >
                      <FaEnvelope className="text-indigo-400" />
                    </span>
                    <span className="text-sm">kapil@zninfotech.com</span>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Follow Me</h4>
                  <div className="flex gap-4">
                    {[
                      { href: 'https://github.com/kapil-bhargava',                     Icon: FaGithub,   hover: 'hover:text-white' },
                      { href: 'https://www.instagram.com/zn_infotech/',                Icon: FaInstagram, hover: 'hover:text-pink-400' },
                      { href: 'https://www.linkedin.com/in/kapil-bhargava-zninfotech/', Icon: FaLinkedin, hover: 'hover:text-blue-400' },
                    ].map(({ href, Icon, hover }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-700/50 hover:bg-gray-700 border border-gray-600/50 rounded-xl flex items-center justify-center text-gray-400 ${hover} transition-all duration-200 hover:-translate-y-0.5`}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </NeonCard>
            </FadeUp>

            {/* Contact form */}
            <FadeUp delay={0.1}>
              <NeonCard className="p-6 sm:p-8">
                <h3 className="text-lg font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500/10 border border-green-500/40 p-3 rounded-xl text-green-400 text-sm flex items-center gap-2"
                    >
                      <span className="text-green-400 font-bold">✓</span>
                      Message sent! I'll get back to you within 24 hours.
                    </motion.div>
                  )}

                  {[
                    { type: 'text',  name: 'name',    placeholder: 'Your Name' },
                    { type: 'email', name: 'email',   placeholder: 'Your Email' },
                  ].map(({ type, name, placeholder }) => (
                    <input
                      key={name}
                      type={type}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                      required
                      className="w-full bg-gray-900/60 border border-gray-700/60 hover:border-gray-600 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                      style={{ outline: 'none' }}
                    />
                  ))}

                  <textarea
                    placeholder="Your Message (e.g., Training inquiry / Project discussion)"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full bg-gray-900/60 border border-gray-700/60 hover:border-gray-600 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white py-3 rounded-xl text-sm font-bold transition-all duration-200 relative overflow-hidden group"
                    style={{ boxShadow: isSubmitting ? 'none' : GLOW.indigo }}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </form>
              </NeonCard>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOOTER ══════════════════════ */}
      <footer className="py-8 px-4 text-center border-t border-gray-800/60 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <p className="text-gray-600 text-sm">
          &copy; 2026{' '}
          <span className="text-indigo-400/70">Kapil Bhargava</span>
          {' '}· Full Stack Developer & Technical Trainer
        </p>
        <p className="mt-1.5 flex items-center justify-center gap-1.5 text-gray-600 text-xs">
          Made with <FaHeart className="text-red-500/70 text-xs" /> in Lucknow
        </p>
      </footer>

      {/* Global keyframes injected via style tag */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #111827; }
        ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.4); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(99,102,241,0.7); }
      `}</style>
    </div>
  );
}