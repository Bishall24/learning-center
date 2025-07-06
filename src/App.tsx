import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FaGraduationCap, FaUsers, FaVideo, FaChalkboardTeacher, FaUserCircle, FaBook, FaEnvelope, FaPhone, FaLinkedin, FaMusic, FaPaintBrush, FaRegSmileBeam, FaLaptopCode, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaRobot, FaDatabase, FaCode, FaGuitar } from 'react-icons/fa';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  qualification: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
  experience: string;
  education: string;
  expertise: string[];
  bio: string;
}

// Logo component (no welcome statement)
const Logo = () => (
  <span style={{ display: 'flex', alignItems: 'center', fontFamily: 'Baloo 2, cursive', fontWeight: 800, fontSize: '2.8rem', color: '#4F6DF5', lineHeight: 1 }}>
    <img src="/logo/my-logo.png" alt="Learning Center Logo" style={{ height: 120, width: 120, marginRight: 28, objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }} />
    <span>
      <span style={{ color: '#FFB347', fontWeight: 800, fontSize: '2.8rem', letterSpacing: '1px' }}>Learning</span>
      <span style={{ color: '#4F6DF5', fontWeight: 800, fontSize: '2.8rem', marginLeft: 10, letterSpacing: '1px' }}>Center</span>
    </span>
  </span>
);

