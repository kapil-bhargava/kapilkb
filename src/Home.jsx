import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope, 
  FaArrowRight, 
  FaBars, 
  FaTimes,
  FaCode,
  FaUsers,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaUserGraduate,
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaVideo,
  FaLaptop,
  FaMoon,
  FaSun,
  FaHeart,
  FaQuoteLeft,
  FaAward,
  FaClock
} from 'react-icons/fa';
import { SiGooglemeet, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss } from 'react-icons/si';
import mypic from './assets/mypic.png';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
    return () => window.removeEventListener('scroll', () => {});
  }, []);

  const navItems = ['Home', 'Journey', 'Projects', 'Students', 'Contact'];

  const personalProjects = [
    {
      title: 'ZN ERP',
      description: 'Complete student management system with attendance tracking, grade management, course enrollment, and fee collection for ZN Infotech.',
      tech: ['MERN', 'Tailwind CSS', 'MongoDB', 'JWT'],
      link: 'https://zn-erp.vercel.app',
      deployed: true,
      category: 'personal',
      year: '2025'
    },
    {
      title: 'All India PES',
      description: 'Professional examination platform for competitive tests with real-time results, analytics dashboard, and certificate generation.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      link: 'https://allindiapes.vercel.app',
      deployed: true,
      category: 'personal',
      year: '2025'
    },
    {
      title: 'Learning Resounces',
      description: 'Professional examination platform for competitive tests with real-time results, analytics dashboard, and certificate generation.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
      link: 'https://resources-lyart-eight.vercel.app/',
      deployed: true,
      category: 'personal',
      year: '2024'
    }
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
      year: '2025'
    },
    {
      title: 'RideRestRoti',
      description: 'All-in-one platform combining ride booking, hotel reservation, and food delivery in a single application.',
      tech: ['MERN', 'Tailwind', 'Razorpay', 'Google Maps API'],
      link: '#',
      deployed: false,
      category: 'student',
      studentName: 'Team Project',
      year: '2025'
    },
    {
      title: 'Hiring Platform',
      description: 'Job portal with company listings, resume upload, application tracking, and interview scheduling.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: '#',
      deployed: false,
      category: 'student',
      studentName: 'Major Project',
      year: '2024'
    },
    {
      title: 'Hospital Management System',
      description: 'Complete hospital solution with patient registration, appointment booking, prescription management, and billing.',
      tech: ['MERN', 'Redux', 'Tailwind CSS'],
      link: '#',
      deployed: false,
      category: 'student',
      studentName: 'Team Project',
      year: '2024'
    },
    {
      title: 'Hostel Management System',
      description: 'Hostel administration with room allocation, fee management, complaint system, and mess menu tracking.',
      tech: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
      link: '#',
      deployed: false,
      category: 'student',
      studentName: 'Group Project',
      year: '2024'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with product catalog, cart, wishlist, payment gateway, and order tracking.',
      tech: ['MERN', 'Stripe', 'Redux Toolkit'],
      link: '#',
      deployed: false,
      category: 'student',
      studentName: 'Individual Project',
      year: '2025'
    },
    {
      title: 'Food Delivery App',
      description: 'Restaurant food ordering system with live order tracking, restaurant dashboard, and delivery partner integration.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      link: '#',
      deployed: false,
      category: 'student',
      studentName: 'Final Year Project',
      year: '2025'
    }
  ];

  const allProjects = [...personalProjects, ...studentProjects];
  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : activeCategory === 'personal' 
      ? personalProjects 
      : studentProjects;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
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

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      
      {/* Header / Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <h1 className="text-xl md:text-2xl font-bold">
                Kapil <span className="text-indigo-400">Bhargava</span>
              </h1>
            </motion.div>

            <div className="hidden md:flex gap-8">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800 border-t border-gray-700"
            >
              <div className="flex flex-col p-4 space-y-3">
                {navItems.map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-300 hover:text-indigo-400 py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors text-left">
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3>Web Developer</h3>
                {/* <span className="text-green-400 text-sm font-medium">Available for hire · 3 spots left this month</span> */}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Kapil <span className="text-indigo-400">Bhargava</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-indigo-400 mb-4">
                From Video Creator to Software Trainer to Web Developer
              </h2>
              
              <p className="text-gray-400 mb-8 text-base flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1"><FaMapMarkerAlt size={14} /> Based in Lucknow</span>
                <span>|</span>
                <span className="flex items-center gap-1"><FaGraduationCap size={14} /> B.Tech CSE 2024</span>
                <span>|</span>
                <span className="flex items-center gap-1"><FaChalkboardTeacher size={14} /> Ex-Trainer at Z.N. Infotech</span>
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => scrollToSection('projects')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-indigo-500/25">
                  View My Work <FaArrowRight />
                </button>
                <button onClick={() => scrollToSection('contact')} className="border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-indigo-400 px-8 py-3 rounded-lg font-semibold transition-all">
                  Contact Me
                </button>
              </div>

              <div className="flex gap-5 mt-10">
                <a href="https://github.com/kapil-bhargava" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/zn_infotech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors text-2xl">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/kapil-bhargava-zninfotech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/919565017342" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors text-2xl">
                  <FaWhatsapp />
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-8xl md:text-9xl">
                     <img src={mypic} alt="" className='rounded-[50%]' />
                  </span>
                  {/* <img src={mypic} alt="" className='rounded-[50%]' /> */}
                </div>
                <div className="absolute -top-5 -right-5 w-24 h-24 bg-indigo-500 rounded-full opacity-20 -z-10 animate-pulse"></div>
                <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-purple-500 rounded-full opacity-20 -z-10 animate-pulse delay-700"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section - Detailed */}
      <section id="journey" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-indigo-400">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From shooting videos to writing code — a story of continuous growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Timeline Card 1 - Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-indigo-500 transition-all"
            >
              <div className="w-14 h-14 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
                <FaVideo className="text-2xl text-indigo-400" />
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-400 mb-2">
                <FaCalendarAlt size={12} />
                <span>2020 - 2022</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Creator</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Started my creative journey with video shooting and editing. Learned the art of visual storytelling, color grading, and post-production. This foundation taught me attention to detail and creative thinking.
              </p>
            </motion.div>

            {/* Timeline Card 2 - Learning & Training */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-indigo-500 transition-all"
            >
              <div className="w-14 h-14 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
                <FaCode className="text-2xl text-indigo-400" />
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-400 mb-2">
                <FaCalendarAlt size={12} />
                <span>2023 - 2024</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning & B.Tech</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pursued B.Tech CSE from SRIMT, Lucknow. Simultaneously learned Web Development, Python, Android, and Flutter from Z.N. Infotech. Completed my degree in 2024 with focus on full-stack development.
              </p>
            </motion.div>

            {/* Timeline Card 3 - Trainer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-indigo-500 transition-all"
            >
              <div className="w-14 h-14 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
                <FaChalkboardTeacher className="text-2xl text-indigo-400" />
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-400 mb-2">
                <FaCalendarAlt size={12} />
                <span>2024 - 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Software Trainer</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Became a Software Development Trainer at Z.N. Infotech. Taught 50+ students, conducted 200+ online sessions via Google Meet. Mentored students to build real-world projects.
              </p>
            </motion.div>
          </div>

          {/* Additional Journey Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-8 border border-indigo-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaQuoteLeft className="text-3xl text-indigo-400" />
              <h3 className="text-xl font-semibold">Why I Do What I Do</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              My journey from video editing to teaching coding wasn't planned — it evolved. Video taught me to see the big picture while focusing on details. Teaching forced me to simplify complex concepts. Development gave me the tools to build what I imagine. Today, I combine all three to create impactful web solutions and mentor aspiring developers.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm text-indigo-300">50+ Students Trained</span>
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm text-indigo-300">200+ Online Sessions</span>
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm text-indigo-300">10+ Projects Mentored</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-indigo-400">Skills</span>
            </h2>
            <p className="text-gray-400">Technologies I work with daily</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
              { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
              { name: 'React', icon: SiReact, color: 'text-cyan-400' },
              { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
              { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
              { name: 'Python', icon: FaCode, color: 'text-blue-400' }
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700 hover:border-indigo-500 transition-all"
              >
                <skill.icon className={`text-3xl mx-auto mb-2 ${skill.color}`} />
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-indigo-400">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Personal projects and client work I've delivered
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {[
              { id: 'all', label: 'All Projects', icon: FaCode },
              { id: 'personal', label: 'Personal / Client', icon: FaBriefcase },
              { id: 'student', label: 'Student Projects', icon: FaUserGraduate }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <cat.icon size={16} />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl hover:shadow-xl transition-all overflow-hidden group border border-gray-700 hover:border-indigo-500"
              >
                <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center">
                  <FaLaptopCode className="text-white text-5xl opacity-50" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {!project.deployed && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">Coming Soon</span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">+{project.tech.length - 3}</span>
                    )}
                  </div>
                  
                  <a 
                    href={project.link}
                    target={project.deployed ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-medium ${
                      project.deployed 
                        ? 'text-indigo-400 hover:text-indigo-300' 
                        : 'text-gray-500 cursor-not-allowed'
                    }`}
                    onClick={(e) => !project.deployed && e.preventDefault()}
                  >
                    {project.deployed ? (
                      <>Live Demo <FaExternalLinkAlt size={12} /></>
                    ) : (
                      <>Not Deployed Yet</>
                    )}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Impact Section */}
      <section id="students" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Teaching <span className="text-indigo-400">Impact</span>
            </h2>
            <p className="text-gray-400">Making a difference through education</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-indigo-400" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-400 mb-2">50+</h3>
              <p className="text-gray-400 text-sm">Students Trained</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <SiGooglemeet className="text-2xl text-indigo-400" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-400 mb-2">200+</h3>
              <p className="text-gray-400 text-sm">Online Sessions</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptopCode className="text-2xl text-indigo-400" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-400 mb-2">7+</h3>
              <p className="text-gray-400 text-sm">Student Projects</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-2xl text-indigo-400" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-400 mb-2">100%</h3>
              <p className="text-gray-400 text-sm">Satisfaction Rate</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 text-center border border-indigo-500/30">
            <p className="text-gray-300">
              🎓 <span className="font-semibold text-indigo-400">Teaching via Google Meet</span> — Live coding sessions, project-based learning, and 24/7 doubt resolution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-indigo-400">Connect</span>
            </h2>
            <p className="text-gray-400">Available for freelance projects and training inquiries</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <FaWhatsapp className="text-green-400 text-xl" />
                  <a href="https://wa.me/919565017342" className="hover:text-green-400">+91 9565017342</a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaEnvelope className="text-indigo-400 text-xl" />
                  <a href="mailto:kapil@zninfotech.com" className="hover:text-indigo-400">kapil@zninfotech.com</a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="font-medium mb-3">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/kapil-bhargava" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors">
                    <FaGithub />
                  </a>
                  <a href="https://www.instagram.com/zn_infotech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 text-2xl transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/kapil-bhargava-zninfotech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl transition-colors">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 p-3 rounded text-green-400 text-sm">
                    ✓ Message sent! I'll get back to you within 24 hours.
                  </div>
                )}
                
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors text-white"
                />
                
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors text-white"
                />
                
                <textarea
                  placeholder="Your Message (e.g., Training inquiry / Project discussion)"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors resize-none text-white"
                ></textarea>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>&copy; 2026 Kapil Bhargava. Full Stack Developer & Technical Trainer.</p>
        <p className="mt-1 flex items-center justify-center gap-1">
          Made with <FaHeart className="text-red-400 text-xs" /> in Lucknow
        </p>
      </footer>
    </div>
  );
}

export default Home;