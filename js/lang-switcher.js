/* ═══════════════════════════════════════════════════════════════
   HSE PORTAL — LANGUAGE SWITCHER (ID ↔ EN)
   Shared across all pages. Include after script.js.
   ═══════════════════════════════════════════════════════════════ */

'use strict';

(function initLangSwitcher() {
  const switcher = document.getElementById('lang-switcher');
  if (!switcher) return;

  /* ── Translation dictionary (ID → EN) ─────────────────────── */
  const T = {
    /* — Navbar (shared) — */
    'Beranda':            'Home',
    'Kesehatan':          'Health',
    'Keselamatan':        'Safety',
    'Lingkungan':         'Environment',
    'Izin Kerja':         'Work Permit',
    'Tentang':            'About',
    'Laporkan Observasi': 'Report Observation',
    'Lapor Observasi':    'Report Observation',
    'Ajukan Izin':        'Apply Permit',

    /* — Shared footer — */
    'Tautan Cepat':            'Quick Links',
    'Kesehatan Kerja':         'Occupational Health',
    'Manajemen Keselamatan':   'Safety Management',
    'Pengawasan Lingkungan':   'Environmental Oversight',
    'Izin Kerja (PTW)':        'Work Permit (PTW)',
    'Kebijakan Privasi':       'Privacy Policy',
    '© 2026 Portal Resmi Departemen HSE. Segala hak dilindungi oleh undang-undang.':
      '© 2026 Official HSE Department Portal. All rights reserved.',
    '© 2025 Portal Resmi Departemen HSE. Segala hak dilindungi oleh undang-undang.':
      '© 2025 Official HSE Department Portal. All rights reserved.',

    /* ═══ INDEX.HTML ═══════════════════════════════════════════ */
    'RDMP Balikpapan JO Kariangau-37': 'RDMP Balikpapan JO Kariangau-37',
    'Portal':       'Portal',
    'Departemen':   'Department',
    'Mendorong keunggulan Keselamatan, Kesehatan, dan Lingkungan di seluruh area kerja. Satu wadah untuk pelaporan, dokumentasi, dan peningkatan berkelanjutan.':
      'Driving Safety, Health, and Environmental excellence across all work areas. A single hub for reporting, documentation, and continuous improvement.',
    'Jelajahi HSE':       'Explore HSE',
    'Laporkan Observasi': 'Report Observation',
    'Jam Kerja Aman':     'Safe Work Hours',
    'Nihil':              'Zero',
    'LTI Tahun Ini':      'LTI This Year',
    'Kepatuhan PTW':      'PTW Compliance',
    'Observasi Dilaporkan': 'Observations Reported',
    'Tinjauan Sistem HSE':                   'HSE System Overview',
    'Empat Pilar Kerangka Kerja HSE Kami':   'Our Four Pillars of HSE Framework',
    'Jelajahi setiap departemen dari sistem manajemen terpadu Keselamatan, Kesehatan & Lingkungan kami.':
      'Explore each department of our integrated Safety, Health & Environment management system.',
    'Manajemen kesehatan kerja, pengawasan medis, dan program kesejahteraan karyawan.':
      'Occupational health management, medical surveillance, and employee wellness programs.',
    'Jelajahi Kesehatan →': 'Explore Health →',
    'Identifikasi bahaya, pelaporan insiden, inspeksi keselamatan, dan manajemen kampanye.':
      'Hazard identification, incident reporting, safety inspections, and campaign management.',
    'Jelajahi Keselamatan →': 'Explore Safety →',
    'Pemantauan lingkungan, pengelolaan limbah, pencegahan polusi, dan upaya pelestarian lingkungan.':
      'Environmental monitoring, waste management, pollution prevention, and conservation efforts.',
    'Jelajahi Lingkungan →': 'Explore Environment →',
    'Izin Kerja Aman':     'Safe Work Permit',
    'Pengelolaan izin kerja digital untuk pekerjaan panas, ruang terbatas, tinggi, dan kelistrikan.':
      'Digital work permit management for hot work, confined space, working at height, and electrical work.',
    'Jelajahi PTW →':      'Explore PTW →',
    'Dasbor Kinerja':                          'Performance Dashboard',
    'Statistik HSE — Berjalan di Tahun 2025':  'HSE Statistics — Year 2025 Running',
    'Indikator kinerja keselamatan terpantau secara real-time di seluruh lokasi dan departemen kerja.':
      'Safety performance indicators monitored in real-time across all work locations and departments.',
    'Total Observasi':             'Total Observations',
    'Seluruh kategori digabungkan': 'All categories combined',
    'Temuan Belum Ditutup':        'Open Findings',
    'Membutuhkan tindakan segera': 'Requires immediate action',
    'Temuan Ditutup':              'Closed Findings',
    'Berhasil diselesaikan':       'Successfully resolved',
    'Kampanye Keselamatan':        'Safety Campaigns',
    'Sedang berlangsung kuartal ini': 'Running this quarter',
    'Kepatuhan Pemakaian APD':     'PPE Compliance',
    'Rata-rata di seluruh lokasi': 'Average across all sites',
    'Tingkat penerapan izin kerja aman': 'Safe work permit implementation rate',
    'Jam kerja tanpa LTI tahun ini':     'Work hours without LTI this year',
    'Pemeriksaan Medis':           'Medical Examinations',
    'Karyawan diperiksa bulan ini':'Employees examined this month',
    'Komitmen Kami':  'Our Commitment',
    'Membangun Budaya Nihil Insiden di Seluruh Kegiatan Operasional':
      'Building a Zero-Incident Culture Across All Operations',
    'Departemen HSE kami berdedikasi untuk menciptakan dan menjaga lingkungan kerja yang paling aman. Melalui identifikasi bahaya proaktif, sistem izin kerja aman yang ketat, dan pelibatan pegawai yang berkelanjutan, kami berupaya mencapai standar keselamatan tinggi setiap saat.':
      'Our HSE Department is dedicated to creating and maintaining the safest work environment. Through proactive hazard identification, rigorous safe work permit systems, and continuous employee engagement, we strive to achieve the highest safety standards at all times.',
    'Tersertifikasi ISO 45001 Keselamatan & Kesehatan Kerja':
      'ISO 45001 Occupational Health & Safety Certified',
    'Identifikasi Bahaya & Penilaian Risiko (HIRA) yang terintegrasi':
      'Integrated Hazard Identification & Risk Assessment (HIRA)',
    'Tim Tanggap Darurat siaga 24/7': 'Emergency Response Team on standby 24/7',
    'Patroli keselamatan bulanan yang dipimpin oleh kepala departemen':
      'Monthly safety patrols led by department heads',
    'Pelaporan observasi seketika melalui platform gawai seluler':
      'Real-time observation reporting via mobile platform',
    'Tinjau Sistem Keselamatan': 'Review Safety System',
    'Dokumentasi Foto':      'Photo Documentation',
    'Observasi HSE Terkini': 'Latest HSE Observations',
    'Inspeksi keselamatan yang didokumentasikan, program kesehatan, dan kegiatan pengawasan area lingkungan kerja.':
      'Documented safety inspections, health programs, and environmental monitoring activities.',
    'Semua Foto':    'All Photos',
    '🦺 Keselamatan':'🦺 Safety',
    '🏥 Kesehatan':  '🏥 Health',
    '🌿 Lingkungan': '🌿 Environment',
    '📋 Izin Kerja': '📋 Work Permit',
    'Buka Seluruh Galeri': 'Open Full Gallery',
    'Keterlibatan Aktif':       'Active Engagement',
    'Melihat Risiko Bahaya? Laporkan Segera.': 'See a Hazard? Report It Now.',
    'Setiap pelaporan sangat penting. Informasikan kondisi tidak aman, aktivitas berbahaya, atau kejadian hampir celaka kepada kami. Keterlibatan Anda membantu melindungi orang-orang di sekitar Anda.':
      'Every report matters. Inform us about unsafe conditions, hazardous activities, or near-miss incidents. Your involvement helps protect the people around you.',
    'Sampaikan Observasi':  'Submit Observation',
    'Ajukan Izin Kerja PTW':'Apply for Work Permit',
    'Berdedikasi tinggi demi mencapai kebudayaan nihil bahaya melalui pematuhan standar operasional, penjagaan mutu kesehatan kerja, dan konservasi alam yang ketat dan disiplin.':
      'Highly dedicated to achieving a zero-harm culture through operational standard compliance, occupational health quality assurance, and strict environmental conservation.',
    'Fasilitas Lainnya':       'Other Resources',
    'Peraturan & Kebijakan':   'Regulations & Policies',
    'Prosedur Tanggap Darurat':'Emergency Response Procedures',
    'Kalender Pelatihan':      'Training Calendar',
    'Jurnal Insiden HSE':      'HSE Incident Journal',
    'Kewajiban Pengawasan Hukum': 'Legal Oversight Obligations',
    'Kontak HSE Divisi':       'HSE Division Contacts',

    /* ═══ HEALTH.HTML ═════════════════════════════════════════ */
    '🏥 Departemen Kesehatan Kerja': '🏥 Occupational Health Department',
    'Manajemen':   'Management',
    'Kerja':       'Work',
    'Melindungi kesejahteraan karyawan melalui program medis yang komprehensif, pengawasan kesehatan berkala, dan inisiatif kesehatan proaktif.':
      'Protecting employee well-being through comprehensive medical programs, periodic health surveillance, and proactive health initiatives.',
    'Lihat Program': 'View Programs',
    'Lihat Galeri':  'View Gallery',
    'Program Utama': 'Key Programs',
    'Program Kesehatan Karyawan': 'Employee Health Programs',
    'Manajemen kesehatan terpadu yang mencakup pencegahan, pemantauan, dan rehabilitasi bagi seluruh karyawan.':
      'Integrated health management covering prevention, monitoring, and rehabilitation for all employees.',
    'Program Medis Karyawan':  'Employee Medical Program',
    'Pemeriksaan kesehatan tahunan (MCU), program vaksinasi, dan pemeriksaan kesehatan prakerja untuk semua personel. Termasuk manajemen rujukan dokter spesialis.':
      'Annual medical check-ups (MCU), vaccination programs, and pre-employment health screenings for all personnel. Includes specialist referral management.',
    'Pemantauan Kesehatan': 'Health Monitoring',
    'Pemantauan indikator kesehatan secara berkelanjutan, indeks paparan biologis, program pencegahan kehilangan pendengaran akibat kebisingan (NIHL), dan penilaian ergonomi.':
      'Continuous health indicator monitoring, biological exposure indices, noise-induced hearing loss (NIHL) prevention programs, and ergonomic assessments.',
    'Kelaikan Kerja (Fitness To Work)': 'Fitness To Work (FTW)',
    'Penilaian medis untuk peran pekerjaan berisiko tinggi, termasuk bekerja di ketinggian, memasuki ruang terbatas, mengoperasikan alat berat, dan penugasan lepas pantai.':
      'Medical assessment for high-risk job roles, including working at height, confined space entry, heavy equipment operation, and offshore assignments.',
    'Tanggap Darurat Medis': 'Medical Emergency Response',
    'Petugas medis terlatih, stasiun pertolongan pertama (P3K), dan unit AED ditempatkan di seluruh area operasional. Simulasi darurat (drill) dilakukan setiap bulan.':
      'Trained medical officers, first aid stations, and AED units deployed across all operational areas. Emergency drills conducted monthly.',
    'Kesehatan Mental & Kesejahteraan': 'Mental Health & Wellness',
    'Program Bantuan Karyawan (EAP), loka karya manajemen stres, layanan konseling rahasia, dan asesmen risiko psikososial.':
      'Employee Assistance Program (EAP), stress management workshops, confidential counseling services, and psychosocial risk assessments.',
    'Gizi & Gaya Hidup': 'Nutrition & Lifestyle',
    'Standar gizi kantin, program hidrasi untuk pekerja lapangan, kampanye anti-kelelahan (fatigue), dan edukasi pola tidur sehat untuk pekerja sif.':
      'Canteen nutrition standards, hydration programs for field workers, anti-fatigue campaigns, and healthy sleep education for shift workers.',
    'Kelaikan Kerja (FTW)': 'Fitness To Work (FTW)',
    'Memastikan Setiap Pekerja Sehat secara Medis untuk Perannya':
      'Ensuring Every Worker is Medically Fit for Their Role',
    'Program Kelaikan Kerja (Fitness to Work) kami memastikan bahwa semua karyawan yang menjalankan tugas kritis telah diperiksa secara medis dan dinyatakan siap sebelum memulai pekerjaan. Hal ini mengurangi risiko operasional serta melindungi individu bersangkutan maupun rekan kerja lainnya.':
      'Our Fitness to Work (FTW) program ensures all employees performing critical duties are medically examined and cleared before commencing work. This reduces operational risk and protects both the individual and their colleagues.',
    'Pemeriksaan medis sebelum bekerja dan berkala': 'Pre-employment and periodic medical examinations',
    'Analisis tuntutan tugas pekerjaan dan pencocokan kandidat': 'Job task demand analysis and candidate matching',
    'Penilaian kembali bekerja setelah pemulihan dari sakit atau cedera': 'Return-to-work assessment after recovery from illness or injury',
    'Rujukan klinis spesialis bila diwajibkan': 'Specialist clinical referral when required',
    'Protokol pengujian obat-obatan & alkohol yang ketat': 'Strict drug & alcohol testing protocols',
    'Unduh Prosedur FTW': 'Download FTW Procedure',
    'Metrik Kesehatan': 'Health Metrics',
    'Statistik Program Kesehatan — 2025': 'Health Program Statistics — 2025',
    'Tahun ini (Berjalan)': 'This Year (Running)',
    'Cakupan Vaksinasi': 'Vaccination Coverage',
    'Seluruh vaksin wajib': 'All mandatory vaccines',
    'Kepatuhan FTW': 'FTW Compliance',
    'Asemen tugas berisiko': 'High-risk task assessments',
    'Rata-rata Waktu Tanggap': 'Average Response Time',
    'Respons darurat medis': 'Medical emergency response',
    'Dokumentasi Kampanye': 'Campaign Documentation',
    'Galeri Kampanye Kesehatan': 'Health Campaign Gallery',
    'Jadwalkan Konsultasi Kesehatan': 'Schedule a Health Consultation',
    'Kunjungi klinik Kesehatan Kerja kami atau hubungi tim medis operasional terkait kekhawatiran dan keluhan kesehatan apa pun.':
      'Visit our Occupational Health clinic or contact the operational medical team regarding any health concerns.',
    '📅 Buat Janji Temu': '📅 Book Appointment',
    '📞 Hubungi Tim Medis': '📞 Contact Medical Team',
    'Berkomitmen penuh pada kesehatan pekerja, keselamatan, dan pelestarian lingkungan di semua area operasi.':
      'Fully committed to worker health, safety, and environmental conservation across all operational areas.',
    'Fasilitas Kesehatan': 'Health Facilities',
    'Prosedur Medis': 'Medical Procedures',
    'Pedoman FTW': 'FTW Guidelines',
    'Jadwal Vaksinasi': 'Vaccination Schedule',
    'Kontak Darurat': 'Emergency Contact',
    'Kontak Medis': 'Medical Contact',

    /* ═══ SAFETY.HTML ═════════════════════════════════════════ */
    '⛑️ Sistem Manajemen Keselamatan': '⛑️ Safety Management System',
    'Sistem Manajemen': 'Safety Management',
    'Pendekatan sistematis dan proaktif terhadap identifikasi bahaya, pengendalian risiko, pelaporan insiden, dan peningkatan keselamatan berkelanjutan di seluruh kegiatan operasional.':
      'A systematic and proactive approach to hazard identification, risk control, incident reporting, and continuous safety improvement across all operations.',
    'Telusuri SMK': 'Explore SMS',
    'Laporkan Insiden': 'Report Incident',
    'KPI Keselamatan': 'Safety KPIs',
    'Kinerja Keselamatan — 2025': 'Safety Performance — 2025',
    'Cedera Hilang Waktu (LTI)': 'Lost Time Injuries (LTI)',
    'Nihil LTI — Tahun Ini': 'Zero LTI — This Year',
    'Observasi Keselamatan': 'Safety Observations',
    'Disampaikan kuartal ini': 'Submitted this quarter',
    'Hampir Celaka (Near Miss)': 'Near Miss',
    'Pelajaran dibagikan ke seluruh area': 'Lessons shared across all areas',
    'Kepatuhan APD': 'PPE Compliance',
    'Inspeksi area terakhir': 'Latest area inspection',
    'Manajemen Risiko': 'Risk Management',
    'Identifikasi Bahaya & Penilaian Risiko (HIRA)': 'Hazard Identification & Risk Assessment (HIRA)',
    'Proses HIRA kami secara sistematis mengidentifikasi bahaya di tempat kerja dan menerapkan kendali yang sesuai untuk menghilangkan atau meminimalkan risiko.':
      'Our HIRA process systematically identifies workplace hazards and implements appropriate controls to eliminate or minimize risks.',
    'Identifikasi Bahaya': 'Hazard Identification',
    'Survei tempat kerja sistematis, Analisis Keselamatan Kerja (JSA), dan daftar risiko spesifik tugas diperbarui setiap triwulan serta ditinjau oleh kepala departemen.':
      'Systematic workplace surveys, Job Safety Analysis (JSA), and task-specific risk registers updated quarterly and reviewed by department heads.',
    'Penilaian Risiko': 'Risk Assessment',
    'Matriks risiko Kemungkinan × Konsekuensi, analisis Bow-Tie untuk bahaya besar, dan penerapan prinsip ALARP (As Low As Reasonably Practicable).':
      'Likelihood × Consequence risk matrix, Bow-Tie analysis for major hazards, and ALARP (As Low As Reasonably Practicable) principle application.',
    'Langkah Pengendalian': 'Control Measures',
    'Hierarki pengendalian diterapkan — eliminasi, substitusi, pengendalian rekayasa, pengendalian administratif, dan APD (Alat Pelindung Diri) sebagai upaya terakhir.':
      'Hierarchy of controls applied — elimination, substitution, engineering controls, administrative controls, and PPE as last resort.',
    'Manajemen Insiden': 'Incident Management',
    'Pelaporan & Investigasi Insiden': 'Incident Reporting & Investigation',
    'Semua insiden, situasi hampir celaka (near miss), dan kondisi tidak aman harus segera dilaporkan. Proses investigasi kami berfokus pada identifikasi akar penyebab untuk mencegah kejadian serupa terulang kembali.':
      'All incidents, near misses, and unsafe conditions must be reported immediately. Our investigation process focuses on root cause identification to prevent recurrence.',
    'Pemberitahuan awal dalam kurun waktu 1 jam setelah insiden': 'Initial notification within 1 hour of incident',
    'Laporan awal disampaikan dalam kurun waktu 24 jam': 'Preliminary report submitted within 24 hours',
    'Analisis akar penyebab (RCA) diselesaikan dalam kurun waktu 14 hari': 'Root Cause Analysis (RCA) completed within 14 days',
    'Rencana tindakan korektif dengan kejelasan penanggung jawab': 'Corrective action plan with clear accountability',
    'Pembelajaran yang dibagikan ke seluruh departemen': 'Lessons learned shared across all departments',
    'Laporkan Insiden': 'Report Incident',
    'Program Observasi': 'Observation Program',
    'Kategori Observasi Keselamatan': 'Safety Observation Categories',
    'Program observasi keselamatan kami mendorong seluruh karyawan untuk melaporkan praktik positif maupun area yang memerlukan perbaikan.':
      'Our safety observation program encourages all employees to report positive practices and areas requiring improvement.',
    'Praktik Baik (Good Practice)': 'Good Practice',
    'Mengenali dan mendokumentasikan perilaku keselamatan yang positif dan praktik terbaik yang layak dibagikan.':
      'Recognizing and documenting positive safety behaviors and best practices worth sharing.',
    'Tindakan Positif': 'Positive Action',
    'Kondisi Tidak Aman (Unsafe Condition)': 'Unsafe Condition',
    'Bahaya fisik, peralatan yang rusak, ketidakteraturan, atau perlindungan alat yang kurang memadai.':
      'Physical hazards, damaged equipment, disorder, or inadequate guarding.',
    'Perlu Tindakan Segera': 'Immediate Action Required',
    'Tindakan Tidak Aman (Unsafe Act)': 'Unsafe Act',
    'Observasi perilaku yang mencakup ketidakpatuhan terhadap prosedur dan pengabaian sistem keselamatan.':
      'Behavioral observations including non-compliance with procedures and safety system neglect.',
    'Tindakan Korektif': 'Corrective Action',
    'Kejadian yang berpotensi menyebabkan cedera maupun kerusakan — kunci utama untuk peningkatan keselamatan proaktif.':
      'Events that could have caused injury or damage — key to proactive safety improvement.',
    'Laporkan Sekarang': 'Report Now',
    'Formulir Observasi': 'Observation Form',
    'Sampaikan Observasi Keselamatan': 'Submit Safety Observation',
    'Laporan akan langsung dikirim ke WhatsApp Petugas HSE setelah form diisi.':
      'The report will be sent directly to HSE Officer WhatsApp after the form is filled.',
    'Galeri Kampanye Keselamatan': 'Safety Campaign Gallery',
    'Berkomitmen penuh pada nol bahaya di seluruh wilayah kegiatan operasional.':
      'Fully committed to zero harm across all operational areas.',
    'Pusat Data Keselamatan': 'Safety Data Center',
    'Daftar HIRA': 'HIRA Register',
    'Basis Data Insiden': 'Incident Database',
    'Templat JSA': 'JSA Templates',
    'Peringatan Keselamatan (Alert)': 'Safety Alerts',
    'Keadaan Darurat': 'Emergency',

    /* ═══ ENVIRONMENT.HTML ════════════════════════════════════ */
    '🌿 Departemen Perlindungan Lingkungan': '🌿 Environmental Protection Department',
    'Perlindungan': 'Protection',
    'Memantau, mengelola, dan meminimalkan jejak lingkungan kita melalui program berbasis sains, kepatuhan terhadap regulasi, dan inisiatif keberlanjutan menyeluruh.':
      'Monitoring, managing, and minimizing our environmental footprint through science-based programs, regulatory compliance, and comprehensive sustainability initiatives.',
    'Program Kami': 'Our Programs',
    'Data Pemantauan': 'Monitoring Data',
    'KPI Lingkungan': 'Environmental KPIs',
    'Kinerja Lingkungan — 2025': 'Environmental Performance — 2025',
    'Limbah Didaur Ulang': 'Waste Recycled',
    'Total limbah padat yang dialihkan': 'Total solid waste diverted',
    'Insiden Tumpahan': 'Spill Incidents',
    'Nihil tumpahan tahun ini': 'Zero spills this year',
    'Pohon Ditanam': 'Trees Planted',
    'Program reboisasi 2025': 'Reforestation program 2025',
    'Pengurangan Karbon': 'Carbon Reduction',
    'Dibandingkan garis dasar 2024': 'Compared to 2024 baseline',
    'Program Lingkungan': 'Environmental Programs',
    'Inisiatif Lingkungan Kami': 'Our Environmental Initiatives',
    'Program berbasis sains yang sejalan dengan standar ISO 14001 dan peraturan perlindungan alam tingkat nasional.':
      'Science-based programs aligned with ISO 14001 standards and national environmental protection regulations.',
    'Pengelolaan Limbah': 'Waste Management',
    'Pemantauan Lingkungan': 'Environmental Monitoring',
    'Pencegahan Pencemaran': 'Pollution Prevention',
    'Efisiensi Energi': 'Energy Efficiency',
    'Perlindungan Keanekaragaman Hayati': 'Biodiversity Protection',
    'Program Keberlanjutan Sistematis': 'Systematic Sustainability Program',
    'Laporkan Kekhawatiran Lingkungan': 'Report Environmental Concerns',
    'Berkomitmen pada pengelolaan lingkungan dan keberlanjutan yang bertanggung jawab.':
      'Committed to responsible environmental management and sustainability.',
    'Tautan Lingkungan': 'Environmental Links',
    'Dokumentasi EMS': 'EMS Documentation',
    'Manifes Limbah': 'Waste Manifest',
    'Laporan Pemantauan': 'Monitoring Reports',
    'Pengajuan Regulasi': 'Regulatory Submissions',

    /* ═══ PERMIT.HTML ═════════════════════════════════════════ */
    '📋 Sistem Izin Kerja Terpadu': '📋 Integrated Work Permit System',
    'Sistem Izin Kerja': 'Work Permit System',
    'Kinerja PTW': 'PTW Performance',
    'Statistik Izin Kerja — 2025': 'Work Permit Statistics — 2025',
    'Izin Diterbitkan': 'Permits Issued',
    'Total tahun berjalan': 'Year-to-date total',
    'Tingkat Kepatuhan PTW': 'PTW Compliance Rate',
    'Temuan audit resmi': 'Official audit findings',
    'Rata-rata Waktu Proses': 'Average Processing Time',
    'Dari pengajuan ke persetujuan': 'From application to approval',
    'Pelanggaran Izin': 'Permit Violations',
    'Nihil pelanggaran tahun ini': 'Zero violations this year',
    'Kategori Izin': 'Permit Categories',
    'Jenis Izin Kerja (Permit To Work)': 'Work Permit Types (PTW)',
    'Izin Kerja Panas (Hot Work)': 'Hot Work Permit',
    'Izin Masuk Ruang Terbatas': 'Confined Space Entry Permit',
    'Izin Kerja di Ketinggian': 'Working at Height Permit',
    'Izin Kerja Kelistrikan': 'Electrical Work Permit',
    'Penggalian & Pembongkaran': 'Excavation & Demolition',
    'Operasi Pengangkatan (Lifting)': 'Lifting Operations',
    'Alur Kerja PTW': 'PTW Workflow',
    'Bagaimana Proses Izin Kerja (PTW) Berlangsung': 'How the PTW Process Works',
    'Pengajuan Online': 'Online Application',
    'Buat Permohonan Izin Baru': 'Create New Permit Application',
    'Jangan Pernah Bekerja Tanpa Izin Valid': 'Never Work Without a Valid Permit',
    'Tautan Kilat': 'Quick Links',
    'Sumber Daya PTW': 'PTW Resources',
    'Prosedur PTW': 'PTW Procedures',
    'Standar Lockout/Tagout': 'Lockout/Tagout Standards',
    'Registrasi Izin Khusus': 'Special Permit Registration',
    'Sertifikasi Pelatihan': 'Training Certification',
    'Otoritas PTW Khusus': 'PTW Authority',
    'Keselamatan Anda adalah prioritas utama kami. Tidak ada izin = Tidak boleh bekerja.':
      'Your safety is our top priority. No permit = No work.',
    'Tentang Kami': 'About Us',

    /* ═══ ABOUT.HTML ══════════════════════════════════════════ */
    '🛡️ Departemen HSE — FMC-37': '🛡️ HSE Department — FMC-37',
    'Tentang': 'About',
    'Tim HSE FMC-37 berkomitmen penuh untuk memelihara operasional wilayah kerja kerja yang terjamin aman, menjunjung kesehatan, dan mengawasi keseimbangan berkelanjutan secara lintas seluruh pabrik wilayah.':
      'HSE FMC-37 team is fully committed to maintaining safe work operations, upholding health standards, and overseeing sustainable balance across all plant areas.',
    'Bertemu Anggota Tim': 'Meet the Team',
    'Penjelasan Misi Kami': 'Our Mission Explained',
    'Insiden Kerja (LTI)': 'Work Incidents (LTI)',
    'Kepatuhan Izin PTW': 'PTW Permit Compliance',
    'Staf Personel HSE': 'HSE Personnel',
    'Tentang Kami': 'About Us',
    'Tim HSE FMC-37': 'HSE FMC-37 Team',
    'Struktur Organisasi': 'Organizational Structure',
    'Tim HSE FMC-37 terdiri dari 6 profesional berpengalaman yang bekerja bersama untuk memastikan keselamatan operasional.':
      'HSE FMC-37 team consists of 6 experienced professionals working together to ensure operational safety.',
    'Visi Unggulan': 'Our Vision',
    'Misi Utama': 'Our Mission',
    'Nilai Moral Terpadu': 'Integrated Moral Values',
    'Dasar Komitmen Etos': 'Commitment Foundation',
  };

  /* Build reverse map (EN → ID) */
  const R = {};
  for (const [id, en] of Object.entries(T)) R[en] = id;

  let currentLang = 'id';

  /* Normalize whitespace for comparison */
  function norm(s) {
    return s.replace(/\s+/g, ' ').trim();
  }

  /* Build normalized lookup */
  function buildNormDict(dict) {
    const nd = {};
    for (const [k, v] of Object.entries(dict)) {
      nd[norm(k)] = v;
    }
    return nd;
  }

  function translatePage(lang) {
    if (lang === currentLang) return;
    const rawDict = lang === 'en' ? T : R;
    const dict = buildNormDict(rawDict);

    /* 1. Translate text nodes */
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        const p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (['SCRIPT','STYLE','NOSCRIPT'].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.closest('.lang-switcher')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const normalized = norm(node.textContent);
      if (dict[normalized]) {
        const leading  = node.textContent.match(/^\s*/)[0];
        const trailing = node.textContent.match(/\s*$/)[0];
        node.textContent = leading + dict[normalized] + trailing;
      }
    });

    /* 2. Translate multi-line paragraph elements */
    const blockSelectors = [
      '.hero-subtitle', '.split-desc', '.cta-desc', '.section-desc',
      '.footer-desc', '.feature-desc', '.nav-card-desc', '.permit-desc',
      '.ptw-step-desc', '.vm-text', '.split-title', '.cta-title',
      '.stat-sublabel', '.stat-label', '.feature-title', '.nav-card-title',
      '.permit-title', '.ptw-step-title'
    ];
    document.querySelectorAll(blockSelectors.join(',')).forEach(el => {
      const txt = norm(el.textContent);
      if (dict[txt]) el.textContent = dict[txt];
    });

    /* 3. Also translate list items */
    document.querySelectorAll('.split-list li').forEach(el => {
      const txt = norm(el.textContent);
      if (dict[txt]) el.textContent = dict[txt];
    });

    /* Update html lang attribute */
    document.documentElement.lang = lang;
    currentLang = lang;
  }

  /* Wire up buttons */
  switcher.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      switcher.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      translatePage(btn.dataset.lang);
    });
  });
})();