// Navbar component
const Navbar = ({ handleOpenModal, handleOpenAboutModal, handleCloseAllModals }: { handleOpenModal: () => void, handleOpenAboutModal: () => void, handleCloseAllModals: () => void }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm" style={{ zIndex: 1000, paddingTop: 0, paddingBottom: 0 }}>
    <div className="container d-flex align-items-center justify-content-between" style={{ minHeight: 120 }}>
      <a className="navbar-brand fw-bold d-flex align-items-center" href="#hero" style={{ padding: 0, marginRight: 32 }} onClick={handleCloseAllModals}><Logo /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center" style={{ height: '100%' }}>
          <li className="nav-item">
            <a className="footer-quick-link" href="#hero" onClick={handleCloseAllModals}>Home</a>
          </li>
          <li className="nav-item">
            <a className="footer-quick-link" href="#teachers" onClick={e => { e.preventDefault(); handleCloseAllModals(); handleOpenModal(); }}>Our Teachers</a>
          </li>
          <li className="nav-item">
            <a className="footer-quick-link" href="#about" onClick={e => { e.preventDefault(); handleOpenAboutModal(); }}>About Us</a>
          </li>
          <li className="nav-item">
            <a className="footer-quick-link" href="#footer" onClick={handleCloseAllModals}>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

// Footer component
const Footer = () => (
  <footer className="footer py-5 bg-dark text-white" id="footer">
    <div className="container">
      <div className="row justify-content-center mb-3">
        <div className="col-12 text-center">
          <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            Contact: <a href="mailto:info@learningcenter.com" className="text-white">elearningscenteredu@gmail.com</a>
          </div>
          <div style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Phone: <a href="tel:9861343176" className="text-white">+1(720)243-6452 / +1(720)919-3550</a>
          </div>
          <hr style={{ borderTop: '1px solid #444', width: '100%', maxWidth: 400, margin: '1.5rem auto' }} />
          <div style={{ fontSize: '0.95rem', color: '#bbb' }}>
            © 2024 Learning Center. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  const teachers: Teacher[] = [

    { 
      id: 1, 
      name: "Bishal Prasain",
      subject: "Programming, web development, AI, Maths, UI/UX",
      qualification: "Bachelor's Degree",
      image: "/teachers/Bishal.jpg",
      email: "prasabishal14@gmail.com",
      phone: "9817994959",
      linkedin: "-",
      experience: "",
      education: "Bachelor's Degree in Computing",
      expertise: ["Web development, Graphics Designing, Maths, AI"],
      bio: "I am Bishal Prasain. By profession I am a web Developer."
    },
    

    { 
      id: 2, 
      name: "Sitasma Thapa",
      subject: "Math, AI, ML",
      qualification: "Bachelor's Degree",
      image: "/teachers/Sitasma.jpg",
      email: "sitasmathapa99@gmail.com",
      phone: "9851218204",
      linkedin: "linkedin.com/in/bibek-khatri",
      experience: "Database Intern",
      education: "Bsc. Computational Mathematics",
      expertise: ["Math"],
      bio: "Sitasma Thapa is a recent graduate in Computational Mathematics from Kathmandu University with a strong foundation in mathematical modeling, statistics, and programming. Her academic and project work focuses on applying data-driven techniques to real-world problems, particularly in the domains of Artificial Intelligence andMachine Learning."
    },


    { 
      id: 3, 
      name: "Bibek KC",
      subject: "Civil engineering",
      qualification: "Post Graduation",
      image: "/teachers/Bibek.jpg",
      email: "079mseeb007.bibek@pcampus.edu.np",
      phone: "9849685678",
      linkedin: "linkedin.com/in/bibek-khatri",
      experience: "5 years",
      education: "Masters",
      expertise: ["Civil Engineering"],
      bio: "Civil Engineering"
    },
    { 
      id: 4, 
      name: "Prarthana Sedai",
      subject: "Maths",
      qualification: "Bachelor's Degree",
      image: "/teachers/Prarthaana.jpg",
      email: "prarthana.sedai@learningcenter.com",
      phone: "+977 9841234569",
      linkedin: "linkedin.com/in/prarthana-sedai",
      experience: "7 years",
      education: "M.Sc. in Chemistry",
      expertise: ["Organic Chemistry", "Analytical Chemistry", "Research"],
      bio: "Dedicated chemistry teacher with a strong research background."
    },
    { 
      id: 5, 
      name: "Rabina Pathak",
      subject: "Maths",
      qualification: "Bachelor's Degree",
      image: "/teachers/Rabina.jpg",
      email: "rabina.pathak@learningcenter.com",
      phone: "+977 9841234570",
      linkedin: "linkedin.com/in/rabina-pathak",
      experience: "9 years",
      education: "Ph.D. in Biology",
      expertise: ["Molecular Biology", "Genetics", "Research"],
      bio: "Ph.D. holder with extensive research experience in molecular biology."
    },
    { 
      id: 6, 
      name: "Soniya Poudel",
      subject: "English, Maths,Science, Nepali",
      qualification: "Bachelor's Degree",
      image: "/teachers/Soniya.jpg",
      email: "soniyapoudel28@gmail.com",
      phone: "+977-9841219793",
      linkedin: "linkedin.com/in/soniya-poudel",
      experience: "Lab Assistant at Syrup Health Care",
      education: "4th year student of BTech Food Technology ",
      expertise: ["Food Science", "Nutrition"],
      bio: "I am a final-year undergraduate student pursuing a Bachelor's degree in Biotechnology with a major in Food Technology. With a strong academic foundation in science and technology, I have developed a keen interest in applying scientific concepts to real-world problems, particularly in the areas of food science and health.  In addition to my academic pursuits, I have over six months of experience tutoring school students in Mathematics, Science and English. This role has allowed me to refine my communication skills, develop patience and adaptability, and inspire a passion for learning in younger students. I am committed to continuous learning and enjoy making complex concepts easier to understand for learners of all levels."
    },

    { 
      id: 7, 
      name: "Prakriti Acharya",
      subject: "Math, Science, ELA, Nepali (Language)",
      qualification: "Bachelor's Degree",
      image: "/teachers/Prakriti.jpg",
      email: "Prakritiacharya58@gmail.com",
      phone: "9861343176",
      linkedin: "www.linkedin.com/in/prakriti-acharya-39867b32a",
      experience: "Tutor at Learning Center since 2024",
      education: "Bachleors in Law (B.A. LL.B.)",
      expertise: ["Law"],
      bio: "I am a dedicated tutor currently teaching school-level students in English, Mathematics, Science, and Nepali. With a background in law and ongoing postgraduate studies in International Relations and Diplomacy, I bring a well-rounded and disciplined approach to education. My teaching focuses on building clear concepts, academic confidence, and consistent performance. I strive to create a supportive and engaging learning environment tailored to each student's needs."
    },

    { 
      id: 8, 
      name: "Raj Kumar Ghimire",
      subject: "History",
      qualification: "M.A. History",
      image: "/teachers/Ujjwal.jpg",
      email: "raj.ghimire@learningcenter.com",
      phone: "+977 9841234572",
      linkedin: "linkedin.com/in/raj-ghimire",
      experience: "8 years",
      education: "M.A. in History",
      expertise: ["World History", "Nepal History", "Research"],
      bio: "History enthusiast with a deep understanding of world civilizations."
    },
    { 
      id: 9, 
      name: "Sanjib chaudhary ",
      subject: "Music",
      qualification: "+2 passed(Bachelor Running)",
      image: "/Top/singer.jpg",
      email: "sanjibchaudhary012@gmail.com",
      phone: "9869705343",
      linkedin: "",
      experience: "5 years",
      education: "Bachelor's in Music",
      expertise: ["Piano", "Vocal", "Guitar", "Madal","Harmonium"],
      bio: "Passionate about music and teaching."
    },
    { 
      id: 10, 
      name: "Anisha Pathak ",
      subject: "Dance",
      qualification: "Bachelor's in Law Nepal law Campus (8th sem)   Masters in Journalism, Central department  TU  ",
      image: "/teachers/Anisha.png",
      email: "anishapathak012@gmail.com",
      phone: "9865183376",
      linkedin: "",
      experience: "2 years Kathak course in Aesthetis Dance Studio",
      education: "Bachelor's in Music",
      expertise: ["Kathak Dance"],
      bio: "I am a law and journalism student who is immensely interested in dancing. I am a Kathak dancer who has completed  two years of course from Aesthetic Dance studio. I have countless stage performance experiences. Apart from dance, I have also been working as an IELTS and PTE instructor in MKS prep for the last one year. "
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 4;
  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleTeacherClick = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setShowTeacherModal(true);
  };

  const handleCloseTeacherModal = () => {
    setShowTeacherModal(false);
    setSelectedTeacher(null);
  };

  const paginatedTeachers = teachers.slice(
    (currentPage - 1) * teachersPerPage,
    currentPage * teachersPerPage
  );

  const [showSubjectsModal, setShowSubjectsModal] = useState(false);
  const [subjectsCategory, setSubjectsCategory] = useState<'main' | 'academic' | 'non-academic' | 'tech'>('main');

  const handleOpenSubjectsModal = () => {
    setShowSubjectsModal(true);
    setSubjectsCategory('main');
  };
  const handleCloseSubjectsModal = () => setShowSubjectsModal(false);

  // Subject data for modal
  const academicSubjects = [
    { icon: <FaBook className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'Math' },
    { icon: <FaBook className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'Science' },
    { icon: <FaBook className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'English' },
    { icon: <FaBook className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'Nepali' },
    { icon: <FaBook className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'History' },
    { icon: <FaBook className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'Chemistry' },
    { icon: <FaBook className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'Biology' },
    { icon: <FaBook className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'Physics' },
  ];
  const nonAcademicSubjects = [
    { icon: <FaMusic className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#FFB347' }} />, name: 'Singing' },
    { icon: <FaGuitar className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#FFB347' }} />, name: 'Musical Instruments' },
    { icon: <FaRegSmileBeam className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#FFB347' }} />, name: 'Dance' },
    { icon: <FaPaintBrush className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#FFB347' }} />, name: 'Arts' },
  ];
  const techSubjects = [
    { icon: <FaHtml5 className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#E44D26' }} />, name: 'HTML' },
    { icon: <FaCss3Alt className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#1572B6' }} />, name: 'CSS' },
    { icon: <FaJsSquare className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#F7DF1E' }} />, name: 'JavaScript' },
    { icon: <FaPython className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#306998' }} />, name: 'Python' },
    { icon: <FaRobot className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'AI' },
    { icon: <FaDatabase className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'Database' },
    { icon: <FaCode className="subject-icon-animated" style={{ fontSize: '2.2rem', color: '#4F6DF5' }} />, name: 'Programming' },
  ];

  const [showAboutModal, setShowAboutModal] = useState(false);
  const handleOpenAboutModal = () => setShowAboutModal(true);
  const handleCloseAboutModal = () => setShowAboutModal(false);

  // Closes all modals (About, Teachers, Subjects, Teacher Profile)
  const handleCloseAllModals = () => {
    setShowAboutModal(false);
    setShowModal(false);
    setShowSubjectsModal(false);
    setShowTeacherModal(false);
  };

  return (
    <div className="App">
      <Navbar handleOpenModal={handleOpenModal} handleOpenAboutModal={handleOpenAboutModal} handleCloseAllModals={handleCloseAllModals} />
      {showAboutModal ? (
        <>
          <div className="about-fullpage-bg">
            <div className="about-modal-content about-modal-wide">
              <div className="about-section-flex">
                <div className="about-section-img">
                  <img src="/Top/About1.jpg" alt="Mission" />
                </div>
                <div className="about-section-text">
                  <h1 className="about-title">Future-ready</h1>
                  <p className="about-desc">In today's busy world, we know parents juggle countless responsibilities. That's why our mission is to support your child's learning journey every step of the way.

Our Learning Center offers one-to-one sessions designed to help children excel both academically and non-academically. From school subjects to music, arts, coding, and life skills — we make sure every child gets the personal attention and encouragement they need to grow.

Because every child deserves the chance to shine bright and build a future full of confidence, knowledge, and creativity.</p>
                </div>
              </div>
              <div className="about-section-flex">
                <div className="about-section-img">
                  <img src="/Top/Sandip.jpg" alt="Who We Are" />
                </div>
                <div className="about-section-text">
                  <h1 className="about-title">Who we are</h1>
                  <p className="about-desc">Founded by Sandip Paudel and Ashish Acharya in 2024, our Learning Center is dedicated to helping children thrive in every aspect of their education.

We're proud to have 20+ students enrolled and growing, guided by some of the best tutors with strong qualifications in both academic and non-academic fields.

From core subjects to music, art, coding, and life skills — our passionate team of teachers and mentors is committed to nurturing every child's confidence, creativity, and success.

Together, we're building a supportive community that empowers your child for a brighter future!</p>
                </div>
              </div>
              <div className="about-section-flex">
                <div className="about-section-img">
                  <img src="/Top/Teachers.png" alt="Awesome Teachers" />
                </div>
                <div className="about-section-text">
                  <h1 className="about-title">Awesome Teachers</h1>
                  <p className="about-desc">At our Learning Center, we have highly qualified teachers who are dedicated to helping students learn in the most fun and engaging way possible.

Our team includes experienced school teachers, professional tutors, and talented instructors from diverse academic and non-academic backgrounds. They're not only experts in their fields — they're also passionate mentors who know how to inspire, motivate, and connect with every child.

With their commitment and enthusiasm, learning becomes an exciting journey — and every student feels supported to grow and shine!</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          {/* Hero Section */}
          <header id="hero" className="hero-section text-center position-relative" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="container position-relative hero-animate">
              <div className="row align-items-center justify-content-center flex-md-row flex-column-reverse">
                {/* Text Content */}
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-center mb-4 mb-md-0" style={{ minHeight: '340px' }}>
                  <div className="w-100">
                    <div className="hero-slogan" style={{ fontSize: '2rem', color: '#4F6DF5', fontWeight: 700, marginBottom: 32 }}>Think Smart. Learn Smart</div>
                    <div className="hero-btn-center">
                      <button className="btn btn-primary btn-lg">Get Started</button>
                    </div>
                  </div>
                </div>
                {/* Illustration Image */}
                <div className="col-md-6 text-center mb-4 mb-md-0">
                  <img src="/Top/Here.png" alt="Learning Illustration" className="hero-illustration-img" style={{ maxWidth: '90%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </header>

          {/* Features Section */}
          <section className="features py-5">
            <div className="container">
              <h2 className="text-center mb-5">Why Choose Us?</h2>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card h-100 text-center p-4 feature-card-clickable" style={{ cursor: 'pointer' }} onClick={handleOpenModal}>
                    <div className="card-body">
                      <div className="feature-icon mb-3">
                        <FaGraduationCap style={{ fontSize: '40px' }} />
                      </div>
                      <h5 className="card-title">Expert Teachers</h5>
                      <p className="card-text">Learn from experienced educators who make learning fun.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card h-100 text-center p-4 feature-card-clickable">
                    <div className="card-body">
                      <div className="feature-icon mb-3">
                        <FaUsers style={{ fontSize: '40px' }} />
                      </div>
                      <h5 className="card-title">Interactive Sessions</h5>
                      <p className="card-text">Engage in live discussions and different activities.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card h-100 text-center p-4 feature-card-clickable">
                    <div className="card-body">
                      <div className="feature-icon mb-3">
                        <FaVideo style={{ fontSize: '40px' }} />
                      </div>
                      <h5 className="card-title">Zoom Classes</h5>
                      <p className="card-text">Attend classes from anywhere in the world.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 justify-content-center mt-1">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card h-100 text-center p-4 feature-card-clickable">
                    <div className="card-body">
                      <div className="feature-icon mb-3">
                        <FaChalkboardTeacher style={{ fontSize: '40px' }} />
                      </div>
                      <h5 className="card-title">Personal Attention</h5>
                      <p className="card-text">Get individual attention for quick solutions.</p>
                    </div>
                  </div>
                </div>
                {/* Subjects Card */}
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card h-100 text-center p-4 feature-card-clickable" style={{ cursor: 'pointer' }} onClick={handleOpenSubjectsModal}>
                    <div className="card-body">
                      <div className="feature-icon mb-3">
                        <FaBook style={{ fontSize: '40px', color: '#4F6DF5' }} />
                      </div>
                      <h5 className="card-title">Subjects</h5>
                      <p className="card-text">Explore our wide range of academic, non-academic, and tech subjects.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Subjects Modal */}
          {showSubjectsModal && (
            <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Subjects</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseSubjectsModal}></button>
                  </div>
                  <div className="modal-body">
                    {subjectsCategory === 'main' && (
                      <div className="row text-center">
                        <div className="col-md-4 mb-4">
                          <div className="subject-icon-card" style={{ minHeight: 140 }} onClick={() => setSubjectsCategory('academic')}>
                            <FaBook style={{ fontSize: '2.5rem', color: '#4F6DF5' }} />
                            <div>Academic</div>
                            <p style={{ fontSize: '0.95rem', color: '#444', marginTop: 8 }}>Core school and college subjects for strong foundations.</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="subject-icon-card" style={{ minHeight: 140 }} onClick={() => setSubjectsCategory('non-academic')}>
                            <FaChalkboardTeacher style={{ fontSize: '2.5rem', color: '#FFB347' }} />
                            <div>Non-Academic</div>
                            <p style={{ fontSize: '0.95rem', color: '#444', marginTop: 8 }}>Creative and performing arts for holistic growth.</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="subject-icon-card" style={{ minHeight: 140 }} onClick={() => setSubjectsCategory('tech')}>
                            <FaLaptopCode style={{ fontSize: '2.5rem', color: '#4F6DF5' }} />
                            <div>Tech</div>
                            <p style={{ fontSize: '0.95rem', color: '#444', marginTop: 8 }}>Modern technology and coding skills for the future.</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {subjectsCategory === 'academic' && (
                      <div>
                        <button className="subjects-back-btn" onClick={() => setSubjectsCategory('main')}>
                          <span style={{ fontSize: '1.2em', marginRight: 4 }}>&larr;</span> Back
                        </button>
                        <h5 className="mb-3">Academic Subjects</h5>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                          {academicSubjects.map((subj, idx) => (
                            <div key={idx} className="subject-icon-card text-center">
                              {subj.icon}
                              <div>{subj.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {subjectsCategory === 'non-academic' && (
                      <div>
                        <button className="subjects-back-btn" onClick={() => setSubjectsCategory('main')}>
                          <span style={{ fontSize: '1.2em', marginRight: 4 }}>&larr;</span> Back
                        </button>
                        <h5 className="mb-3">Non-Academic Subjects</h5>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                          {nonAcademicSubjects.map((subj, idx) => (
                            <div key={idx} className="subject-icon-card text-center">
                              {subj.icon}
                              <div>{subj.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {subjectsCategory === 'tech' && (
                      <div>
                        <button className="subjects-back-btn" onClick={() => setSubjectsCategory('main')}>
                          <span style={{ fontSize: '1.2em', marginRight: 4 }}>&larr;</span> Back
                        </button>
                        <h5 className="mb-3">Tech Subjects</h5>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                          {techSubjects.map((subj, idx) => (
                            <div key={idx} className="subject-icon-card text-center">
                              {subj.icon}
                              <div>{subj.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Teachers Section Anchor */}
          <div id="teachers"></div>

          {/* Modal for Expert Teachers */}
          {showModal && (
            <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Our Expert Teachers</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                  </div>
                  <div className="modal-body">
                    <div className="row g-4">
                      {paginatedTeachers.map((teacher) => (
                        <div key={teacher.id} className="col-md-6">
                          <div className="card h-100 text-center p-4" style={{ cursor: 'pointer' }} onClick={() => handleTeacherClick(teacher)}>
                            <div className="card-body">
                              <div className="profile-icon mb-3">
                                <img 
                                  src={teacher.image} 
                                  alt={teacher.name} 
                                  style={{ 
                                    width: '120px', 
                                    height: '120px', 
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                  }} 
                                />
                              </div>
                              <h5 className="card-title">{teacher.name}</h5>
                              <p className="card-text">{teacher.qualification}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Pagination Controls */}
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <button className="btn btn-outline-primary me-2" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo; Prev</button>
                      <span className="mx-2">Page {currentPage} of {totalPages}</span>
                      <button className="btn btn-outline-primary ms-2" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next &raquo;</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Individual Teacher Modal */}
          {showTeacherModal && selectedTeacher && (
            <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Teacher Profile</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseTeacherModal}></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-4 text-center">
                        <img 
                          src={selectedTeacher.image} 
                          alt={selectedTeacher.name} 
                          style={{ 
                            width: '200px', 
                            height: '200px', 
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginBottom: '20px'
                          }} 
                        />
                      </div>
                      <div className="col-md-8">
                        <h3>{selectedTeacher.name}</h3>
                        <p className="text-muted mb-1">{selectedTeacher.qualification}</p>
                        <p className="text-primary mb-2" style={{ fontWeight: 500 }}>{selectedTeacher.subject}</p>
                        <hr />
                        <div className="contact-info">
                          <p><FaEnvelope className="me-2" /> {selectedTeacher.email}</p>
                          <p><FaPhone className="me-2" /> {selectedTeacher.phone}</p>
                          <p><FaLinkedin className="me-2" /> <a href={selectedTeacher.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                        </div>
                        <hr />
                        <div className="teacher-details">
                          <h5>Education</h5>
                          <p>{selectedTeacher.education}</p>
                          
                          <h5>Experience</h5>
                          <p>{selectedTeacher.experience}</p>
                          
                          <h5>Areas of Expertise</h5>
                          <ul>
                            {selectedTeacher.expertise.map((skill, index) => (
                              <li key={index}>{skill}</li>
                            ))}
                          </ul>
                          
                          <h5>Bio</h5>
                          <p>{selectedTeacher.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Testimonials Section */}
          <section className="testimonials py-5 bg-light">
            <div className="container">
              <h2 className="text-center mb-5">What Our Students Say</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <p className="card-text">"The interactive sessions made learning so much fun! I've improved my grades significantly."</p>
                      <div className="d-flex align-items-center mt-3">
                        <div className="ms-3">
                          <h6 className="mb-0">Samagra Poudel</h6>
                          <small className="text-muted">Grade 6 Student</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <p className="card-text">"The teachers are amazing! They explain everything so clearly and make sure we understand."</p>
                      <div className="d-flex align-items-center mt-3">
                        <div className="ms-3">
                          <h6 className="mb-0">Subrat Khanal</h6>
                          <small className="text-muted">Grade 10 Student</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <p className="card-text">"I love how flexible the schedule is. I can attend classes from anywhere!"</p>
                      <div className="d-flex align-items-center mt-3">
                        <div className="ms-3">
                          <h6 className="mb-0">Sanvi</h6>
                          <small className="text-muted">Grade 6 Student</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Head Bodies Section */}
          <section className="head-bodies-section py-5 bg-white">
            <div className="container">
              <h2 className="text-center mb-5" style={{ color: '#222', fontWeight: 800 }}>Our Head Bodies</h2>
              <div className="row g-4 justify-content-center">
                {/* Head Body 1 */}
                <div className="col-md-3 col-sm-6">
                  <div className="head-body-card text-center p-4 h-100">
                    <img src="/Top/Sandip.jpg" alt="Head 1" className="head-body-img mb-3" />
                    <h5 className="mb-1">Sandip Poudel</h5>
                    <div className="text-primary mb-2" style={{ fontWeight: 600 }}>Founder</div>
                    <p className="head-body-quote">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."</p>
                  </div>
                </div>
                {/* Head Body 2 */}
                <div className="col-md-3 col-sm-6">
                  <div className="head-body-card text-center p-4 h-100">
                    <img src="/Top/Ashish.png" alt="Head 2" className="head-body-img mb-3" />
                    <h5 className="mb-1">Ashish Acharya</h5>
                    <div className="text-primary mb-2" style={{ fontWeight: 600 }}>Founder</div>
                    <p className="head-body-quote">"Our mission is to inspire and empower every learner to achieve their best."</p>
                  </div>
                </div>
                {/* Head Body 3 */}
                <div className="col-md-3 col-sm-6">
                  <div className="head-body-card text-center p-4 h-100">
                    <img src="/Top/Silpa.jpg" alt="Head 3" className="head-body-img mb-3" />
                    <h5 className="mb-1">Silpa Bhandari</h5>
                    <div className="text-primary mb-2" style={{ fontWeight: 600 }}>Academic Coordinator</div>
                    <p className="head-body-quote">"We believe in creating a nurturing environment for holistic growth."</p>
                  </div>
                </div>
                {/* Head Body 4 */}
                <div className="col-md-3 col-sm-6">
                  <div className="head-body-card text-center p-4 h-100">
                    <img src="/Top/Ujjal2.png" alt="Head 4" className="head-body-img mb-3" />
                    <h5 className="mb-1">Ujjwal Singh</h5>
                    <div className="text-primary mb-2" style={{ fontWeight: 600 }}>Content Coordinator</div>
                    <p className="head-body-quote">"Every student's success story is our greatest achievement."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="cta py-5 text-center">
            <div className="container">
              <h2 className="mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="lead mb-4">Join our interactive classes and boost your academic performance!</p>
              <button className="btn btn-primary btn-lg">Enroll Now</button>
            </div>
          </section>

          {/* Footer Anchor */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
