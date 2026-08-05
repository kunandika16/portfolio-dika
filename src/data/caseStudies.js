// Data case study untuk halaman /article/:id
// Struktur: kunci = id project (sesuai WorkPage.jsx)

const caseStudies = {
  1: {
    title: "ITMS — Integrated Talent Management System",
    subtitle: "Platform talent management terintegrasi yang menyatukan Talent Management, Talent Development, Career Management, One Sheet Kompetensi, dan Dashboard analitik — satu sumber kebenaran untuk siklus talenta karyawan.",
    heroImage: "/images/projects/itms/itms.webp",
    company: "Internal",
    role: "Lead Frontend",
    scope: "Frontend Architecture, Design System, Module Development, Dashboard Analytics, CI/CD",
    period: "2024",
    overview:
      "ITMS (Integrated Talent Management System) dibangun untuk menggantikan pengelolaan talenta karyawan yang selama ini tersebar di spreadsheet, dokumen terpisah, dan aplikasi yang tidak terhubung. Sebagai Lead Frontend, saya bertanggung jawab atas arsitektur frontend, konsistensi desain, dan pengembangan modul-modul inti — dari manajemen talenta, pengembangan kompetensi, hingga perencanaan karier — yang semuanya terhubung ke dashboard analitik terpadu. Sistem ini menjadi satu sumber kebenaran bagi HR dan manajemen dalam memetakan kinerja, potensi, dan kesiapan karier setiap karyawan.",
    challenges: [
      {
        title: "Data Talent yang Terfragmentasi",
        text: "Profil, kompetensi, dan riwayat pengembangan karyawan tersimpan terpisah-pisah sehingga sulit dipetakan dan sering tidak sinkron antar departemen.",
      },
      {
        title: "Proses Talent Management Manual",
        text: "Identifikasi talenta, review kinerja, dan perencanaan suksesi masih dilakukan manual, memakan waktu lama dan rawan inkonsistensi.",
      },
      {
        title: "Kesulitan Membaca Potensi Karyawan",
        text: "Manajemen tidak memiliki pandangan terpadu atas kompetensi dan kesiapan karier karyawan, sehingga keputusan promosi dan pengembangan sering tidak berbasis data.",
      },
    ],
    solution:
      "Sebagai Lead Frontend, saya merancang arsitektur frontend berbasis React.js dan Material UI dengan design system yang konsisten, lalu membangun lima modul utama: Talent Management System untuk pengelolaan data talenta, Talent Development System untuk program pengembangan, Career Management System untuk perencanaan karier, One Sheet Kompetensi Pegawai sebagai ringkasan kompetensi terpadu, dan Dashboard yang memvisualisasikan seluruh metrik talenta secara real-time. Sistem terhubung ke backend Express dengan PostgreSQL, memanfaatkan Redis untuk caching, serta di-deploy melalui pipeline Jenkins ke Kubernetes (OSS integration).",
    features: [
      { title: "Talent Management System", text: "Pengelolaan data talenta, profil, dan mapping potensi karyawan dalam satu platform terpusat." },
      { title: "Talent Development System", text: "Program pengembangan kompetensi, pelatihan, dan tracking progres karyawan secara terstruktur." },
      { title: "Career Management System", text: "Perencanaan karier, jenjang jabatan, dan kesiapan suksesi untuk posisi kunci." },
      { title: "One Sheet Kompetensi Pegawai", text: "Ringkasan kompetensi satu halaman per karyawan yang memudahkan review cepat oleh HR dan manajemen." },
      { title: "Dashboard Analitik", text: "Visualisasi metrik talenta, tren kinerja, dan potensi karyawan secara real-time." },
    ],
    stack: ["ReactJS", "MaterialUI", "Redis", "Express", "PostgreSQL", "Kubernetes", "Jenkins"],
    screenshots: ["/images/projects/itms/ITMS-dashboard.webp"],
    gallery: [
      "/images/projects/itms/ITMS-dashboard.webp",
      "/images/projects/itms/itms-development.webp",
      "/images/projects/itms/itms-login.webp",
      "/images/projects/itms/itms-onesheet.webp",
    ],
    result:
      "ITMS menjadi platform talent management terpusat yang mempercepat akses data karyawan dan memberikan visibilitas penuh kepada manajemen terhadap performa serta potensi tim. Dengan arsitektur frontend yang modular dan pipeline CI/CD yang otomatis, tim dapat terus mengembangkan fitur secara cepat tanpa mengorbankan stabilitas, dan proses review kinerja serta perencanaan suksesi kini berjalan lebih sistematis dan terdokumentasi rapi.",
    link: null,
  },

  2: {
    title: "Explora — Knowledge Management & Event Management",
    subtitle: "Platform manajemen pengetahuan dan sistem acara yang memfasilitasi pertukaran knowledge antar karyawan serta pengelolaan event perusahaan dalam satu tempat.",
    heroImage: "/images/projects/explora/header.webp",
    company: "PT Pos Indonesia",
    role: "Frontend Developer",
    scope: "UI Design, Frontend Development",
    period: "2023",
    overview:
      "Explora dibangun untuk menjadi pusat knowledge sharing dan pengelolaan event di perusahaan. Tujuannya, membangun budaya belajar dengan menyediakan ruang bagi karyawan untuk berbagi artikel, materi pelatihan, dan best practice, sekaligus mempermudah penyelenggaraan event internal mulai dari publikasi, pendaftaran, hingga dokumentasi.",
    challenges: [
      {
        title: "Knowledge yang Tidak Terdokumentasi",
        text: "Pengalaman dan pengetahuan antar tim banyak tersimpan hanya di kepala orang atau chat, sehingga sulit diakses karyawan lain saat dibutuhkan.",
      },
      {
        title: "Pengelolaan Event Manual",
        text: "Informasi event, pendaftaran peserta, dan dokumentasi tersebar di media sosial dan email sehingga kurang terpusat dan rawan informasi tertinggal.",
      },
      {
        title: "Sulit Menemukan Konten",
        text: "Tidak ada mekanisme pencarian dan kategorisasi yang baik untuk menemukan materi atau informasi event yang relevan.",
      },
    ],
    solution:
      "Explora dirancang dengan dua modul utama: Knowledge Management yang memungkinkan karyawan mempublikasikan dan mencari artikel, serta Event Management System yang mengelola siklus penuh acara perusahaan. Desainnya mengedepankan kemudahan pencarian dan pengalaman membaca yang nyaman agar konten benar-benar dimanfaatkan.",
    features: [
      { title: "Knowledge Base & Artikel", text: "Publikasi artikel, materi pelatihan, dan best practice dengan kategori dan pencarian." },
      { title: "Manajemen Event", text: "Publikasi acara, pendaftaran peserta, dan notifikasi dalam satu alur." },
      { title: "Pencarian Pintar", text: "Fitur pencarian dan filter yang memudahkan menemukan knowledge dan event." },
      { title: "Kolaborasi Tim", text: "Ruang berbagi dan diskusi antar departemen untuk memperkuat budaya belajar." },
    ],
    stack: ["ReactJS", "MaterialUI", "Express", "PostgreSQL"],
    screenshots: [
      "/images/projects/explora/layar.webp",
      "/images/projects/explora/article.webp",
      "/images/projects/explora/event.webp",
    ],
    gallery: [
      "/images/projects/explora/article.webp",
      "/images/projects/explora/event.webp",
    ],
    result:
      "Explora berhasil menjadi pusat dokumentasi pengetahuan perusahaan dan platform pengelolaan event yang andal. Karyawan kini dapat mengakses materi dan mengikuti event internal dengan lebih mudah, mendorong budaya berbagi pengetahuan yang lebih aktif.",
    link: null,
  },

  3: {
    title: "Orlens — Organization & Job Management",
    subtitle: "Platform untuk memetakan struktur organisasi, jabatan, dan deskripsi pekerjaan secara digital agar lebih transparan dan mudah dikelola.",
    heroImage: "/images/projects/orlens.webp",
    company: "Internal",
    role: "Fullstack Developer",
    scope: "UI Design, Fullstack Development, Data Modeling",
    period: "2023",
    overview:
      "Orlens hadir untuk menjawab tantangan perusahaan dalam mengelola struktur organisasi yang dinamis. Melalui platform ini, perusahaan dapat memetakan hierarki, mendefinisikan jabatan beserta tanggung jawabnya, dan memastikan setiap posisi terisi oleh orang yang tepat — semuanya dalam satu sistem yang jelas dan mudah diperbarui.",
    challenges: [
      {
        title: "Struktur Organisasi Tidak Tersentralisasi",
        text: "Peta organisasi sering digambar ulang manual di setiap perubahan, sehingga banyak versi dan sulit menjadi rujukan bersama.",
      },
      {
        title: "Definisi Jabatan Kabur",
        text: "Deskripsi pekerjaan dan tanggung jawab tiap posisi tidak terdokumentasi konsisten, menyulitkan rekrutmen dan penilaian.",
      },
      {
        title: "Kesulitan Memetakan Kebutuhan",
        text: "Manajemen kesulitan melihat struktur yang ada, posisi kosong, dan kebutuhan sumber daya manusia secara cepat.",
      },
    ],
    solution:
      "Orlens menyediakan visualisasi struktur organisasi berbasis web yang interaktif, lengkap dengan pengelolaan data jabatan dan pekerjaan. Struktur dapat diperbarui secara real-time dan menjadi satu sumber kebenaran bagi seluruh departemen.",
    features: [
      { title: "Peta Organisasi Interaktif", text: "Visualisasi hierarki organisasi yang dinamis dan mudah dinavigasi." },
      { title: "Manajemen Jabatan", text: "Definisi jabatan, tanggung jawab, dan syarat posisi dalam satu database terpusat." },
      { title: "Job Description Terstruktur", text: "Deskripsi pekerjaan yang konsisten dan mudah diakses untuk kebutuhan HR." },
      { title: "Pemetaan Kebutuhan SDM", text: "Identifikasi posisi kosong dan kebutuhan sumber daya dengan cepat." },
    ],
    stack: ["Vue", "Laravel", "MySQL"],
    screenshots: ["/images/projects/orlens.webp"],
    result:
      "Orlens memberikan perusahaan satu sumber kebenaran untuk struktur organisasi dan definisi jabatan. Proses perencanaan SDM, rekrutmen, dan evaluasi menjadi lebih cepat karena data organisasi kini transparan, konsisten, dan mudah diakses.",
    link: null,
  },

  4: {
    title: "ARMS — Attrition Retention Management System",
    subtitle: "Sistem analitik untuk memantau tren attrition dan mengelola strategi retensi karyawan agar perusahaan mampu mempertahankan talenta terbaiknya.",
    heroImage: "/images/projects/arms.webp",
    company: "Internal",
    role: "Frontend Developer",
    scope: "Dashboard Design, Data Visualization, Frontend Development",
    period: "2024",
    overview:
      "ARMS (Attrition Retention Management System) dibangun untuk membantu perusahaan memahami penyebab keluarnya karyawan (attrition) dan merancang strategi retensi yang berbasis data. Dengan memusatkan data kepegawaian dan analitik churn, manajemen dapat mengidentifikasi pola risiko lebih dini dan mengambil tindakan preventif.",
    challenges: [
      {
        title: "Tingkat Attrition yang Sulit Diprediksi",
        text: "Perusahaan baru menyadari karyawan keluar setelah terjadi, tanpa indikator awal untuk mengantisipasi risiko.",
      },
      {
        title: "Data Retensi Tidak Terintegrasi",
        text: "Data kepegawaian, survei, dan historis keluar-masuk karyawan tersebar sehingga analisis sulit dilakukan.",
      },
      {
        title: "Strategi Retensi Kurang Terukur",
        text: "Program retensi tidak memiliki tolok ukur yang jelas karena tidak didasarkan pada analisis data yang kuat.",
      },
    ],
    solution:
      "ARMS mengintegrasikan data kepegawaian ke dalam dashboard analitik yang memvisualisasikan tren attrition, profil karyawan berisiko, dan efektivitas program retensi. Data disajikan dalam bentuk grafik yang intuitif sehingga keputusan dapat diambil cepat dan berbasis fakta.",
    features: [
      { title: "Analitik Attrition", text: "Visualisasi tren keluar-masuk karyawan per periode, departemen, dan jenjang." },
      { title: "Identifikasi Risiko", text: "Pemetaan karyawan berisiko tinggi untuk intervensi lebih dini." },
      { title: "Pelacakan Program Retensi", text: "Monitoring efektivitas program retensi dan keterlibatan karyawan." },
      { title: "Laporan Manajemen", text: "Ringkasan eksekutif untuk mendukung keputusan strategis HR." },
    ],
    stack: ["React", "Python", "PostgreSQL"],
    screenshots: ["/images/projects/arms.webp"],
    result:
      "ARMS memberikan kemampuan prediksi dan pemantauan attrition secara real-time. Manajemen kini dapat mengidentifikasi risiko keluarnya karyawan lebih dini dan mengevaluasi program retensi dengan data yang jelas, sehingga keputusan HR lebih tepat sasaran.",
    link: null,
  },

  5: {
    title: "SIMAsuransi — Sistem Informasi Management Asuransi",
    subtitle: "Sistem informasi untuk mengelola polis, klaim, dan data nasabah asuransi secara digital agar proses bisnis lebih cepat, akurat, dan terdokumentasi.",
    heroImage: "/images/projects/simasuransi.webp",
    company: "Client",
    role: "Frontend Developer",
    scope: "UI Design, Frontend Development, Dashboard",
    period: "2023",
    overview:
      "SIMAsuransi merupakan sistem informasi manajemen asuransi yang dibangun untuk klien yang membutuhkan digitalisasi proses pengelolaan polis dan klaim. Sistem ini membantu staf memproses data nasabah, polis, dan pengajuan klaim dalam satu platform, mengurangi ketergantungan pada pencatatan manual yang lambat dan rawan kesalahan.",
    challenges: [
      {
        title: "Proses Klaim yang Lambat",
        text: "Pengajuan dan persetujuan klaim masih manual, memakan waktu lama dan menyulitkan pelacakan status bagi nasabah maupun staf.",
      },
      {
        title: "Data Nasabah Tidak Terpusat",
        text: "Data nasabah dan polis tersebar di beberapa sistem sehingga sulit diakses dan sering terjadi duplikasi.",
      },
      {
        title: "Laporan Kurang Akurat",
        text: "Rekap polis dan klaim dilakukan manual sehingga rawan keterlambatan dan ketidakakuratan data laporan.",
      },
    ],
    solution:
      "SIMAsuransi menghadirkan dashboard pengelolaan yang menyatukan data nasabah, polis, dan klaim. Alur pemrosesan klaim dirancang lebih transparan dengan status yang dapat dilacak, dan laporan dapat dihasilkan otomatis sesuai kebutuhan manajemen.",
    features: [
      { title: "Manajemen Polis", text: "Pencatatan, perpanjangan, dan monitoring polis nasabah dalam satu sistem." },
      { title: "Alur Klaim Digital", text: "Pengajuan klaim dengan status yang dapat dilacak dari masuk hingga diproses." },
      { title: "Database Nasabah Terpusat", text: "Data nasabah yang terintegrasi dan mudah dicari, mengurangi duplikasi." },
      { title: "Laporan Otomatis", text: "Rekap polis, klaim, dan premi yang dapat dihasilkan otomatis dan akurat." },
    ],
    stack: ["Angular", "Spring Boot", "Oracle"],
    screenshots: ["/images/projects/simasuransi.webp"],
    result:
      "SIMAsuransi mempercepat proses pengelolaan polis dan klaim secara signifikan. Status klaim kini transparan dan dapat dilacak, laporan lebih akurat, dan data nasabah terpusat sehingga layanan kepada nasabah menjadi lebih responsif.",
    link: null,
  },

  6: {
    title: "TemuHobi.com — Platform Komunitas Hobi",
    subtitle: "Platform yang mempertemukan pegiat hobi dengan komunitas dan kegiatan sesuai minat, meraih penghargaan dari Kemenparekraf.",
    heroImage: "/images/projects/temuhobi/temuhobi-cover.webp",
    company: "Startup",
    role: "Frontend Developer",
    scope: "Frontend Development, Product Design",
    period: "2024",
    overview:
      "TemuHobi.com lahir dari gagasan bahwa banyak orang kesulitan menemukan komunitas yang sesuai dengan hobinya. Aplikasi ini menyediakan direktori komunitas berbasis minat, tempat anggota berinteraksi, serta informasi kegiatan yang bisa diikuti — membantu pengguna menemukan teman senasib dan tempat berkembang. Sebagai Frontend Developer di tim startup, saya membangun antarmuka dengan React TypeScript dan Ant Design, terhubung ke backend Express dengan PostgreSQL, serta di-deploy di Cloudflare. Project ini diakui melalui penghargaan dari Kemenparekraf.",
    challenges: [
      {
        title: "Komunitas Sulit Ditemukan",
        text: "Pecinta hobi harus mencari komunitas lewat forum atau media sosial yang tidak terstruktur dan sulit ditemukan.",
      },
      {
        title: "Interaksi Kurang Terarah",
        text: "Diskusi antar anggota komunitas tersebar di banyak platform sehingga percakapan mudah hilang dan tidak terorganisir.",
      },
      {
        title: "Informasi Kegiatan Tidak Terpusat",
        text: "Jadwal kegiatan komunitas tidak tersedia di satu tempat, membuat anggota sering ketinggalan informasi.",
      },
    ],
    solution:
      "TemuHobi.com dibangun sebagai aplikasi yang mempertemukan minat dengan komunitas. Sebagai frontend developer, saya bertanggung jawab mengembangkan UI yang responsif dengan React TypeScript dan Ant Design, memastikan konsistensi desain, dan mengintegrasikan seluruh antarmuka dengan API backend Express yang menggunakan PostgreSQL. Aplikasi di-deploy pada infrastruktur Cloudflare untuk performa yang cepat dan andal. Pengguna dapat menjelajahi komunitas berdasarkan kategori hobi, bergabung, berinteraksi dalam ruang diskusi, dan mendapatkan informasi kegiatan yang terpusat dan mudah diakses.",
    features: [
      { title: "Direktori Komunitas", text: "Jelajahi komunitas berdasarkan kategori minat dan hobi." },
      { title: "Profil Pengguna", text: "Profil yang menampilkan minat dan komunitas yang diikuti pengguna." },
      { title: "Ruang Diskusi", text: "Forum interaksi antar anggota komunitas yang terorganisir." },
      { title: "Kalender Kegiatan", text: "Informasi kegiatan dan acara komunitas dalam satu tempat." },
    ],
    stack: ["ReactTS", "AntDesign", "Express", "PostgreSQL", "Cloudflare"],
    screenshots: ["/images/projects/temuhobi/temuhobi-isi.webp"],
    gallery: [
      "/images/projects/temuhobi/temuhobi1.webp",
      "/images/projects/temuhobi/temuhobi2.webp",
      "/images/projects/temuhobi/temuhobi3.webp",
      "/images/projects/temuhobi/temuhobi4.webp",
    ],
    result:
      "TemuHobi.com menyediakan jalur yang mudah bagi pengguna untuk menemukan dan bergabung dengan komunitas yang sesuai. Interaksi anggota menjadi lebih terorganisir dan informasi kegiatan lebih mudah diakses, memperkuat ekosistem hobi di Indonesia. Project ini mendapat pengakuan melalui penghargaan dari Kemenparekraf.",
    link: null,
  },

  7: {
    title: "Uangku — Pencatatan Keuangan via WhatsApp",
    subtitle: "Aplikasi pencatatan keuangan inovatif yang terintegrasi penuh dengan WhatsApp untuk kemudahan input transaksi harian tanpa perlu membuka aplikasi terpisah.",
    heroImage: "/images/projects/uangku.webp",
    company: "Startup",
    role: "Backend Developer",
    scope: "System Design, Backend Development, WhatsApp API Integration",
    period: "2024",
    overview:
      "Uangku mengubah cara orang mencatat keuangan pribadi dengan memanfaatkan WhatsApp sebagai antarmuka utama. Pengguna cukup mengirim pesan transaksi ke bot Uangku dan sistem secara otomatis mencatat, mengkategorikan, dan merangkum keuangan mereka. Pendekatan ini menurunkan hambatan kebiasaan mencatat yang biasanya menjadi penghalang utama pengelolaan keuangan.",
    challenges: [
      {
        title: "Kebiasaan Mencatat yang Rendah",
        text: "Mayoritas orang jarang mencatat keuangan karena ribet membuka aplikasi setiap kali ada transaksi.",
      },
      {
        title: "Kategori & Rangkuman Manual",
        text: "Pengguna kesulitan mengkategorikan pengeluaran dan melihat ringkasan bulanan secara otomatis.",
      },
      {
        title: "Aksesibilitas Terbatas",
        text: "Aplikasi keuangan konvensional kurang nyaman digunakan oleh pengguna yang sehari-harinya bergantung pada WhatsApp.",
      },
    ],
    solution:
      "Uangku dibangun dengan backend yang terhubung ke WhatsApp API untuk memproses pesan transaksi secara otomatis. Sistem mengenali format pesan, mengkategorikan transaksi, menyimpan data di database, dan membalas ringkasan serta laporan keuangan berdasarkan permintaan pengguna.",
    features: [
      { title: "Input via Chat", text: "Catat pemasukan dan pengeluaran cukup dengan mengirim pesan ke WhatsApp." },
      { title: "Kategorisasi Otomatis", text: "Transaksi dikelompokkan ke kategori otomatis untuk memudahkan analisis." },
      { title: "Laporan Bulanan", text: "Ringkasan pengeluaran dan pemasukan dikirim otomatis sesuai periode." },
      { title: "Multi-User Support", text: "Mendukung banyak pengguna dengan data yang terpisah dan aman." },
    ],
    stack: ["Node.js", "WhatsApp API", "MongoDB"],
    screenshots: ["/images/projects/uangku.webp"],
    result:
      "Uangku berhasil menurunkan hambatan mencatat keuangan dengan menghadirkan pencatatan di dalam aplikasi yang paling sering dibuka pengguna. Kategori otomatis dan laporan berkala membantu pengguna memahami pola pengeluaran tanpa usaha tambahan.",
    link: null,
  },

  8: {
    title: "AnselEnamel Calculator Tank",
    subtitle: "Aplikasi rekomendasi perhitungan kebutuhan tank berdasarkan volume dan luas lahan, dirancang dengan antarmuka yang sederhana dan user-friendly.",
    heroImage: "/images/projects/ansal/ansal-cover.webp",
    company: "Ansal Enamel Indonesia",
    role: "Fullstack Developer",
    scope: "Fullstack Development, UI Design, Calculator Logic",
    period: "2024",
    overview:
      "AnselEnamel Calculator Tank adalah aplikasi web yang membantu pengguna menghitung kebutuhan tank (tangki) berdasarkan parameter seperti volume dan luas lahan. Dikembangkan untuk klien Ansal Enamel Indonesia, aplikasi ini menyederhanakan proses perhitungan teknis yang sebelumnya rumit menjadi interaktif dan mudah dipahami, lengkap dengan rekomendasi hasil yang informatif. Sebagai fullstack developer, saya membangun aplikasi dengan Next.js, memanfaatkan Google Apps Script untuk logika kalkulasi, komponen UI dari Shadcn, dan men-deploy-nya di Vercel.",
    challenges: [
      {
        title: "Perhitungan Teknis yang Rumit",
        text: "Menghitung kebutuhan tank membutuhkan rumus teknis dan pengetahuan khusus yang tidak dimiliki calon pelanggan umum.",
      },
      {
        title: "Komunikasi Produk Kurang Efektif",
        text: "Klien kesulitan menjelaskan spesifikasi kebutuhan tank kepada calon pembeli secara visual dan interaktif.",
      },
      {
        title: "Desain Kurang Menarik",
        text: "Website industri umumnya terkesan kaku dan kurang menarik bagi pengunjung modern.",
      },
    ],
    solution:
      "AnselEnamel Calculator Tank dikembangkan sebagai aplikasi web interaktif dengan input parameter yang intuitif dan hasil perhitungan langsung. Sebagai fullstack developer, saya merancang arsitektur frontend dengan Next.js dan komponen Shadcn, menghubungkan logika kalkulasi melalui Google Apps Script, serta men-deploy aplikasi di Vercel untuk akses yang cepat dan andal. Tampilan dirancang bersih dan modern agar mudah digunakan sekaligus mencerminkan kualitas produk klien.",
    features: [
      { title: "Input Parameter Fleksibel", text: "Masukkan volume, luas lahan, dan parameter lain dengan mudah." },
      { title: "Hasil Perhitungan Instan", text: "Rekomendasi kebutuhan tank dihitung dan ditampilkan secara real-time." },
      { title: "Antarmuka Modern", text: "Desain bersih dan responsif yang nyaman di perangkat apa pun." },
      { title: "Hasil Siap Dibagikan", text: "Hasil perhitungan mudah dibagikan ke tim penjualan atau pelanggan." },
    ],
    stack: ["NextJs", "AppScript", "Vercel", "Shadcn"],
    screenshots: ["/images/projects/ansal/ansal-isi.webp"],
    gallery: [
      "/images/projects/ansal/ansal (1).png",
      "/images/projects/ansal/ansal (2).png",
      "/images/projects/ansal/ansal (3).png",
      "/images/projects/ansal/ansal (4).png",
    ],
    result:
      "Aplikasi ini membantu klien menyampaikan rekomendasi produk secara lebih jelas dan profesional. Calon pembeli kini dapat menghitung sendiri kebutuhan tank-nya secara mandiri, meningkatkan kepercayaan dan mempercepat proses penjualan.",
    link: null,
  },

  9: {
    title: "CGN Logistik — Sistem Informasi Management Logistik",
    subtitle: "Sistem informasi manajemen logistik lengkap dengan landing page perusahaan, mendukung operasional pengiriman dan memperkuat citra brand.",
    heroImage: "/images/projects/cgn-logistik/cgn-cover.webp",
    company: "CGN Logistik",
    role: "Fullstack Developer",
    scope: "Fullstack Development, Product Design, Landing Page",
    period: "2024",
    overview:
      "CGN Logistik mencakup dua hal: sistem informasi manajemen logistik untuk mengelola operasional pengiriman, dan landing page perusahaan yang profesional. Sebagai pemilik CGN Logistik dan fullstack developer, saya membangun sistem dengan Laravel dan MySQL, dengan antarmuka yang responsif menggunakan TailwindCSS. Sistem membantu internal mengelola data pengiriman, armada, dan pelanggan, sementara landing page menjadi wajah digital yang memperkuat kepercayaan pelanggan terhadap layanan CGN.",
    challenges: [
      {
        title: "Operasional Belum Terdigitalisasi",
        text: "Data pengiriman dan armada dikelola manual sehingga menyulitkan pemantauan status dan perencanaan rute.",
      },
      {
        title: "Kurangnya Citra Digital",
        text: "Perusahaan belum memiliki landing page yang profesional untuk meyakinkan calon pelanggan korporat.",
      },
      {
        title: "Pelacakan Pengiriman Sulit",
        text: "Pelanggan dan internal kesulitan melacak status pengiriman secara real-time.",
      },
    ],
    solution:
      "CGN Logistik dibangun sebagai dua lapisan solusi: dashboard internal untuk manajemen pengiriman dan armada, serta landing page publik yang modern. Sebagai fullstack developer, saya mengembangkan backend dengan Laravel dan database MySQL, serta membangun antarmuka yang bersih dan responsif dengan TailwindCSS. Sistem dirancang modular agar data operasional dan citra brand dapat berkembang bersama pertumbuhan bisnis.",
    features: [
      { title: "Manajemen Pengiriman", text: "Kelola data pengiriman, status, dan dokumentasi dalam satu sistem." },
      { title: "Dashboard Operasional", text: "Pemantauan armada dan aktivitas pengiriman secara terpusat." },
      { title: "Landing Page Profesional", text: "Tampilan digital yang memperkenalkan layanan dan membangun kepercayaan." },
      { title: "Manajemen Pelanggan", text: "Data pelanggan dan riwayat pengiriman yang mudah diakses." },
    ],
    stack: ["Laravel", "MySQL", "TailwindCSS"],
    screenshots: ["/images/projects/cgn-logistik/cgn-isi.webp"],
    gallery: [
      "/images/projects/cgn-logistik/cgn-logistiktemuhobi-copy-2.webp",
      "/images/projects/cgn-logistik/cgn-logistiktemuhobi-copy-3.webp",
      "/images/projects/cgn-logistik/cgn-logistiktemuhobi-copy.webp",
      "/images/projects/cgn-logistik/cgn-logistiktemuhobi.webp",
    ],
    result:
      "CGN mendapatkan sistem manajemen logistik yang terpusat dan landing page yang profesional. Operasional pengiriman lebih mudah dipantau, dan citra digital perusahaan meningkat, mendukung akuisisi pelanggan korporat baru.",
    link: null,
  },

  10: {
    title: "IdeTravel.com — Landing Page Travel Umroh",
    subtitle: "Landing page travel umroh yang elegan dan informatif, dirancang untuk membangun kepercayaan calon jemaah dan mendorong konversi pendaftaran.",
    heroImage: "/images/projects/idetravel.webp",
    company: "Client",
    role: "Frontend Developer",
    scope: "UI/UX Design, Frontend Development, Motion Design",
    period: "2024",
    overview:
      "IdeTravel.com adalah landing page untuk biro perjalanan umroh yang ingin tampil profesional dan meyakinkan di era digital. Halaman ini menyajikan informasi paket, itinerary, testimoni, dan proses pendaftaran dengan desain yang elegan serta animasi yang halus, sehingga calon jemaah merasa nyaman dan percaya untuk memilih layanan ini.",
    challenges: [
      {
        title: "Kepercayaan Calon Jemaah",
        text: "Bisnis perjalanan umroh sangat bergantung pada kepercayaan; tampilan yang tidak profesional membuat calon jemaah ragu.",
      },
      {
        title: "Informasi Paket Kurang Jelas",
        text: "Detail paket, fasilitas, dan jadwal harus mudah dipahami tanpa membuat halaman terasa penuh dan membingungkan.",
      },
      {
        title: "Kesulitan Konversi",
        text: "Calon jemaah tidak menemukan alur yang jelas untuk bertanya atau mendaftar, sehingga banyak yang keluar sebelum menghubungi.",
      },
    ],
    solution:
      "Landing page IdeTravel dirancang dengan hierarki visual yang kuat: hero yang menenangkan, penyajian paket yang rapi, sosial bukti dari testimoni, dan call-to-action yang jelas di setiap bagian. Animasi framer-motion dipakai halus untuk menghadirkan kesan premium tanpa mengganggu performa.",
    features: [
      { title: "Hero & Branding Elegan", text: "Pembuka visual yang menyampaikan nilai layanan secara emosional." },
      { title: "Katalog Paket", text: "Penyajian paket umroh dengan detail fasilitas dan harga yang jelas." },
      { title: "Testimoni Jemaah", text: "Sosial bukti dari pengalaman jemaah untuk membangun kepercayaan." },
      { title: "Call-to-Action Terarah", text: "Alur pendaftaran dan kontak yang jelas di setiap bagian halaman." },
    ],
    stack: ["React", "Framer Motion", "Tailwind"],
    screenshots: ["/images/projects/idetravel.webp"],
    result:
      "IdeTravel.com memberikan kesan profesional dan menenangkan yang relevan dengan konteks ibadah umroh. Landing page ini memperkuat kepercayaan calon jemaah dan menyediakan jalur konversi yang jelas, mendukung pertumbuhan pendaftaran klien.",
    link: null,
  },

  11: {
    title: "Sistem Informasi Dinas Kelautan dan Perikanan Sulawesi Selatan",
    subtitle: "Sistem informasi dashboard untuk memantau data kelautan dan perikanan di Sulawesi Selatan, mendukung pengambilan keputusan berbasis data.",
    heroImage: "/images/projects/sistem_dinas.webp",
    company: "Government",
    role: "Fullstack Developer",
    scope: "Dashboard Design, Fullstack Development, Data Visualization",
    period: "2023",
    overview:
      "Sistem ini dikembangkan untuk Dinas Kelautan dan Perikanan Sulawesi Selatan sebagai pusat data dan dashboard pemantauan sektor kelautan dan perikanan daerah. Melalui sistem ini, dinas dapat menghimpun, mengelola, dan memvisualisasikan data produksi, wilayah, dan kegiatan sektor perikanan untuk mendukung perencanaan dan pengambilan keputusan yang lebih baik.",
    challenges: [
      {
        title: "Data Sektor Tersebar",
        text: "Data produksi dan kegiatan perikanan tersebar di berbagai unit kerja dan format, menyulitkan perbandingan dan analisis.",
      },
      {
        title: "Pelaporan Manual",
        text: "Proses pengumpulan dan pelaporan data dilakukan manual sehingga lambat dan berpotensi tidak akurat.",
      },
      {
        title: "Keterbatasan Visualisasi",
        text: "Pimpinan dinas kesulitan membaca kondisi sektor karena data tidak disajikan dalam bentuk visual yang mudah dipahami.",
      },
    ],
    solution:
      "Sistem informasi ini mengintegrasikan data dari berbagai unit kerja ke dalam satu dashboard berbasis web. Data divisualisasikan melalui grafik dan tabel interaktif sehingga kondisi sektor kelautan dan perikanan dapat dipantau secara real-time dan menjadi dasar perencanaan yang lebih tepat.",
    features: [
      { title: "Dashboard Statistik", text: "Visualisasi data produksi dan kegiatan sektor kelautan dan perikanan." },
      { title: "Manajemen Data", text: "Pengelolaan dan validasi data dari berbagai unit kerja secara terpusat." },
      { title: "Laporan Dinamis", text: "Laporan yang dapat disesuaikan dengan kebutuhan pimpinan dinas." },
      { title: "Pemantauan Wilayah", text: "Informasi kegiatan dan potensi per wilayah kerja dalam satu platform." },
    ],
    stack: ["PHP", "CodeIgniter", "MySQL"],
    screenshots: ["/images/projects/sistem_dinas.webp"],
    result:
      "Sistem ini memberikan dinas kemampuan memantau data kelautan dan perikanan secara terpusat dan real-time. Pelaporan menjadi lebih cepat dan akurat, serta pimpinan dinas dapat mengambil keputusan berbasis data yang lebih baik.",
    link: null,
  },
};

export default caseStudies;
