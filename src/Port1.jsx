import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaCode, 
  FaVideo, 
  FaChalkboardTeacher, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaEnvelope,
  FaUser,
  FaComment,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
  FaPlay,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGoogle,
  FaCamera,
  FaCut,
  FaFilm,
  FaUsers,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Port1() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const SectionWrapper = ({ children, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    return (
      <motion.section
        ref={ref}
        id={id}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 px-4 md:px-8"
      >
        {children}
      </motion.section>
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // You'll need to replace these with your EmailJS credentials (free)
    // Sign up at emailjs.com and get your keys
    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // Get from EmailJS
      'YOUR_TEMPLATE_ID',  // Get from EmailJS
      formRef.current,
      'YOUR_PUBLIC_KEY'    // Get from EmailJS
    ).then((result) => {
      setSubmitStatus('success');
      formRef.current.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    }).catch((error) => {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  // Projects Data
  const webProjects = [
    {
      title: "Local Business Website",
      tech: ["React", "Tailwind", "Node.js"],
      description: "Complete website solution for a local restaurant with online ordering system",
      features: ["Responsive Design", "Online Ordering", "Google Maps Integration"]
    },
    {
      title: "Student Management Dashboard",
      tech: ["MERN", "Tailwind", "JWT"],
      description: "Dashboard for managing students, assignments, and progress tracking for my training batches",
      features: ["Student Login", "Assignment Submission", "Progress Tracking"]
    },
    {
      title: "E-Learning Platform",
      tech: ["React", "Firebase", "Tailwind"],
      description: "Online learning platform with video lectures and Google Meet integration",
      features: ["Video Lectures", "Live Class Link", "Study Materials"]
    }
  ];

  const teachingStats = [
    { number: "50+", label: "Students Trained", icon: FaUsers },
    { number: "4+", label: "Batches Completed", icon: FaChalkboardTeacher },
    { number: "200+", label: "Online Sessions", icon: FaGoogle },
    { number: "100%", label: "Student Satisfaction", icon: FaStar }
  ];

  const skills = {
    development: [
      { name: "MERN Stack", level: 85, icon: FaCode },
      { name: "Python", level: 80, icon: FaPython },
      { name: "React.js", level: 85, icon: FaReact },
      { name: "Node.js", level: 80, icon: FaNodeJs },
      { name: "MongoDB", level: 75, icon: FaDatabase },
      { name: "Flutter", level: 70, icon: FaMobileAlt }
    ],
    video: [
      { name: "Video Shooting", level: 85, icon: FaCamera },
      { name: "Video Editing", level: 80, icon: FaCut },
      { name: "Post Production", level: 75, icon: FaFilm }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Kapil Kb
          </motion.h1>
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Skills", "Projects", "Teaching", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-5xl">🎬</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Kapil Bhargava
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-6"
          />
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            From Video Creator to Software Trainer to Web Developer
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Based in Lucknow | B.Tech CSE 2024 | Ex-Trainer at Z.N. Infotech
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a href="#projects" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full hover:scale-105 transition-transform inline-flex items-center gap-2">
              View My Work <FaArrowRight />
            </a>
            <a href="#contact" className="border border-purple-500 px-8 py-3 rounded-full hover:bg-purple-500/20 transition-all inline-flex items-center gap-2">
              Contact Me <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper id="about">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>Lucknow, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaGraduationCap className="text-purple-400" />
                <span>B.Tech CSE, SRIMT (2024)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaCalendarAlt className="text-purple-400" />
                <span>Trained at Z.N. Infotech (2023-2025)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaChalkboardTeacher className="text-purple-400" />
                <span>Software Development Trainer (2024-2025)</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                I started with video. Shooting, editing, telling stories visually. Then I learned to code — 
                Python, Flutter, Android, and finally the MERN stack. I loved it so much that I became a trainer 
                at Z.N. Infotech, teaching the next batch of developers. Now I build websites and teach students 
                online via Google Meet, combining my love for visuals, logic, and mentoring.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Development Skills */}
            <motion.div variants={fadeInUp} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FaCode className="text-purple-400" /> Development
              </h3>
              <div className="space-y-4">
                {skills.development.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2">
                        <skill.icon className="text-purple-400" size={18} />
                        {skill.name}
                      </span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Video Skills */}
            <motion.div variants={fadeInUp} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FaVideo className="text-pink-400" /> Video Creation
              </h3>
              <div className="space-y-4">
                {skills.video.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2">
                        <skill.icon className="text-pink-400" size={18} />
                        {skill.name}
                      </span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Teaching Stats Section */}
      <SectionWrapper id="teaching">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-12">
            Teaching <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Impact</span>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {teachingStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-gray-800/50 p-6 rounded-2xl text-center border border-gray-700 hover:border-purple-500 transition-all"
              >
                <stat.icon className="text-4xl text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-2xl text-center border border-purple-500/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaGoogle className="text-2xl text-purple-400" />
              <FaCamera className="text-2xl text-pink-400" />
            </div>
            <p className="text-lg">
              Conducting online training sessions via <span className="text-purple-400 font-semibold">Google Meet</span>
            </p>
            <p className="text-gray-400 text-sm mt-2">Live coding • Doubt solving • Project-based learning</p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {webProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                  <FaLaptopCode className="text-6xl text-white/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-purple-900/40 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <FaCheckCircle className="text-purple-400" size={12} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact">
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-12">
            Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Teaching Inquiry</h3>
                <p className="text-gray-400 mb-4">
                  Interested in learning MERN, Python, or Flutter? Join my online batch via Google Meet.
                </p>
                <div className="flex items-center gap-2 text-purple-400">
                  <FaWhatsapp />
                  <span>Available for queries on WhatsApp</span>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-2xl hover:text-purple-400 transition-colors"><FaGithub /></a>
                  <a href="#" className="text-2xl hover:text-purple-400 transition-colors"><FaLinkedin /></a>
                  <a href="#" className="text-2xl hover:text-purple-400 transition-colors"><FaInstagram /></a>
                  <a href="#" className="text-2xl hover:text-purple-400 transition-colors"><FaWhatsapp /></a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <form ref={formRef} onSubmit={sendEmail} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 space-y-4">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 p-3 rounded text-green-400 text-sm">
                    Message sent! I'll get back to you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500 p-3 rounded text-red-400 text-sm">
                    Something went wrong. Please try again or contact directly on WhatsApp.
                  </div>
                )}

                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input 
                    type="text" 
                    name="user_name"
                    placeholder="Your Name" 
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input 
                    type="email" 
                    name="user_email"
                    placeholder="Your Email" 
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-500" />
                  <textarea 
                    name="message"
                    placeholder="Your Message (e.g., Inquiry about training / Web development project)" 
                    rows="4"
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-3 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>&copy; 2026 Kapil Bhargava. Built with React & Tailwind CSS.</p>
        <p className="text-sm mt-2">Based in Lucknow | Online trainer via Google Meet</p>
      </footer>
    </div>
  );
}

export default Port1;