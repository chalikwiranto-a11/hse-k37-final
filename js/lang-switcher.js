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

    /* ═══ NEW ADDITIONS (ENVIRONMENT) ═════════════════════════ */
    'Kategori Bahan Limbah Industri Perusahaan': 'Industrial Waste Material Categories',
    'Program Manajemen Sistematis Klasifikasi Material Sisa Pembuangan': 'Systematic Management Program for Residual Waste Classification',
    'Pengumpulan dan pengelolaan sesuai landasan yuridis regulasi nasional menyangkut Peraturan Pemerintah pasal 22 tahun 2021.': 'Collection and management in accordance with the national regulatory framework regarding Government Regulation Article 22 of 2021.',
    'Bahan Bebahaya dan Bercaun': 'Hazardous and Toxic Materials',
    'Pelumas mesin produksi sisa penukaran, bahan sisa reagen korosif alat kesehatan , sel bateri alkaline kadaluwarsa , peralatan dan segala barang yang menempel sisa kandungan toksin.': 'Used production machine lubricants, corrosive reagent residues from medical equipment, expired alkaline battery cells, and all equipment or items containing toxic residue traces.',
    '⚠️ Mutlak Ter-Regulasi Khusus Sesuai Prosedur KHLK': '⚠️ Strictly Regulated According to KHLK Procedures',
    'Sampah Olah Produksi Pabrikan Konvensional': 'Conventional Manufacturing Production Waste',
    'Kertas karton pembungkus komponen mesin sparepart, gelas plastik material kemasan, dan palet baja pelindung beban besar sebelum akhirnya dilakukan serah terima ke pihak vendor pengelolaan ulang berlisensi pihak ke 3.': 'Cardboard packaging for machine spare parts, plastic glass packaging materials, and heavy-duty steel protective pallets, prior to handover to licensed third-party recycling vendors.',
    '✅ Di atas ekspektasi pencapaian bulanan': '✅ Exceeding monthly achievement expectations',
    'Residu Nabati / Material Bahan Alam': 'Botanical Residues / Natural Materials',
    'Daun ranting sisa penyeimbangan kawasan vegetasi alam dan sisa konsumsi catering untuk penguraian organik area taman internal departement dan pekarangan belakang yang dialihfungsukan melalui inokulasi mikroba aerob fakultatif alami': 'Leaves, twigs from natural vegetation balancing, and catering consumption waste for organic decomposition in the department\'s internal garden and backyard areas, repurposed through natural facultative aerobic microbial inoculation.',
    '🌱 Dekomposisi Mandiri dan terencana berkala dan dimonitor rutin': '🌱 Independent, periodically planned decomposition with routine monitoring',
    'Buangan Sipil': 'Civil Construction Waste',
    'Reruntuhan pondasi tanah galian penguatan sruktur, material insulasi rusak , puing tembok penghalang semen beton pengerasan cor yang tidak bisa dipergunakan karena sudah melalui spesfikasi kelayakan perombakan dan penggantian untuk dilakukan penghancuran sistematis .': 'Excavated foundation soil for structural reinforcement, damaged insulation materials, and unusable concrete barrier rubble resulting from systematic demolition after passing renovation and replacement feasibility specifications.',
    '📋 Transpor Pihak Berbadan Hukum Sipil terdata valid': '📋 Transported by legally registered civil entities',
    'Catatan Digital Mutu Kawasan Lingkungan Terpadu': 'Digital Record of Integrated Environmental Area Quality',
    'Aktivitas Evaluasi Kepatuhan Kualtias Mutu Lingkungan Sesuai Standar Operasional.': 'Environmental Quality Compliance Evaluation Activities in Accordance with Operational Standards.',
    'Mengamati adanya potensi tumpahan limbah, pembuangan ilegal, atau temuan bahaya lingkungan lainnya? Segera laporkan melalui sistem observasi HSE kami untuk ditindaklanjuti secara cepat dan tepat.': 'Observed potential waste spills, illegal dumping, or other environmental hazards? Report immediately through our HSE observation system for prompt and accurate follow-up.',
    '🌍 Laporkan Temuan Lingkungan': '🌍 Report Environmental Findings',
    '📄 Unduh Dokumen EMS Policy': '📄 Download EMS Policy Document',
    '🚨 Hotline Tumpahan:': '🚨 Spill Hotline:',
    'Kepatuhan Peraturan Regulasi Terkait': 'Related Regulatory Compliance',
    'Kepatuhan Regulasi Pengawasan & Pemantauan Pengelolaan Limbah Operasional': 'Regulatory Compliance of Operational Waste Management Supervision & Monitoring',
    'Kami secara ketat memonitor seluruh pembuangan yang bersinggungan ke area luar perusahaan, menyesuaikan prosedur evaluasi bulanan yang menjamin keabsahan hukum terhadap arahan instruksional yang ada.': 'We strictly monitor all discharges intersecting into areas outside the company, adapting monthly evaluation procedures ensuring legal validity following existing instructional directives.',
    'Laporan pencemaran yang dipublikasi dan diproteksi sesuai ambang acuan resmi bulanan': 'Pollution reports published and protected according to the official monthly reference threshold',
    'Standar parameter pengetesan (PM10, SO₂, NOx) dengan sertifikasi resmi lembaga independent': 'Testing parameter standards (PM10, SO₂, NOx) with official independent certification',
    'Inspeksi dokumen perizinan Amdal (Analisa Mengenai Dampak Lingkungan) secara spesifik': 'Specific inspection of Amdal (Environmental Impact Analysis) permit documents',
    'Infrastruktur pengecekan aliran kedalaman dan baku mutu pada saluran aliran drainase terbuka di setiap sisi pabrik bangunan.': 'Infrastructure for checking depth flow and quality standards in open drainage channels on every side of the building plant.',
    'Sinkronisasi sistem elektronik dengan pelaporan instansi berwenang terkait AMDAL terpadu': 'Synchronization of electronic systems with integrated EIA reporting to authorized agencies',
    'Unduh Laporan Lingkungan Tahunan Terkini': 'Download the Latest Annual Environmental Report',
    'Pengurangan Limbah B3': 'Hazardous Waste Reduction',
    'Kepatuhan PROPER': 'PROPER Compliance',
    'Pengolahan Air Limbah': 'Wastewater Treatment',
    'Emisi CO₂ Dikurangi': 'CO₂ Emissions Reduced',

    /* ═══ NEW ADDITIONS (PERMIT) ══════════════════════════════ */
    'Sistem manajemen keselamatan tertulis dan terdokumentasi yang memastikan semua aktivitas pekerjaan nonrutin dan berisiko tinggi telah diotorisasi, direncanakan, serta dieksekusi dengan standar keamanan penuh.': 'A documented written safety management system ensuring all non-routine and high-risk work activities are authorized, planned, and executed with uncompromising safety standards.',
    'Lihat Jenis Izin →': 'View Permit Types →',
    'Ajukan Izin Baru': 'Apply for New Permit',
    'Izin Aktif': 'Active Permits',
    'Disetujui Hari Ini': 'Approved Today',
    'Setiap jenis izin dirancang khusus untuk aktivitas berisiko tinggi tertentu dan memerlukan tindakan pencegahan, persetujuan, serta pemantauan yang ketat.': 'Each permit type is specifically designed for certain high-risk activities and requires rigorous precautions, approvals, and monitoring.',
    '● Aktif': '● Active',
    '● Tertunda': '● Pending',
    '● Ditutup': '● Closed',
    'Untuk semua aktivitas yang menghasilkan panas, percikan api, atau nyala api terbuka — seperti pengelasan, pemotongan, gerinda. Memerlukan pengawasan api (fire watch), izin gas test, dan isolasi area.': 'For all activities generating heat, sparks, or open flames — such as welding, cutting, grinding. Requires fire watch, gas test permit, and area isolation.',
    '🔥 Pengelasan': '🔥 Welding',
    '⚡ Pemotongan': '⚡ Cutting',
    '🔧 Gerinda': '🔧 Grinding',
    'Untuk memasuki tangki, bejana, saluran pembuangan, atau ruang tertutup dengan akses terbatas. Wajib melakukan gas test, pemantauan berkelanjutan, menyediakan standby man, dan rencana evakuasi darurat.': 'For entering tanks, vessels, sewers, or confined spaces with restricted access. Mandatory gas testing, continuous monitoring, standby man provision, and emergency evacuation plan.',
    '🧪 Gas Test': '🧪 Gas Test',
    '👷 Standby Man': '👷 Standby Man',
    '🚨 Rencana Penyelamatan': '🚨 Rescue Plan',
    'Pekerjaan yang dilakukan di atas ketinggian 1,8 meter. Membutuhkan sertifikat inspeksi perancah (scaffold tag), tali pengaman tubuh penuh (full-body harness), verifikasi titik jangkar, dan area terbatas di bawahnya.': 'Work performed above 1.8 meters. Requires scaffold inspection certificate (scaffold tag), full-body harness, anchor point verification, and restricted area below.',
    '🪜 Tag Perancah': '🪜 Scaffold Tag',
    '🦺 Full Harness': '🦺 Full Harness',
    '⛔ Zona Eksklusi': '⛔ Exclusion Zone',
    'Untuk semua pemeliharaan kelistrikan bertegangan di atas 50V. Wajib menerapkan Lockout/Tagout (LOTO). Membutuhkan ahli listrik tersertifikasi, persetujuan resmi, dan sertifikat isolasi daya.': 'For all electrical maintenance above 50V. Mandatory Lockout/Tagout (LOTO) application. Requires certified electrician, official approval, and power isolation certificate.',
    '🔒 LOTO': '🔒 LOTO',
    '🧑‍🔧 Teknisi Listrik': '🧑‍🔧 Electrician',
    '📜 Sertifikat Isolasi': '📜 Isolation Certificate',
    'Aktivitas penggalian pipa, pembuatan parit, atau pembongkaran tanah. Wajib melakukan pendeteksian utilitas bawah tanah, pelindung tepi parit, serta penilaian struktur tanah sebelum pekerjaan dimulai.': 'Activities involving pipe excavation, trenching, or earth demolition. Mandatory underground utility detection, trench edge protection, and soil structure assessment prior to starting work.',
    '🗺️ Survei CAD': '🗺️ CAD Survey',
    '📡 CAT Scan': '📡 CAT Scan',
    '🧱 Perlindungan Tepi': '🧱 Edge Protection',
    'Pengangkatan kritis yang menggunakan crane, kerekan (hoist), atau peralatan rigging. Harus disertai lifting plan, kalkulasi beban statis dinamis, rigger bersertifikat sah, dan operator peralatan berpengalaman.': 'Critical lifting using cranes, hoists, or rigging equipment. Must be accompanied by a lifting plan, dynamic static load calculations, valid certified rigger, and experienced equipment operator.',
    '📐 Lifting Plan': '📐 Lifting Plan',
    '🎖️ Rigger Bersertifikat': '🎖️ Certified Rigger',
    '🏗️ Lisensi Crane': '🏗️ Crane License',
    'Setiap izin kerja harus mengikuti 6 tahap prosedur terstruktur untuk memastikan penerapan dan pengendalian bahaya teridentifikasi secara teliti sebelum pekerjaan dimulai.': 'Every work permit must follow a 6-step structured procedure to ensure thorough identification, application, and control of hazards before work begins.',
    'Pengajuan — Pemohon Mengajukan Permohonan PTW': 'Application — Applicant Submits PTW Request',
    'Penanggung jawab pelaksana pekerjaan (Performing Authority) wajib melengkapi form permohonan PTW dengan jelas, menjabarkan rincian pekerjaan, lingkup ruang lokasi, jadwal waktu durasi, potensi bahaya temuan, dan mitigasi serta langkah keamanan.': 'The Performing Authority must clearly complete the PTW application form, detailing the work scope, location boundaries, time duration schedule, hazard potential findings, and mitigation and safety measures.',
    'Penilaian Risiko Skala — Tinjauan Evaluasi Berkas JSA & HIRA': 'Scaled Risk Assessment — JSA & HIRA Document Evaluation Review',
    'Pemenuhan prosedur Job Safety Analysis telah dilakukan secara menyeluruh terhadap rancangan tugas. Berbagai tingkat bahasan bahaya dinilai berkesesuaian dengan matrik standar bahaya untuk memperoleh pengendalian mutlak terdokumentasi akurat.': 'Compliance with Job Safety Analysis procedures has been comprehensively conducted for the task design. Various required hazard levels are assessed in accordance with the standard hazard matrix to achieve accurate, documented absolute control.',
    'Inspeksi Kesehatan Keselamatan K3 — Verifikasi Lapangan Departemen HSE': 'OHS Health & Safety Inspection — HSE Department Field Verification',
    'Petugas verifikator HSE mengulas aplikasi, memvalidasi bukti sertifikasi kepatuhan LOTO, memeriksa batas izin keabsahan pekerja teknis kompeten, menilai kecocokan alat protektif tambahan sebelum proses ditinjau dan divalidasi tandatangan resmi kontrol HSE.': 'HSE verifiers review the application, validate LOTO compliance certification evidence, inspect competent technical worker permit validity limits, and assess the suitability of additional protective equipment before the process is evaluated and officially validated by HSE control signature.',
    'Otorisasi Hak Berjalan Pekerjaan — Legalitas Penanggung Jawab Area (Issuing Authority)': 'Work Authorization — Legal Area Authority (Issuing Authority)',
    'Otoritas yang berwenang selaku tuan rumah pemilik ruang lingkup (Pengawas Area/ Kepala Departemen/ Manager Site) memandu persetujuan penerbitan permit formal. Permit tersebut memiliki durasi tenggang sah di waktu tercatat saja dan tidak selamanya berlaku tanpa validasi harian tertulis rutin.': 'The authorized host owner of the scope (Area Supervisor/Department Head/Site Manager) guides the formal permit issuance approval. The permit is valid only for the recorded duration period and is not perpetually valid without routine written daily validation.',
    'Penyuluhan Edukasi Briefing Terjadwal Mingguan / Harian Singkat Kerja (Toolbox Talk/ TBM)': 'Scheduled Briefing Educational Extension / Daily Short Work Briefing (Toolbox Talk / TBM)',
    'Secara menyeluruh tim kelompok perkerja terlibat dipanggil untuk menerima pengarahan mengenai resiko, poin langkah kerja, titik zona titik larangan dsb. Setelahnya pekerja yang tersangkut paut wajib memberikan persetujuan cap/ tanda tangan langsung kehadiran pemahaman K3 tanpa terlewati.': 'The entire involved work group team is called to receive briefings on risks, work step points, prohibited zone checkpoints, etc. Afterwards, the concerned workers must provide direct stamp/signature approval of OHS understanding attendance without exception.',
    'Penyelesaian Berkas (Closure) & Pengembalian Semula Area Lahan Netral Tertib': 'Document Finalization (Closure) & Return of Area to Orderly Neutral Ground',
    'Bertepatan tugas usai dituntaskan, seluruh kelistrikan aktif dibuka kembali / segel isolasi dibuka, personil pengelola serah terima jaminan kondisi rapi dan tak ada tumpahan yang tidak dibersihkan, setelah sempurna departemen wewenang mengakhiri status riwayat operasional tersebut sebagai pekerjaan aman telah berakhir.': 'Upon task completion, all active electrical lines are reopened / isolation seals removed, management personnel hand over the guarantee of a neat condition with no uncleaned spills, and once perfect, the authoritative department concludes the operational history status as a safely finished job.',
    'Lengkapi formulir permohonan awal di bawah ini. Tim HSE kami akan langsung bertindak memproses data Anda dan menghubungi kembali untuk meneruskan tinjauan prosedur formal JSA lanjutan.': 'Complete the initial application form below. Our HSE team will immediately process your data and contact you back to proceed with the further formal JSA procedure review.',
    'Terintegrasi WhatsApp': 'WhatsApp Integrated',
    'Pengajuan PTW akan dikirim ke WA PTW Controller. Proses persetujuan min. 24 jam untuk permit standar.': 'PTW submission will be sent to the PTW Controller\'s WA. Minimum approval process is 24 hours for standard permits.',
    'Penting:': 'Important:',
    'Pekerjaan tidak boleh dimulai sebelum permit yang ditandatangani dipegang oleh Performing Authority. Persetujuan lisan tidak berlaku.': 'Work must not commence before the signed permit is held by the Performing Authority. Verbal approval is invalid.',
    '👤 Nama Pemohon *': '👤 Applicant Name *',
    '📞 No. HP / WhatsApp *': '📞 Phone / WhatsApp No. *',
    '📋 Jenis Permit *': '📋 Permit Type *',
    '🏢 Departemen *': '🏢 Department *',
    'Operasional': 'Operations',
    'Pemeliharaan': 'Maintenance',
    'Konstruksi': 'Construction',
    'Engineering': 'Engineering',
    'Kontraktor Eksternal': 'External Contractor',
    '📍 Lokasi Pekerjaan *': '📍 Work Location *',
    '📅 Tanggal Rencana *': '📅 Planned Date *',
    '🕒 Jam Mulai *': '🕒 Start Time *',
    '🕒 Jam Selesai (Estimasi)': '🕒 End Time (Estimated)',
    '👷 Jumlah Pekerja Terlibat': '👷 Number of Involved Workers',
    '📝 Deskripsi Pekerjaan *': '📝 Work Description *',
    '⚠️ Bahaya yang Teridentifikasi & Pengendalian': '⚠️ Identified Hazards & Controls',
    'Saya mengonfirmasi': 'I confirm',
    'bahwa seluruh informasi di atas benar. Job Safety Analysis (JSA) telah didiskusikan & semua rambu K3 dipenuhi secara ketat.': 'that all the above information is true. Job Safety Analysis (JSA) has been discussed & all OHS signs are strictly complied with.',
    'Kirim Pengajuan Permit via WhatsApp': 'Send Permit Request via WhatsApp',
    'Sistem Izin Kerja (PTW) ada untuk melindungi Anda dan rekan kerja. Kepatuhan adalah wajib. Pelanggaran akan mengakibatkan penghentian kerja seketika.': 'The Permit to Work (PTW) system is here to protect you and your coworkers. Compliance is mandatory. Violations will result in immediate work stoppage.',
    '📋 Ajukan Permit Sekarang': '📋 Apply Permit Now',
    '📘 Manual Prosedur PTW': '📘 PTW Procedure Manual',

    /* ═══ NEW ADDITIONS (ABOUT & FOOTER) ══════════════════════ */
    'Situs Beranda': 'Home Site',
    'Kesehatan Pekerja': 'Worker Health',
    'Keamanan Eksekusi': 'Execution Safety',
    'Penjagaan Ekologi Lingkungan': 'Environmental Ecology Guardian',
    'Sistem Izin Kerja PTW': 'PTW Work Permit System',
    'Tentang Organisasi': 'About Organization',
    'Formulir Lapor Observasi Temuan Bahaya': 'Hazard Finding Observation Report Form',
    'Kirim Izin PTW Tertulis': 'Submit Written PTW Permit',
    'Menu Galeri Dasbor Admin': 'Admin Dashboard Gallery Menu',
    'Kontak Departemen HSE': 'HSE Department Contact',
    '📞 Telepon Darurat:': '📞 Emergency Phone:',
    '📧 Elektronik Surat:': '📧 Electronic Mail:',
    '📍 Karang Joang, Kec. Balikpapan Utara': '📍 Karang Joang, North Balikpapan Dist.',
    '© 2026 Departemen Rekayasa Mutu HSE FMC-37. Dikelola Mutlak Seluruh Hak Cipta Perusahaan Pribadi.': '© 2026 HSE Quality Engineering Department FMC-37. All Private Corporate Copyrights Strictly Managed.',
    'Nota Kesepakatan Perlindungan Data Perusahaan': 'Corporate Data Protection Agreement Note',
    'Syarat dan Klausul Validasi Mutu Hukum Operasional': 'Terms and Clauses of Operational Legal Quality Validation',
    'HSE FMC-37 adalah tim yang berdedikasi dalam memastikan keselamatan, kesehatan, dan perlindungan lingkungan di seluruh area operasi PT. Industri Prima. Kami bekerja tanpa henti untuk membangun budaya zero-harm yang tertanam dalam setiap aspek pekerjaan.': 'HSE FMC-37 is a dedicated team ensuring safety, health, and environmental protection across all PT. Industri Prima operating areas. We work tirelessly to build a zero-harm culture embedded in every aspect of work.',
    'Dengan pendekatan sistematis berbasis risiko, kami mengintegrasikan standar internasional ISO 45001 dan ISO 14001 ke dalam seluruh proses operasional untuk memberikan perlindungan terbaik bagi seluruh karyawan dan lingkungan sekitar.': 'With a systematic risk-based approach, we integrate ISO 45001 and ISO 14001 international standards into all operational processes to provide the best protection for all employees and the surrounding environment.',
    '🎯 Tanpa Insiden Kerja (Zero Harm)': '🎯 Zero Work Incidents (Zero Harm)',
    '⚖️ Standar ISO 45001': '⚖️ ISO 45001 Standard',
    '🌿 Standar ISO 14001': '🌿 ISO 14001 Standard',
    '🤝 Kerja Tim Sehat': '🤝 Healthy Teamwork',
    '📋 Kepatuhan Prosedural': '📋 Procedural Compliance',
    '💡 Peningkatan Berkelanjutan Mutu': '💡 Continuous Quality Improvement',
    'Menjadi tim departemen panutan bidang HSE terlatih secara matang demi mendukung eksekusi industri standar global serta menyelenggarakan jaminan riwayat nol insiden kecelakaan murni (Zero Accident).': 'To become a fully trained role-model HSE department team to support the execution of global standard industries and implement the pure zero accident history guarantee (Zero Accident).',
    'Mengintegrasikan program manajemen kontrol HSE dalam balutan strategi proaktif di semua alur operasional internal tanpa menolerir kelemahan proteksi karyawan manapun selama bertugas.': 'Integrating the HSE control management program within a proactive strategy wrapper across all internal operational workflows without tolerating any employee protection weakness during duty.',
    'Tanggung jawab murni dilandasi nilai loyalitas moral untuk menjaga serta mensosialisasikan pentingnya kesejahteraan tubuh sehingga menjadi prinsip keseharian semua pihak.': 'Pure responsibility based on moral loyalty values to protect and socialize the importance of physical well-being, turning it into everyone\'s daily principle.',
    'Rela melaporkan penemuan ganjal tak wajar pada atasan sebelum berinisiatif, membawakan dedikasi murni ke ruang pekerjaan guna menyuarakannya bersama kawan sejawat rekanan.': 'Willing to report any unnatural, odd findings to superiors before taking initiative, bringing pure dedication to the workspace to voice it together with peer colleagues.',
    'Hubungi Tim HSE FMC-37': 'Contact HSE FMC-37 Team',
    'Ada pertanyaan tentang keselamatan kerja, permit, atau laporan observasi? Tim kami siap membantu Anda.': 'Have questions about occupational safety, permits, or observation reports? Our team is ready to help you.',
    '📋 Submit Observasi': '📋 Submit Observation',
    '📲 Request Permit': '📲 Request Permit',
    'Tim HSE FMC-37 berkomitmen untuk zero harm di seluruh area operasi.': 'The HSE FMC-37 team is committed to zero harm across all operating areas.',
    'Halaman Utama': 'Main Pages',
    'Akses Singkat Terpadu': 'Integrated Quick Access',
    '🏅 Management': '🏅 Management',
    '⚙️ Superintendent': '⚙️ Superintendent',
    '🦺 Permit To Work': '🦺 Permit To Work',
    '🌿 Tata Ekologi Luar': '🌿 Outer Ecology Layout',
    '🔧 Pemeliharaan Lini': '🔧 Line Maintenance',
    'Pemeliharaan Terpadu': 'Integrated Maintenance',
    'Operasional': 'Operational',
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
