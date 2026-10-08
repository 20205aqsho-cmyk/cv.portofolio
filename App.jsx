import React, { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('semua');
  const [showCvModal, setShowCvModal] = useState(false);
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  // Profile and logo image file references
  const PROFILE_IMAGE_SRC = "aku.jpg";
  const SCHOOL_LOGO_SRC = "foto profil.jpg";

  // Form State
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const roles = [
    'Siswa PPLG A SMKN 2 Surakarta',
    'Full Stack Web Developer',
    'PHP & MySQL Specialist',
    'React Frontend Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypewriterIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projectsData = [
    {
      id: 1,
      title: 'Sistem Informasi Akademik Sekolah (SIAKAD)',
      category: 'semua backend sekolah',
      desc: 'Sistem rekapitulasi data siswa, nilai, absensi, dan jadwal pelajaran terintegrasi dengan otentikasi bertingkat.',
      tech: ['PHP OOP', 'MySQL', 'Bootstrap 5', 'JavaScript'],
      icon: 'school'
    },
    {
      id: 2,
      title: 'Aplikasi Kasir Toko & Persediaan (POS)',
      category: 'semua backend web',
      desc: 'Sistem kasir real-time dengan pencatatan otomatis transaksi, persediaan barang, serta laporan keuangan bulanan.',
      tech: ['PHP', 'MySQL', 'Tailwind CSS', 'Chart.js'],
      icon: 'point_of_sale'
    },
    {
      id: 3,
      title: 'Portofolio Interactive CV (React JS)',
      category: 'semua frontend web',
      desc: 'Aplikasi Web CV & Portofolio modern berbasis React JS dengan fitur Switch Theme (Terang/Gelap) dan Modal Preview CV.',
      tech: ['React JS', 'Tailwind CSS', 'ES6 JavaScript'],
      icon: 'web'
    },
    {
      id: 4,
      title: 'Aplikasi Peminjaman Inventaris Sekolah',
      category: 'semua backend sekolah',
      desc: 'Sistem manajemen peminjaman dan pencatatan sarana-prasarana laboratorium PPLG SMKN 2 Surakarta.',
      tech: ['PHP Native', 'MySQL', 'REST API'],
      icon: 'inventory'
    }
  ];

  const filteredProjects = activeCategory === 'semua'
    ? projectsData
    : projectsData.filter(p => p.category.includes(activeCategory));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.pesan) {
      alert('Mohon isi Nama dan Pesan Anda terlebih dahulu.');
      return;
    }
    const text = `Halo Aqsha, saya ${formData.nama} (${formData.email || 'Tanpa Kontak Email'}).%0A%0APesan:%0A${formData.pesan}`;
    window.open(`https://wa.me/6285864051474?text=${text}`, '_blank');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-[#0f131d] text-[#dfe2f1]' : 'bg-slate-50 text-slate-900'
      }`}>

      <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? 'bg-[#1c1f2a]/90 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm'
        }`}>
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <img
                src={SCHOOL_LOGO_SRC}
                alt="Logo SMKN 2 Surakarta"
                className="h-11 w-11 object-cover rounded-xl border border-cyan-400/30 shadow-md group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100x100/0ea5e9/ffffff?text=SMKN2";
                }}
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-[#1c1f2a] rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-cyan-500 dark:text-cyan-400 tracking-wide">Aqsha Zhafif</span>
              <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>PPLG A • SMKN 2 Surakarta</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border ${darkMode ? 'bg-[#171b26]/80 border-slate-800' : 'bg-slate-100/80 border-slate-200'
            }`}>
            <a href="#about" className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${darkMode ? 'hover:bg-[#262a35] text-slate-200' : 'hover:bg-white text-slate-700 shadow-sm'}`}>Tentang</a>
            <a href="#skills" className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${darkMode ? 'hover:bg-[#262a35] text-slate-200' : 'hover:bg-white text-slate-700 shadow-sm'}`}>Keahlian</a>
            <a href="#projects" className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${darkMode ? 'hover:bg-[#262a35] text-slate-200' : 'hover:bg-white text-slate-700 shadow-sm'}`}>Proyek</a>
            <a href="#education" className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${darkMode ? 'hover:bg-[#262a35] text-slate-200' : 'hover:bg-white text-slate-700 shadow-sm'}`}>Pendidikan</a>
            <a href="#contact" className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${darkMode ? 'hover:bg-[#262a35] text-slate-200' : 'hover:bg-white text-slate-700 shadow-sm'}`}>Kontak</a>
          </nav>

          {/* Action Header Items */}
          <div className="flex items-center gap-3">
            {/* Status Badge */}
            <div className={`hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium ${darkMode ? 'bg-[#171b26] border-cyan-500/30 text-cyan-400' : 'bg-cyan-50 border-cyan-300 text-cyan-800'
              }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Siap Magang / PKL</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-md ${darkMode ? 'bg-[#262a35] text-amber-400 hover:bg-[#313540]' : 'bg-white text-amber-600 hover:bg-slate-100 border border-slate-200'
                }`}
              title="Ganti Mode Terang/Gelap"
            >
              <span className="material-symbols-outlined text-xl">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* CV Modal Toggle Button */}
            <button
              onClick={() => setShowCvModal(true)}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md hover:shadow-cyan-500/20 active:scale-95"
            >
              <span className="material-symbols-outlined text-base">description</span>
              <span>Lihat CV</span>
            </button>

            {/* Mobile Hamburger Drawer Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl ${darkMode ? 'bg-[#262a35] text-white' : 'bg-white text-slate-800 border border-slate-200 shadow-sm'}`}
            >
              <span className="material-symbols-outlined text-xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-6 py-4 border-b flex flex-col gap-3 ${darkMode ? 'bg-[#1c1f2a] border-slate-800' : 'bg-white border-slate-200 shadow-lg'
            }`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm font-semibold">Tentang</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm font-semibold">Keahlian</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm font-semibold">Proyek</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm font-semibold">Pendidikan</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm font-semibold">Kontak</a>
            <button
              onClick={() => { setShowCvModal(true); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm text-center shadow-md"
            >
              Prinjau / Cetak CV
            </button>
          </div>
        )}
      </header>

      <section className="relative pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold ${darkMode ? 'bg-[#171b26] border-slate-800 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
              }`}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Siswa Aktif PPLG A - SMKN 2 Surakarta</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">Web Developer &amp; Programmer</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Halo, Saya <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 text-transparent bg-clip-text">
                  Aqsha Zhafif Aufa W.
                </span>
              </h1>

              {/* Dynamic Role Typewriter */}
              <div className="flex items-center gap-2 mt-2 font-mono text-lg sm:text-xl font-semibold">
                <span className="text-cyan-500">&gt;</span>
                <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>{roles[typewriterIndex]}</span>
                <span className="w-2 h-6 bg-cyan-400 animate-pulse"></span>
              </div>
            </div>

            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Siswa jurusan Pengembangan Perangkat Lunak &amp; Gim di SMK Negeri 2 Surakarta. Memiliki kompetensi kuat dalam backend web (PHP &amp; MySQL) serta frontend modern (React JS &amp; Tailwind CSS).
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/6285864051474"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg hover:shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                <span>Hubungi (WhatsApp)</span>
              </a>

              <button
                onClick={() => setShowCvModal(true)}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border transition-all hover:-translate-y-0.5 ${darkMode ? 'bg-[#262a35] border-slate-700 text-white hover:bg-[#313540]' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'
                  }`}
              >
                <span className="material-symbols-outlined text-xl">description</span>
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Contact Footer Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-400 border-t border-slate-700/30 w-full">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-400 text-base">call</span>
                <span>085864051474</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-400 text-base">location_on</span>
                <span>Surakarta, Jawa Tengah</span>
              </div>
            </div>
          </div>

          {/* User Profile Frame with Exact Local Image Source */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-2xl flex items-center justify-center">
              <div className={`w-full h-full rounded-full overflow-hidden p-1 relative ${darkMode ? 'bg-[#0f131d]' : 'bg-white'}`}>
                <img
                  src={PROFILE_IMAGE_SRC}
                  alt="Foto Aqsha Zhafif Aufa Wibowo"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x400/0ea5e9/ffffff?text=Aqsha+Zhafif";
                  }}
                />
              </div>

              {/* Floating School Emblem Badge */}
              <div className="absolute -bottom-4 bg-white/95 dark:bg-[#1c1f2a]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <img
                  src={SCHOOL_LOGO_SRC}
                  alt="Logo SMKN 2 Surakarta"
                  className="h-9 w-9 object-cover rounded-lg border border-cyan-400/30"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100x100/0ea5e9/ffffff?text=SMK";
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xs text-slate-900 dark:text-white">SMK Negeri 2 Surakarta</span>
                  <span className="text-[11px] font-mono text-cyan-500 font-semibold">PPLG A • Rekayasa Web</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="about" className={`py-20 px-6 lg:px-12 border-t ${darkMode ? 'bg-[#0a0e18]/60 border-slate-800' : 'bg-slate-100/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-12">

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">01 // PROFIL RINGKAS</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Tentang Aqsha Zhafif</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Bio Card */}
            <div className={`lg:col-span-7 p-8 rounded-2xl border shadow-lg flex flex-col justify-between gap-6 ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
              }`}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </div>
                <h3 className="text-xl font-bold">Pengembangan Perangkat Lunak &amp; Gim (PPLG)</h3>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Saya adalah siswa kelas PPLG A di SMK Negeri 2 Surakarta yang berfokus pada perancangan dan pembuatan aplikasi web.
                </p>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Memiliki ketertarikan mendalam pada arsitektur database MySQL, pemrograman terstruktur PHP, serta pembuatan antarmuka modern yang cepat dan responsif menggunakan Tailwind CSS dan React JS.
                </p>
              </div>

              <div className={`p-4 rounded-xl flex items-center gap-3 border ${darkMode ? 'bg-[#1c1f2a] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <span className="material-symbols-outlined text-cyan-400 text-xl">verified</span>
                <span className="text-xs font-mono">Prinsip: Kode Terstruktur, Efisien, &amp; Tampilan Bersih.</span>
              </div>
            </div>

            {/* Quick Stat Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-6 rounded-2xl border shadow-md flex flex-col justify-between ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
                }`}>
                <span className="material-symbols-outlined text-cyan-400 text-3xl mb-4">school</span>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-mono">Sekolah</span>
                  <h4 className="font-bold text-base mt-1">SMKN 2 Surakarta</h4>
                  <p className="text-xs text-slate-500 mt-1">Jurusan PPLG A</p>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border shadow-md flex flex-col justify-between ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
                }`}>
                <span className="material-symbols-outlined text-indigo-400 text-3xl mb-4">code</span>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-mono">Fokus Keahlian</span>
                  <h4 className="font-bold text-base mt-1">Web Development</h4>
                  <p className="text-xs text-slate-500 mt-1">PHP, MySQL, React JS</p>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border shadow-md flex flex-col justify-between ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
                }`}>
                <span className="material-symbols-outlined text-emerald-400 text-3xl mb-4">call</span>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-mono">WhatsApp</span>
                  <h4 className="font-bold text-sm mt-1">085864051474</h4>
                  <p className="text-xs text-slate-500 mt-1">Respon Cepat</p>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border shadow-md flex flex-col justify-between ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
                }`}>
                <span className="material-symbols-outlined text-amber-400 text-3xl mb-4">location_on</span>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-mono">Lokasi</span>
                  <h4 className="font-bold text-base mt-1">Surakarta</h4>
                  <p className="text-xs text-slate-500 mt-1">Jawa Tengah</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">02 // KOMPETENSI TEKNIS</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Keahlian Utama</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* React JS Card */}
            <div className={`p-6 rounded-2xl border shadow-lg flex flex-col gap-4 ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
              }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-2xl">widgets</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">React JS</h3>
                    <span className="text-xs text-slate-400 font-mono">Frontend Framework</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full">85%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>JSX Components</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>Hooks State</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>Web Apps</span>
              </div>
            </div>

            {/* PHP Card */}
            <div className={`p-6 rounded-2xl border shadow-lg flex flex-col gap-4 ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
              }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">code_blocks</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">PHP</h3>
                    <span className="text-xs text-slate-400 font-mono">Backend Logic</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-full">88%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-400 h-full rounded-full" style={{ width: '88%' }}></div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>OOP PHP</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>Session Auth</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>CRUD System</span>
              </div>
            </div>

            {/* MySQL Card */}
            <div className={`p-6 rounded-2xl border shadow-lg flex flex-col gap-4 ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
              }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">database</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">MySQL</h3>
                    <span className="text-xs text-slate-400 font-mono">Database Relasional</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full">85%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>ERD Modeling</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>JOIN Query</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>Foreign Keys</span>
              </div>
            </div>

            {/* HTML & Tailwind CSS Card */}
            <div className={`p-6 rounded-2xl border shadow-lg flex flex-col gap-4 ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
              }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">html</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">HTML &amp; Tailwind</h3>
                    <span className="text-xs text-slate-400 font-mono">Styling &amp; Layout</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">92%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>Tailwind CSS</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>Responsive UI</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>Flex &amp; Grid</span>
              </div>
            </div>

            {/* Version Control Git Card */}
            <div className={`p-6 rounded-2xl border shadow-lg flex flex-col gap-4 ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
              }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">terminal</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Git &amp; GitHub</h3>
                    <span className="text-xs text-slate-400 font-mono">Version Control</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-purple-400 bg-purple-400/10 px-2.5 py-1 rounded-full">88%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-400 h-full rounded-full" style={{ width: '88%' }}></div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>Repository Git</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>Branching</span>
                <span className={`px-2.5 py-1 rounded-lg ${darkMode ? 'bg-[#262a35]' : 'bg-slate-100'}`}>GitHub Workflow</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className={`py-20 px-6 lg:px-12 border-t ${darkMode ? 'bg-[#0a0e18]/60 border-slate-800' : 'bg-slate-100/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">03 // HASIL KARYA</span>
              <h2 className="text-3xl font-extrabold tracking-tight">Proyek Web Pilihan</h2>
            </div>

            {/* Category Filter Controls */}
            <div className={`flex flex-wrap gap-1 p-1 rounded-xl border ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              {['semua', 'backend', 'frontend', 'sekolah'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${activeCategory === cat
                      ? 'bg-cyan-500 text-slate-950 shadow-md'
                      : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`p-6 rounded-2xl border shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">{project.icon}</span>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-400/10 text-cyan-500 font-semibold">
                      Web System
                    </span>
                  </div>

                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700/20">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="education" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">04 // RIWAYAT</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Pendidikan &amp; Pengalaman</h2>
          </div>

          <div className="relative border-l-2 border-cyan-400/30 ml-4 pl-8 flex flex-col gap-10">

            {/* Timeline Entry 1 */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#0f131d]"></span>
              <span className="text-xs font-mono text-cyan-400 font-bold">2023 - SEKARANG</span>
              <h3 className="text-xl font-bold mt-1">SMK Negeri 2 Surakarta</h3>
              <p className="text-sm font-semibold text-slate-400">Pengembangan Perangkat Lunak dan Gim (PPLG A)</p>
              <p className={`text-sm mt-2 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Fokus pembelajaran pada pemrograman web backend (PHP &amp; MySQL), pembuatan UI frontend responsif (React JS &amp; Tailwind CSS), rekayasa perangkat lunak, serta pengerjaan proyek praktik kejuruan.
              </p>
            </div>

            {/* Timeline Entry 2 */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-400 border-4 border-[#0f131d]"></span>
              <span className="text-xs font-mono text-indigo-400 font-bold">PRAKTIK &amp; TUGAS TIM</span>
              <h3 className="text-xl font-bold mt-1">Pengembang Web Aplikasi Sekolah</h3>
              <p className="text-sm font-semibold text-slate-400">SMKN 2 Surakarta</p>
              <p className={`text-sm mt-2 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Membuat berbagai modul sistem informasi sekolah, peminjaman barang inventaris, hingga sistem transaksi kasir berbasis PHP dan MySQL.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className={`py-20 px-6 lg:px-12 border-t ${darkMode ? 'bg-[#0a0e18]' : 'bg-slate-100 border-slate-200'}`}>
        <div className="max-w-4xl mx-auto flex flex-col gap-10">

          <div className="text-center flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">chat</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">Hubungi Aqsha Zhafif</h2>
            <p className={`text-sm max-w-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Kirim pesan langsung ke WhatsApp saya (<strong className="text-emerald-500">085864051474</strong>) untuk diskusi proyek web, tawaran PKL / Magang industri, atau informasi lainnya.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className={`p-8 rounded-3xl border shadow-xl flex flex-col gap-6 ${darkMode ? 'bg-[#171b26] border-slate-800' : 'bg-white border-slate-200'
            }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold font-mono uppercase">NAMA LENGKAP</label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className={`px-4 py-3 rounded-xl border text-sm outline-none transition-all ${darkMode ? 'bg-[#0f131d] border-slate-800 focus:border-cyan-400 text-white' : 'bg-slate-50 border-slate-300 focus:border-cyan-500 text-slate-900'
                    }`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold font-mono uppercase">EMAIL / NO. HANDPHONE</label>
                <input
                  type="text"
                  placeholder="Contoh: 08123456789 atau email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`px-4 py-3 rounded-xl border text-sm outline-none transition-all ${darkMode ? 'bg-[#0f131d] border-slate-800 focus:border-cyan-400 text-white' : 'bg-slate-50 border-slate-300 focus:border-cyan-500 text-slate-900'
                    }`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold font-mono uppercase">PESAN ANDA</label>
              <textarea
                rows="4"
                placeholder="Tuliskan pesan atau keperluan Anda di sini..."
                value={formData.pesan}
                onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                className={`px-4 py-3 rounded-xl border text-sm outline-none transition-all ${darkMode ? 'bg-[#0f131d] border-slate-800 focus:border-cyan-400 text-white' : 'bg-slate-50 border-slate-300 focus:border-cyan-500 text-slate-900'
                  }`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">send</span>
              <span>Kirim Pesan ke WhatsApp (085864051474)</span>
            </button>
          </form>

        </div>
      </section>

      <footer className={`py-8 px-6 lg:px-12 border-t text-center text-xs font-mono ${darkMode ? 'bg-[#0f131d] border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-600'
        }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src={SCHOOL_LOGO_SRC}
              alt="Logo SMKN 2 Solo"
              className="h-6 w-6 object-cover rounded-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/100x100/0ea5e9/ffffff?text=SMK";
              }}
            />
            <span>&copy; {new Date().getFullYear()} Aqsha Zhafif Aufa Wibowo • SMKN 2 Surakarta</span>
          </div>
          <div>
            <span>Dibuat Menggunakan React JS &amp; Tailwind CSS</span>
          </div>
        </div>
      </footer>

      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className={`max-w-2xl w-full rounded-3xl p-6 sm:p-8 border shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-[#171b26] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>

            {/* CV Modal Header */}
            <div className="flex items-center justify-between border-b pb-4 border-slate-700/20">
              <div className="flex items-center gap-3">
                <img
                  src={PROFILE_IMAGE_SRC}
                  alt="Foto Profile Aqsha"
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100x100/0ea5e9/ffffff?text=Aqsha";
                  }}
                />
                <div>
                  <h3 className="font-bold text-lg">Curriculum Vitae (CV)</h3>
                  <p className="text-xs text-cyan-400 font-mono">Aqsha Zhafif Aufa Wibowo</p>
                </div>
              </div>
              <button
                onClick={() => setShowCvModal(false)}
                className="p-1.5 rounded-lg hover:bg-slate-700/30 text-slate-400 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* CV Details Content */}
            <div className="flex flex-col gap-5 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-between">
                <div>
                  <p className="font-bold text-cyan-400 text-sm">Status Sekolah &amp; Jurusan</p>
                  <p className="font-medium">SMK Negeri 2 Surakarta — PPLG A</p>
                </div>
                <img
                  src={SCHOOL_LOGO_SRC}
                  alt="Logo SMKN 2 Solo"
                  className="h-10 w-10 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100x100/0ea5e9/ffffff?text=SMK";
                  }}
                />
              </div>

              <div>
                <h4 className="font-bold uppercase font-mono text-cyan-400 mb-1">Kontak WhatsApp &amp; Alamat:</h4>
                <p>• Nomor Kontak: 085864051474 (WhatsApp)</p>
                <p>• Lokasi: Surakarta, Jawa Tengah, Indonesia</p>
              </div>

              <div>
                <h4 className="font-bold uppercase font-mono text-cyan-400 mb-1">Ringkasan Profil:</h4>
                <p className="leading-relaxed">
                  Siswa PPLG A SMKN 2 Surakarta berdedikasi tinggi dengan fokus utama pada pemrograman aplikasi web. Terbiasa membangun backend dengan PHP dan database MySQL, serta merancang antarmuka frontend interaktif menggunakan React JS dan Tailwind CSS.
                </p>
              </div>

              <div>
                <h4 className="font-bold uppercase font-mono text-cyan-400 mb-1">Kompetensi Teknis:</h4>
                <p>• Pemrograman Backend: PHP OOP, Relasional Database MySQL, Session Auth</p>
                <p>• Pemrograman Frontend: React JS, Tailwind CSS, ES6 JavaScript, HTML5</p>
                <p>• Perangkat Kerja: Git &amp; GitHub Version Control</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-700/20">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all flex items-center gap-1.5 shadow-md"
              >
                <span className="material-symbols-outlined text-base">print</span>
                <span>Cetak / Simpan PDF</span>
              </button>
              <button
                onClick={() => setShowCvModal(false)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold border ${darkMode ? 'bg-[#262a35] border-slate-700' : 'bg-slate-100 border-slate-300'
                  }`}
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
