// App.js
import React, { useState, useEffect } from 'react';
import {
  FaCode, FaBriefcase, FaGraduationCap, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt, FaUsers, FaShoppingCart,
  FaCar, FaAward, FaCalendarAlt, FaChevronRight, FaStar, FaLaptop, FaDatabase,
  FaMobileAlt, FaLayerGroup, FaCheckCircle, FaWhatsapp, FaClock,
  FaRocket, FaChartLine, FaBullhorn, FaLaptopCode, FaChalkboardTeacher
} from 'react-icons/fa';
import { MdCode } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import mypic from './assets/mypic.png';

const Port0 = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'testimonials', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const projects = [
    {
      title: "AllIndiaPES",
      client: "Govt. Examination Board",
      description: "A comprehensive platform for Public Examination System across India. Features include real-time exam scheduling, results management, and candidate authentication system serving thousands of users daily.",
      challenge: "Handle 100K+ concurrent users during exam results declaration",
      solution: "Implemented Redis caching and database sharding for 10x performance improvement",
      icon: <FaUsers size={28} />,
      tags: ["React", "Node.js", "MongoDB", "Express", "Redis"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      link: "#",
      featured: true,
      results: "99.9% uptime, 3s response time"
    },
    {
      title: "Uber Clone",
      client: "TechStart Solutions",
      description: "Complete ride-hailing platform with real-time GPS tracking, fare calculation, driver-passenger matching, and payment integration. Built as a training project demonstrating full-stack capabilities.",
      challenge: "Real-time location tracking with 1M+ concurrent connections",
      solution: "Used Socket.io with horizontal scaling and WebSocket optimization",
      icon: <FaCar size={28} />,
      tags: ["React Native", "Socket.io", "Google Maps API", "Stripe", "Node.js"],
      image: "https://images.unsplash.com/photo-1549321371-26d746042d41?w=600&h=400&fit=crop",
      link: "#",
      featured: true,
      results: "<1s ETA calculation, 95% trip matching accuracy"
    },
    {
      title: "E-Commerce Platform",
      client: "FashionHub Retail",
      description: "Full-featured online store with product management, cart system, user reviews, payment gateway, and admin dashboard. Implemented responsive design and optimized performance.",
      challenge: "Seamless checkout experience with 50K+ products",
      solution: "Optimized database queries and implemented lazy loading",
      icon: <FaShoppingCart size={28} />,
      tags: ["React", "Redux", "Tailwind CSS", "Firebase", "Stripe"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
      link: "#",
      featured: true,
      results: "40% faster load time, 25% conversion increase"
    }
  ];

  const trainingProjects = [
    {
      title: "Student Management System",
      description: "Comprehensive system for managing student records, attendance, grades, and communications. Used by training institute to track student progress.",
      icon: <FaGraduationCap size={28} />,
      tags: ["React", "Django", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
    },
    {
      title: "Food Delivery App",
      description: "Mobile-first food ordering platform with restaurant discovery, menu browsing, cart management, and order tracking.",
      icon: <FaMobileAlt size={28} />,
      tags: ["React Native", "Firebase", "Redux Toolkit"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop"
    },
    {
      title: "Portfolio Generator",
      description: "Tool that helps developers create beautiful portfolios with drag-drop functionality and multiple theme options.",
      icon: <FaCode size={28} />,
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    }
  ];

  const skills = [
    { name: "React.js", level: 90, icon: <FaCode size={18} />, years: "3+ years" },
    { name: "JavaScript/TypeScript", level: 88, icon: <MdCode size={18} />, years: "4+ years" },
    { name: "Node.js", level: 85, icon: <FaDatabase size={18} />, years: "3+ years" },
    { name: "Tailwind CSS", level: 92, icon: <FaLayerGroup size={18} />, years: "2+ years" },
    { name: "MongoDB/PostgreSQL", level: 82, icon: <FaDatabase size={18} />, years: "3+ years" },
    { name: "React Native", level: 80, icon: <FaMobileAlt size={18} />, years: "2+ years" }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Founder, AllIndiaPES", text: "Kapil delivered our platform ahead of schedule with exceptional quality. His technical expertise and communication skills are outstanding. The platform now serves over 50,000 users!", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg", project: "AllIndiaPES Platform" },
    { name: "Priya Sharma", role: "CTO, TechStart Solutions", text: "The Uber clone project was executed perfectly. Kapil not only built a robust solution but also trained our team on maintenance. Best developer I've worked with!", rating: 5, image: "https://randomuser.me/api/portraits/women/68.jpg", project: "Uber Clone" },
    { name: "Amit Verma", role: "Training Director", text: "As a trainer, Kapil is exceptional. He transformed 50+ students into job-ready developers. His hands-on approach and real-world projects make all the difference.", rating: 5, image: "https://randomuser.me/api/portraits/men/45.jpg", project: "Training Program" }
  ];

  const services = [
    { title: "Web Development", price: "Starting at ₹25,000", features: ["Custom React/Next.js Apps", "Responsive Design", "API Integration", "3 Months Free Support", "SEO Optimization"], popular: false, icon: <FaLaptopCode size={24} />, delivery: "2-4 weeks" },
    { title: "Training & Mentorship", price: "₹15,000/month", features: ["1-on-1 Sessions", "Project Based Learning", "Resume Building", "Interview Preparation", "Job Placement Assistance"], popular: true, icon: <FaChalkboardTeacher size={24} />, delivery: "Ongoing" },
    { title: "Freelance Projects", price: "Custom Quote", features: ["Full Stack Development", "MVP Development", "Code Review", "Deployment & DevOps", "24/7 Support"], popular: false, icon: <FaRocket size={24} />, delivery: "Depends on scope" }
  ];

  const clientProjects = projects.filter(p => p.featured);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          Thanks! I'll contact you within 24 hours 🚀
        </div>
      )}

      {/* Sticky CTA Button */}
      <div className="fixed left-6 bottom-6 z-50 hidden lg:block">
        <div className="bg-gray-900/95 backdrop-blur-md border border-blue-500 rounded-xl p-3 shadow-2xl">
          <p className="text-xs text-gray-400 mb-2">Available for</p>
          <div className="flex gap-2">
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Freelance</span>
            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Full-time</span>
            <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Training</span>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-700">
            <div className="flex items-center gap-1">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-xs text-green-400">Available now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Book Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => scrollToSection('contact')}
          className="group bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        >
          <FaCalendarAlt size={24} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
            Book Free Consultation
          </span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
              Kapil.dev
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'testimonials', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 hover:scale-105 ${activeSection === item ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
              {['home', 'about', 'experience', 'projects', 'testimonials', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-2 transition-all ${activeSection === item ? 'text-blue-400' : 'text-gray-300'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 border border-blue-500/20 hover:scale-105 transition-transform">
                <FaLayerGroup size={16} className="text-blue-400" />
                <span className="text-sm text-blue-400">✨ Available for hire • 3 spots left this month</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Kapil <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Bhargava</span>
              </h1>
              <p className="text-xl text-gray-300">Full Stack Developer & Technical Trainer</p>
              <p className="text-gray-400 max-w-lg leading-relaxed">
                Passionate about building scalable web applications and mentoring the next generation of developers.
                2+ years of industry experience with 50+ successfully trained students.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                >
                  View Projects <FaChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 hover:scale-105 transition-all duration-300"
                >
                  Hire Me
                </button>
              </div>
              <div className="flex gap-6 pt-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"><FaGithub size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"><FaLinkedin size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"><FaTwitter size={24} /></a>
              </div>
            </div>
            <div className="bg-red-500 md:order-first animate-fadeInLeft">

              <div className="rounded-full overflow-hidden lg:w-100 lg:h-100 bg-gradient-to-r from-blue-500 to-purple-600 md:ml-50 p-2 relative animate-fadeInLeft">
                <img className='rounded-full' src={mypic} alt="Kapil Bhargava" />
              </div>
            </div>
            <div className="relative animate-fadeInRight hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-2xl font-bold">KB</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Kapil Bhargava</h3>
                    <p className="text-sm text-blue-400">MERN Stack Expert</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-300 group hover:translate-x-1 transition-transform">
                    <FaGraduationCap size={18} className="text-blue-400" />
                    <span>SR Institute of Management and Technology</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300 group hover:translate-x-1 transition-transform">
                    <FaBriefcase size={18} className="text-blue-400" />
                    <span>2+ Years at Z.N. Infotech Pvt. Ltd.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300 group hover:translate-x-1 transition-transform">
                    <FaCode size={18} className="text-blue-400" />
                    <span>50+ Students Trained</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-500 text-sm mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-60">
              <span className="text-gray-400 font-semibold text-lg hover:opacity-100 transition">Startup India</span>
              <span className="text-gray-400 font-semibold text-lg hover:opacity-100 transition">Tech Mahindra</span>
              <span className="text-gray-400 font-semibold text-lg hover:opacity-100 transition">Z.N. Infotech</span>
              <span className="text-gray-400 font-semibold text-lg hover:opacity-100 transition">AllIndiaPES</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About <span className="text-blue-400">Me</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm Kapil Bhargava, a passionate Full Stack Developer and Technical Trainer based in India.
                With a strong foundation in modern web technologies and a teaching mindset, I help students
                and professionals master the art of web development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing my degree at SR Institute of Management and Technology, I've gained valuable
                industry experience at Z.N. Infotech Pvt. Ltd., where I've trained numerous students and built
                real-world projects that solve actual business problems.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-gray-700 hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-gray-400">Students Trained</div>
                  <div className="text-xs text-green-400 mt-1">100% Placement Rate</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-gray-700 hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-400">15+</div>
                  <div className="text-sm text-gray-400">Live Projects</div>
                  <div className="text-xs text-green-400 mt-1">Delivered on Time</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-gray-700 hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-400">2+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                  <div className="text-xs text-green-400 mt-1">Industry Expert</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-gray-700 hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                  <div className="text-xs text-green-400 mt-1">Quick Response</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group hover:translate-x-1 transition-transform">
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center gap-2 text-sm font-medium">{skill.icon} {skill.name}</span>
                    <span className="text-sm text-blue-400">{skill.level}% • {skill.years}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:shadow-lg"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work <span className="text-blue-400">Experience</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <FaBriefcase size={14} className="text-white" />
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Technical Trainer</h3>
                    <p className="text-blue-400">Z.N. Infotech Pvt. Ltd.</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaCalendarAlt size={14} />
                    <span>Jan 2024 - Jan 2026</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Led training programs for aspiring developers, focusing on full-stack web development.
                  Designed curriculum, mentored 50+ students, and supervised 15+ real-world project developments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded hover:bg-blue-500/30 transition">React.js</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded hover:bg-blue-500/30 transition">Node.js</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded hover:bg-blue-500/30 transition">MongoDB</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded hover:bg-blue-500/30 transition">Project Management</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded hover:bg-blue-500/30 transition">Curriculum Design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
              <FaAward className="text-blue-400" /> Certifications & Achievements
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["MERN Stack Development Certified", "React Advanced Concepts", "Full Stack JavaScript", "UI/UX Design Fundamentals"].map((cert, idx) => (
                <div key={idx} className="bg-gray-800/30 rounded-lg p-3 border border-gray-700 flex items-center gap-2 justify-center hover:bg-gray-800/50 transition-all hover:scale-105">
                  <IoIosCheckmarkCircle size={16} className="text-green-400" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Case Studies */}
      <section id="projects" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured <span className="text-blue-400">Projects</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Real-world solutions delivered to satisfied clients
            </p>
          </div>

          {/* Client Projects with Case Study Format */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FaStar size={24} className="text-yellow-500" /> Client Projects
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {clientProjects.map((project, index) => (
                <div key={index} className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-blue-400">{project.icon}</div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">Client: {project.client}</p>
                    <p className="text-gray-400 text-sm mb-3">{project.description.substring(0, 120)}...</p>

                    {/* Results Badge */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-2 mb-3 border border-green-500/20">
                      <p className="text-xs text-green-400">📊 Results: {project.results}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 transition">{tag}</span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-1 text-sm text-blue-400 hover:gap-2 transition-all group-hover:text-blue-300">
                      View Case Study <FaExternalLinkAlt size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FaUsers size={24} className="text-blue-400" /> Student Training Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingProjects.map((project, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-400">{project.icon}</div>
                    <h3 className="font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded hover:bg-gray-600 transition">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">What <span className="text-blue-400">Clients Say</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-blue-500" />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-500 mb-3">
                  {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="text-xs text-gray-500 mt-3">Project: {testimonial.project}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-800">
            <div className="text-center group hover:scale-105 transition">
              <FaChartLine className="text-blue-400 text-3xl mx-auto mb-2" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center group hover:scale-105 transition">
              <FaClock className="text-blue-400 text-3xl mx-auto mb-2" />
              <div className="text-2xl font-bold">24h</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div className="text-center group hover:scale-105 transition">
              <FaRocket className="text-blue-400 text-3xl mx-auto mb-2" />
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-gray-400">Live Projects</div>
            </div>
            <div className="text-center group hover:scale-105 transition">
              <FaBullhorn className="text-blue-400 text-3xl mx-auto mb-2" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-400">Students Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Services <span className="text-blue-400">I Offer</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className={`relative bg-gray-800/50 rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl ${service.popular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-700'
                }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-blue-400 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="text-2xl font-bold text-blue-400 mb-2">{service.price}</div>
                <p className="text-xs text-gray-400 mb-4">⏱️ Delivery: {service.delivery}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCheckCircle className="text-green-400" size={14} /> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition hover:shadow-lg"
                >
                  Get Started →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with WhatsApp */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Get In <span className="text-blue-400">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-12"></div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Let's Work Together</h3>
                <p className="text-gray-400">Have a project in mind? Let's discuss and bring your ideas to life.</p>

                <div className="space-y-4">
                  <a href="tel:9565017342" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all group">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <FaPhone size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Me Directly</p>
                      <p className="font-semibold text-lg">+91 9565017342</p>
                    </div>
                  </a>

                  <a href="https://wa.me/919565017342" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/30 hover:bg-green-500/20 transition-all group">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <FaWhatsapp size={20} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp Me</p>
                      <p className="font-semibold text-lg">Chat Instantly</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <FaEnvelope size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email Me</p>
                      <p className="font-medium">kapil.bhargava@example.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"><FaGithub size={28} /></a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"><FaLinkedin size={28} /></a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"><FaTwitter size={28} /></a>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4 bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Service Needed *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option>Web Development</option>
                    <option>Training & Mentorship</option>
                    <option>Freelance Project</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Project Details *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message →
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  I'll respond within 24 hours. Guaranteed!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 text-sm">© 2024 Kapil Bhargava. Full Stack Developer & Technical Trainer</p>
          <p className="text-gray-600 text-xs mt-2">Built with React & Tailwind CSS • Available for freelance work</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Port0;