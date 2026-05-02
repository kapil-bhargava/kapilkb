import React, { useState, useRef } from 'react';
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
    FaCheckCircle,
    FaUserGraduate,
    FaBriefcase
} from 'react-icons/fa';
import { SiGooglemeet } from 'react-icons/si';

function Port3() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Navigation items
    const navItems = ['Home', 'Projects', 'Students', 'Contact'];

    // Personal / Client Projects (Deployed)
    const personalProjects = [
        {
            title: 'ZN ERP',
            description: 'Complete student management system with attendance tracking, grade management, course enrollment, and fee collection.',
            tech: ['MERN', 'Tailwind CSS', 'MongoDB', 'JWT'],
            link: 'https://znerp.vercel.app',
            deployed: true,
            category: 'personal',
            image: 'ERP'
        },
        {
            title: 'All India PES',
            description: 'Professional examination platform for competitive tests with real-time results and analytics dashboard.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
            link: 'https://allindiapes.vercel.app',
            deployed: true,
            category: 'personal',
            image: 'PES'
        }
    ];

    // Student Projects (Some deployed, some not)
    const studentProjects = [
        {
            title: 'Safargo',
            description: 'Uber clone with real-time ride booking, driver tracking, fare calculation, and admin dashboard.',
            tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
            link: 'https://safargo.vercel.app/',
            deployed: true,
            category: 'student',
            studentName: 'Final Year Project'
        },
        {
            title: 'RideRestRoti',
            description: 'All-in-one platform combining ride booking, hotel reservation, and food delivery in a single application.',
            tech: ['MERN', 'Tailwind', 'Razorpay', 'Google Maps API'],
            link: '#',
            deployed: false,
            category: 'student',
            studentName: 'Team Project'
        },
        {
            title: 'Hiring Platform',
            description: 'Job portal with company listings, resume upload, application tracking, and interview scheduling.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            link: '#',
            deployed: false,
            category: 'student',
            studentName: 'Major Project'
        },
        {
            title: 'Hospital Management System',
            description: 'Complete hospital solution with patient registration, appointment booking, prescription management, and billing.',
            tech: ['MERN', 'Redux', 'Tailwind CSS'],
            link: '#',
            deployed: false,
            category: 'student',
            studentName: 'Team Project'
        },
        {
            title: 'Hostel Management System',
            description: 'Hostel administration with room allocation, fee management, complaint system, and mess menu tracking.',
            tech: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
            link: '#',
            deployed: false,
            category: 'student',
            studentName: 'Group Project'
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full-featured online store with product catalog, cart, wishlist, payment gateway, and order tracking.',
            tech: ['MERN', 'Stripe', 'Redux Toolkit'],
            link: '#',
            deployed: false,
            category: 'student',
            studentName: 'Individual Project'
        },
        {
            title: 'Food Delivery App',
            description: 'Restaurant food ordering system with live order tracking, restaurant dashboard, and delivery partner integration.',
            tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
            link: '#',
            deployed: false,
            category: 'student',
            studentName: 'Final Year Project'
        }
    ];

    const allProjects = [...personalProjects, ...studentProjects];

    const filteredProjects = activeCategory === 'all'
        ? allProjects
        : activeCategory === 'personal'
            ? personalProjects
            : studentProjects;

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

    // Scroll to section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen">

            {/* Header / Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo / Name */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="cursor-pointer"
                            onClick={() => scrollToSection('home')}
                        >
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                                Kapil <span className="text-indigo-600">Bhargava</span>
                            </h1>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-8">
                            {navItems.map((item, idx) => (
                                <motion.button
                                    key={item}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-100"
                        >
                            <div className="flex flex-col p-4 space-y-3">
                                {navItems.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="text-gray-600 hover:text-indigo-600 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors text-left"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                         

                            {/* Name */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                                Kapil <span className="text-indigo-600">Bhargava</span>
                            </h1>

                            {/* Tagline - Your exact text */}
                            <h2 className="text-xl md:text-2xl text-gray-700 mb-4">
                                From Video Creator to Software Trainer to Web Developer
                            </h2>

                            {/* Location & Education - Your exact text */}
                            <p className="text-gray-500 mb-8 text-base">
                                Based in Lucknow | B.Tech CSE 2024 | Ex-Trainer at Z.N. Infotech
                            </p>

                            {/* CTA Buttons - Your exact button texts */}
                            <div className="flex gap-4 flex-wrap">
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 shadow-md hover:shadow-lg"
                                >
                                    View My Work <FaArrowRight />
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-all"
                                >
                                    Contact Me
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-5 mt-10">
                                <a href="https://github.com/kapil-bhargava" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors text-2xl">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/zn_infotech/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors text-2xl">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/in/kapil-bhargava-zninfotech/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors text-2xl">
                                    <FaLinkedin />
                                </a>
                                <a href="https://wa.me/919565017342" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors text-2xl">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Image / Profile */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative flex justify-center"
                        >
                            <div className="relative">
                                {/* Main Profile Circle */}
                                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                                    <span className="text-8xl md:text-9xl">👨‍💻</span>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-5 -right-5 w-24 h-24 bg-indigo-200 rounded-full opacity-60 -z-10 animate-pulse"></div>
                                <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-purple-200 rounded-full opacity-60 -z-10 animate-pulse delay-700"></div>
                                <div className="absolute top-1/2 -right-10 w-16 h-16 bg-yellow-200 rounded-full opacity-40 -z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 md:py-24 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            My <span className="text-indigo-600">Work</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Personal projects and client work I've delivered
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex justify-center gap-4 mb-10">
                        {[
                            { id: 'all', label: 'All Projects', icon: FaCode },
                            { id: 'personal', label: 'Personal / Client', icon: FaBriefcase },
                            { id: 'student', label: 'Student Projects', icon: FaUserGraduate }
                        ].map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all ${activeCategory === cat.id
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <cat.icon size={16} />
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
                            >
                                {/* Project Header */}
                                <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <FaLaptopCode className="text-white text-5xl opacity-50" />
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                        {!project.deployed && (
                                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Coming Soon</span>
                                        )}
                                        {project.category === 'student' && project.studentName && (
                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Student Project</span>
                                        )}
                                    </div>

                                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{tech}</span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">+{project.tech.length - 3}</span>
                                        )}
                                    </div>

                                    <a
                                        href={project.link}
                                        target={project.deployed ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 text-sm font-medium ${project.deployed
                                            ? 'text-indigo-600 hover:text-indigo-700'
                                            : 'text-gray-400 cursor-not-allowed'
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

            {/* Students Section - Teaching Impact */}
            <section id="students" className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Training <span className="text-indigo-600">Impact</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Mentoring the next generation of developers through online training
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaUsers className="text-2xl text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
                            <p className="text-gray-500">Students Trained</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <SiGooglemeet className="text-2xl text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
                            <p className="text-gray-500">Online Sessions</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaLaptopCode className="text-2xl text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">7+</h3>
                            <p className="text-gray-500">Student Projects Completed</p>
                        </div>
                    </div>

                    <div className="mt-10 bg-indigo-50 rounded-xl p-6 text-center">
                        <p className="text-gray-700">
                            🎓 <span className="font-semibold">Teaching via Google Meet</span> — Live coding sessions, project-based learning, and 24/7 doubt resolution
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-24 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Let's <span className="text-indigo-600">Connect</span>
                        </h2>
                        <p className="text-gray-500">Available for freelance projects and training inquiries</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaWhatsapp className="text-green-500 text-xl" />
                                    <a href="https://wa.me/919565017342" className="hover:text-green-500">+91 9565017342</a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaEnvelope className="text-indigo-600 text-xl" />
                                    <a href="mailto:kapil@zninfotech.com" className="hover:text-indigo-600">kapil@zninfotech.com</a>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="font-medium text-gray-900 mb-3">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/kapil-bhargava" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 text-2xl">
                                        <FaGithub />
                                    </a>
                                    <a href="https://www.instagram.com/zn_infotech/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 text-2xl">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.linkedin.com/in/kapil-bhargava-zninfotech/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 text-2xl">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {submitStatus === 'success' && (
                                    <div className="bg-green-50 border border-green-500 p-3 rounded text-green-700 text-sm">
                                        ✓ Message sent! I'll get back to you within 24 hours.
                                    </div>
                                )}

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors"
                                />

                                <textarea
                                    placeholder="Your Message (e.g., Training inquiry / Project discussion)"
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
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
            <footer className="py-8 px-4 text-center text-gray-500 text-sm border-t border-gray-200">
                <p>&copy; 2026 Kapil Bhargava. Full Stack Developer & Technical Trainer.</p>
                <p className="mt-1">Based in Lucknow | Available for freelance & online training</p>
            </footer>
        </div>
    );
}

export default Port3;