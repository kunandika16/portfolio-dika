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

  3: {
    title: "Orlens — Organization & Job Management",
    subtitle: "Platform untuk memetakan struktur organisasi, jabatan, dan deskripsi pekerjaan secara digital agar lebih transparan dan mudah dikelola.",
    heroImage: "/images/projects/orlen/cover.webp",
    company: "Internal",
    role: "Frontend Developer",
    scope: "UI Design, Frontend Development, Data Visualization",
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
    stack: ["ReactTS", "Go", "Postgres", "MaterialUI", "ReactFlow"],
    screenshots: ["/images/projects/orlen/Orlen-isi.webp"],
    result:
      "Orlens memberikan perusahaan satu sumber kebenaran untuk struktur organisasi dan definisi jabatan. Proses perencanaan SDM, rekrutmen, dan evaluasi menjadi lebih cepat karena data organisasi kini transparan, konsisten, dan mudah diakses.",
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
    heroImage: "/images/projects/uangku/uangku-mobile.webp",
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
      "Uangku dibangun dengan backend yang terhubung ke WhatsApp Business API resmi dari Meta untuk memproses pesan transaksi secara otomatis. Sistem mengenali format pesan, mengkategorikan transaksi, menyimpan data di database, dan membalas ringkasan serta laporan keuangan berdasarkan permintaan pengguna.",
    features: [
      { title: "Input via Chat", text: "Catat pemasukan dan pengeluaran cukup dengan mengirim pesan ke WhatsApp." },
      { title: "Kategorisasi Otomatis", text: "Transaksi dikelompokkan ke kategori otomatis untuk memudahkan analisis." },
      { title: "Laporan Bulanan", text: "Ringkasan pengeluaran dan pemasukan dikirim otomatis sesuai periode." },
      { title: "Multi-User Support", text: "Mendukung banyak pengguna dengan data yang terpisah dan aman." },
    ],
    stack: ["Meta WA Business Official"],
    screenshots: ["/images/projects/uangku/uangku.webp"],
    result:
      "Uangku berhasil menurunkan hambatan mencatat keuangan dengan menghadirkan pencatatan di dalam aplikasi yang paling sering dibuka pengguna. Kategori otomatis dan laporan berkala membantu pengguna memahami pola pengeluaran tanpa usaha tambahan.",
    link: null,
  },

  8: {
    title: "Ansel Enamel Calculator Tank",
    subtitle: "Aplikasi rekomendasi perhitungan kebutuhan tank berdasarkan volume dan luas lahan, dirancang dengan antarmuka yang sederhana dan user-friendly.",
    heroImage: "/images/projects/ansal/gfst.webp",
    company: "Ansal Enamel Indonesia",
    role: "Fullstack Developer",
    scope: "Fullstack Development, UI Design, Calculator Logic",
    period: "2024",
    overview:
      "Ansel Enamel Calculator Tank adalah aplikasi web yang membantu pengguna menghitung kebutuhan tank (tangki) berdasarkan parameter seperti volume dan luas lahan. Dikembangkan untuk klien Ansal Enamel Indonesia, aplikasi ini menyederhanakan proses perhitungan teknis yang sebelumnya rumit menjadi interaktif dan mudah dipahami, lengkap dengan rekomendasi hasil yang informatif. Sebagai fullstack developer, saya membangun aplikasi dengan Next.js, memanfaatkan Google Apps Script untuk logika kalkulasi, komponen UI dari Shadcn, dan men-deploy-nya di Vercel.",
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
      "Ansel Enamel Calculator Tank dikembangkan sebagai aplikasi web interaktif dengan input parameter yang intuitif dan hasil perhitungan langsung. Sebagai fullstack developer, saya merancang arsitektur frontend dengan Next.js dan komponen Shadcn, menghubungkan logika kalkulasi melalui Google Apps Script, serta men-deploy aplikasi di Vercel untuk akses yang cepat dan andal. Tampilan dirancang bersih dan modern agar mudah digunakan sekaligus mencerminkan kualitas produk klien.",
    features: [
      { title: "Input Parameter Fleksibel", text: "Masukkan volume, luas lahan, dan parameter lain dengan mudah." },
      { title: "Hasil Perhitungan Instan", text: "Rekomendasi kebutuhan tank dihitung dan ditampilkan secara real-time." },
      { title: "Antarmuka Modern", text: "Desain bersih dan responsif yang nyaman di perangkat apa pun." },
      { title: "Hasil Siap Dibagikan", text: "Hasil perhitungan mudah dibagikan ke tim penjualan atau pelanggan." },
    ],
    stack: ["NextJs", "AppScript", "Vercel", "Shadcn"],
    screenshots: ["/images/projects/ansal/ansal-isi.webp"],
    gallery: [
      "/images/projects/ansal/ansal (1).webp",
      "/images/projects/ansal/ansal (2).webp",
      "/images/projects/ansal/ansal (3).webp",
      "/images/projects/ansal/ansal (4).webp",
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
    title: "Ide Tour Travel — Landing Page Travel Umroh",
    subtitle: "Landing page travel umroh yang elegan dan informatif, dirancang untuk membangun kepercayaan calon jemaah dan mendorong konversi pendaftaran.",
    heroImage: "/images/projects/idetour/travel.webp",
    company: "Ide Tour Travel",
    role: "Frontend Developer",
    scope: "UI/UX Design, Frontend Development, Motion Design",
    period: "2024",
    overview:
      "Ide Tour Travel adalah landing page untuk biro perjalanan umroh yang ingin tampil profesional dan meyakinkan di era digital. Halaman ini menyajikan informasi paket, itinerary, testimoni, dan proses pendaftaran dengan desain yang elegan serta animasi yang halus, sehingga calon jemaah merasa nyaman dan percaya untuk memilih layanan ini.",
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
      "Landing page Ide Tour Travel dirancang dengan hierarki visual yang kuat: hero yang menenangkan, penyajian paket yang rapi, sosial bukti dari testimoni, dan call-to-action yang jelas di setiap bagian. Animasi framer-motion dipakai halus untuk menghadirkan kesan premium tanpa mengganggu performa.",
    features: [
      { title: "Hero & Branding Elegan", text: "Pembuka visual yang menyampaikan nilai layanan secara emosional." },
      { title: "Katalog Paket", text: "Penyajian paket umroh dengan detail fasilitas dan harga yang jelas." },
      { title: "Cek Ketersediaan", text: "Fitur interaktif untuk memeriksa jadwal dan kuota keberangkatan setiap paket secara langsung." },
      { title: "Testimoni Jemaah", text: "Sosial bukti dari pengalaman jemaah untuk membangun kepercayaan." },
      { title: "Call-to-Action Terarah", text: "Alur pendaftaran dan kontak yang jelas di setiap bagian halaman." },
    ],
    stack: ["React", "Framer Motion", "Tailwind"],
    screenshots: ["/images/projects/idetour/isi.webp"],
    result:
      "Ide Tour Travel memberikan kesan profesional dan menenangkan yang relevan dengan konteks ibadah umroh. Landing page ini memperkuat kepercayaan calon jemaah dan menyediakan jalur konversi yang jelas, mendukung pertumbuhan pendaftaran klien.",
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

  12: {
    title: "MusicRent — Aplikasi Penyewaan Alat Musik",
    subtitle: "Aplikasi penyewaan alat musik dengan sistem booking, manajemen inventaris, dan pembayaran terintegrasi untuk memudahkan penyewa maupun pemilik usaha rental.",
    heroImage: "/images/projects/musicrent.webp",
    company: "Startup",
    role: "Mobile Developer",
    scope: "Mobile Development, Booking System, Firebase Integration",
    period: "2025",
    overview:
      "MusicRent adalah aplikasi mobile yang menghubungkan penyewa dengan penyedia alat musik. Aplikasi ini memungkinkan pengguna mencari dan memesan alat musik — mulai dari gitar, keyboard, hingga drum — dengan status ketersediaan real-time, sistem booking yang jelas, dan pembayaran yang terintegrasi. Di sisi penyedia, aplikasi membantu mengelola inventaris dan jadwal penyewaan agar operasional lebih tertib.",
    challenges: [
      {
        title: "Pencarian Alat Musik Manual",
        text: "Penyewa harus menghubungi satu per satu tempat rental atau mencarinya lewat media sosial tanpa informasi ketersediaan yang jelas.",
      },
      {
        title: "Jadwal Sewa Bentrok",
        text: "Penyedia kesulitan mengelola jadwal penyewaan sehingga sering terjadi bentrok antar penyewa atau alat yang terlewat.",
      },
      {
        title: "Proses Transaksi Rumit",
        text: "Booking dan pembayaran masih dilakukan manual, menyulitkan pelacakan status dan riwayat sewa.",
      },
    ],
    solution:
      "MusicRent dibangun dengan React Native untuk pengalaman mobile yang konsisten di Android dan iOS, Firebase sebagai backend untuk autentikasi, notifikasi, dan data real-time, serta MySQL untuk penyimpanan data transaksi dan inventaris yang terstruktur. Sistem booking dirancang agar status ketersediaan alat selalu akurat dan pembayaran dapat diproses langsung di aplikasi.",
    features: [
      { title: "Katalog Alat Musik", text: "Jelajahi alat musik berdasarkan kategori, harga, dan ketersediaan." },
      { title: "Sistem Booking", text: "Pesan alat dengan jadwal yang jelas dan status real-time." },
      { title: "Manajemen Inventaris", text: "Penyedia mengelola stok dan jadwal penyewaan dalam satu dashboard." },
      { title: "Pembayaran Terintegrasi", text: "Proses pembayaran dan riwayat transaksi yang tercatat otomatis." },
    ],
    stack: ["React Native", "Firebase", "MySQL"],
    screenshots: ["/images/projects/musicrent.webp"],
    result:
      "MusicRent mempermudah penyewa menemukan dan memesan alat musik secara instan, sekaligus membantu penyedia mengelola inventaris dan jadwal dengan lebih rapi. Proses booking yang jelas dan pembayaran terintegrasi membuat transaksi lebih cepat dan terhindar dari jadwal bentrok.",
    link: null,
  },

  13: {
    title: "NFC Absensi — Absensi Sekolah via NFC",
    subtitle: "Aplikasi absensi sekolah berbasis NFC yang memungkinkan pencatatan kehadiran siswa secara cepat dan akurat melalui mobile app.",
    heroImage: "/images/projects/nfcPresensi.webp",
    company: "School",
    role: "Mobile Developer",
    scope: "Mobile Development, NFC Integration, AppScript Backend",
    period: "2025",
    overview:
      "NFC Absensi adalah aplikasi mobile yang mengubah cara pencatatan kehadiran di sekolah. Dengan menempelkan kartu atau perangkat NFC ke smartphone, kehadiran siswa tercatat otomatis dalam hitungan detik. Aplikasi ini menghilangkan antrean panjang dan kesalahan pencatatan manual, sekaligus memberi guru dan orang tua data kehadiran yang akurat secara real-time.",
    challenges: [
      {
        title: "Absensi Manual yang Lambat",
        text: "Pencatatan kehadiran manual memakan waktu lama, terutama di jam-jam sibuk, dan rawan salah catat.",
      },
      {
        title: "Data Kehadiran Tidak Tersentralisasi",
        text: "Rekap kehadiran tersebar di kertas atau file terpisah sehingga sulit dipantau oleh guru dan orang tua.",
      },
      {
        title: "Rentan Titip Absen",
        text: "Sistem absen tradisional mudah dimanipulasi karena tidak ada verifikasi identitas yang kuat.",
      },
    ],
    solution:
      "NFC Absensi dibangun dengan Flutter untuk performa dan pengalaman antarmuka yang mulus di berbagai perangkat Android, memanfaatkan pembacaan NFC untuk verifikasi identitas siswa yang unik, serta Google Apps Script sebagai backend ringan untuk menyimpan dan merekap data kehadiran. Proses absen cukup sekali tempel — data langsung tercatat dan terkirim ke rekap kehadiran.",
    features: [
      { title: "Absen NFC Instan", text: "Cukup tempelkan kartu NFC untuk mencatat kehadiran dalam hitungan detik." },
      { title: "Rekap Kehadiran Otomatis", text: "Data kehadiran tersimpan dan direkap otomatis untuk guru dan administrasi." },
      { title: "Verifikasi Identitas", text: "Setiap siswa memiliki ID NFC unik sehingga absen tidak mudah dimanipulasi." },
      { title: "Monitoring Real-time", text: "Guru dan orang tua dapat memantau kehadiran siswa secara real-time." },
    ],
    stack: ["Flutter", "AppScript", "NFC"],
    screenshots: ["/images/projects/nfcPresensi.webp"],
    result:
      "NFC Absensi mempercepat proses pencatatan kehadiran secara signifikan dan membuat data kehadiran lebih akurat serta terpusat. Manipulasi absen dapat ditekan berkat verifikasi NFC, dan guru maupun orang tua mendapatkan visibilitas kehadiran siswa secara real-time.",
    link: null,
  },

  14: {
    title: "Uangku Web — Pencatatan Keuangan dengan AI Analytics",
    subtitle: "Aplikasi pencatatan keuangan berbasis web dengan AI analytics, wallet management, goals, dan transaksi recurring untuk pengelolaan keuangan pribadi yang lebih cerdas.",
    heroImage: "/images/projects/uangku/uangku.webp",
    company: "Startup",
    role: "Fullstack Developer",
    scope: "Fullstack Development, AI Integration, Database Design",
    period: "2025",
    overview:
      "Uangku Web adalah platform pencatatan keuangan pribadi berbasis web yang dirancang untuk membantu pengguna mengelola keuangan secara menyeluruh. Selain pencatatan transaksi harian, Uangku Web dilengkapi AI analytics yang memberikan insight belanja, wallet untuk mengelola saldo multi-akun, goals untuk menabung target, serta dukungan transaksi recurring untuk pengeluaran berkala seperti tagihan dan langganan.",
    challenges: [
      {
        title: "Pencatatan yang Membosankan",
        text: "Pengguna sering menyerah mencatat keuangan karena prosesnya manual dan tidak memberikan nilai balik yang instan.",
      },
      {
        title: "Data Keuangan Terpisah-pisah",
        text: "Saldo tersebar di banyak akun dan dompet digital sehingga sulit melihat posisi keuangan secara utuh.",
      },
      {
        title: "Tidak Ada Insight",
        text: "Tanpa analisis otomatis, pengguna kesulitan memahami pola pengeluaran dan membuat keputusan keuangan.",
      },
    ],
    solution:
      "Uangku Web dibangun dengan Next.js untuk pengalaman web yang cepat dan SEO-friendly, PostgreSQL sebagai database utama untuk data transaksi yang konsisten dan terstruktur, serta integrasi LLM untuk AI analytics yang membaca pola keuangan pengguna dan memberikan insight yang mudah dipahami. Fitur wallet, goals, dan recurring transaksi dirancang agar seluruh kebutuhan pencatatan keuangan berada dalam satu platform.",
    features: [
      { title: "Pencatatan Transaksi", text: "Catat pemasukan dan pengeluaran dengan kategori, tanggal, dan catatan yang fleksibel." },
      { title: "AI Analytics", text: "Insight otomatis berbasis LLM tentang pola belanja dan rekomendasi pengelolaan keuangan." },
      { title: "Wallet Management", text: "Kelola saldo multi-akun — tunai, bank, dan e-wallet — dalam satu tempat." },
      { title: "Goals", text: "Tetapkan target menabung dan pantau progresnya secara visual." },
      { title: "Transaksi Recurring", text: "Otomatis catat pengeluaran berkala seperti tagihan dan langganan." },
    ],
    stack: ["NextJs", "Postgres", "LLM"],
    screenshots: ["/images/projects/uangku/login.webp", "/images/projects/uangku/dashboard.webp"],
    gallery: [
      "/images/projects/uangku/analystics.webp",
      "/images/projects/uangku/budget.webp",
      "/images/projects/uangku/goals.webp",
    ],
    result:
      "Uangku Web memberikan pengalaman pencatatan keuangan yang lebih cerdas dan menyenangkan. Dengan AI analytics, pengguna mendapatkan insight yang berguna tanpa harus menganalisis data secara manual, sementara wallet, goals, dan recurring transaksi menjadikan semua kebutuhan keuangan terpusat dalam satu aplikasi.",
    link: null,
  },

  15: {
    title: "Travel Ikatte — Website Penyedia Jasa Tour Explore Sulawesi",
    subtitle: "Platform penyedia jasa tour explore Sulawesi dengan pemesanan paket tour, penginapan, transportasi, dan paket layanan lainnya dalam satu tempat.",
    heroImage: "/images/cover/travel.webp",
    company: "Travel Ikatte",
    role: "Fullstack Developer",
    scope: "Fullstack Development, Booking System, E-commerce Integration",
    period: "2025",
    overview:
      "Travel Ikatte adalah platform web fullstack untuk penyedia jasa tour explore Sulawesi. Melalui platform ini, wisatawan dapat melihat katalog paket tour, memesan penginapan, transportasi, hingga paket layanan tambahan secara online dalam satu alur. Dibangun dengan Next.js di sisi frontend, Express sebagai API backend, PostgreSQL untuk penyimpanan data, Redis untuk caching dan sesi agar halaman cepat, serta di-deploy melalui Cloudflare untuk distribusi CDN dan keamanan edge. Platform ini mengubah pemesanan yang sebelumnya manual menjadi sistem booking yang terpusat, transparan, dan dapat dilacak.",
    challenges: [
      {
        title: "Pemesanan Manual yang Tidak Terorganisir",
        text: "Pelanggan memesan paket tour lewat chat atau telepon, sehingga informasi pesanan mudah tercampur dan sulit ditindaklanjuti.",
      },
      {
        title: "Informasi Paket Tersebar",
        text: "Detail paket, harga, dan ketersediaan tersebar di media sosial dan brosur, membuat calon pelanggan bingung membandingkan.",
      },
      {
        title: "Konfirmasi dan Pembayaran Lambat",
        text: "Proses konfirmasi ketersediaan dan pembayaran dilakukan manual sehingga memakan waktu dan menurunkan kepercayaan pelanggan.",
      },
    ],
    solution:
      "Travel Ikatte dibangun sebagai platform fullstack dengan Next.js untuk antarmuka yang cepat dan SEO-friendly, Express sebagai REST API, PostgreSQL sebagai database utama, Redis untuk caching data paket dan sesi booking agar respons cepat, serta Cloudflare untuk CDN dan proteksi. Pelanggan dapat menjelajahi paket, melihat ketersediaan, melakukan booking, dan melacak status pesanan; tim travel mengelola seluruh pesanan dari dashboard terpusat.",
    features: [
      { title: "Katalog Paket Tour", text: "Jelajahi paket tour explore Sulawesi dengan detail itinerary, harga, dan ketersediaan." },
      { title: "Pemesanan Online", text: "Alur booking paket, penginapan, dan transportasi dengan status yang dapat dilacak." },
      { title: "Penginapan & Transportasi", text: "Pilihan akomodasi dan transportasi yang terintegrasi dalam satu pemesanan." },
      { title: "Dashboard Pesanan", text: "Manajemen pesanan pelanggan, jadwal, dan konfirmasi dari satu tempat." },
      { title: "Pembayaran & Konfirmasi", text: "Proses pembayaran dan konfirmasi yang lebih cepat dengan notifikasi otomatis." },
    ],
    stack: ["NextJs", "Express", "PostgreSQL", "Cloudflare", "Redis"],
    screenshots: ["/images/cover/travel.webp"],
    result:
      "Travel Ikatte menyatukan seluruh proses pemesanan dalam satu platform yang cepat dan andal. Pelanggan dapat memesan paket, penginapan, dan transportasi tanpa bolak-balik chat, sementara tim travel mengelola pesanan dengan lebih teratur. Dengan Redis untuk caching dan Cloudflare di edge, pengalaman browsing tetap responsif meski trafik tinggi.",
    link: null,
  },

  16: {
    title: "Hikmah Laundry — Sistem Informasi Laundry",
    subtitle: "Sistem informasi laundry untuk pencatatan dan management operasional serta tracking orderan pelanggan secara real-time.",
    heroImage: "/images/cover/laundry.webp",
    company: "Hikmah Laundry",
    role: "Fullstack Developer",
    scope: "Fullstack Development, Operational Management, Order Tracking",
    period: "2025",
    overview:
      "Hikmah Laundry adalah sistem informasi yang mendigitalkan seluruh proses bisnis laundry — dari pencatatan order masuk, pengelolaan layanan dan harga, hingga tracking status proses (cuci, setrika, siap ambil) yang dapat dipantau pelanggan. Dibangun dengan Next.js dan TailwindCSS untuk antarmuka yang responsif dan modern, Express sebagai backend API, PostgreSQL untuk data operasional, serta MinIO untuk penyimpanan bukti foto order dan dokumen. Sistem ini menggantikan pencatatan manual yang rawan hilang dengan pencatatan digital yang terpusat dan dapat dilaporkan.",
    challenges: [
      {
        title: "Pencatatan Manual Rentan Kesalahan",
        text: "Order dicatat di buku atau kertas sehingga mudah hilang, salah tulis, dan sulit dicari kembali.",
      },
      {
        title: "Pelanggan Tidak Tahu Status Order",
        text: "Pelanggan harus datang atau menelepon untuk menanyakan apakah cuciannya sudah selesai.",
      },
      {
        title: "Laporan Operasional Sulit Direkap",
        text: "Rekap omset, jumlah order, dan layanan terlaris harus dihitung manual sehingga lambat dan tidak akurat.",
      },
    ],
    solution:
      "Hikmah Laundry dibangun sebagai sistem informasi fullstack: pencatatan order digital dengan nomor antrian, manajemen layanan dan tarif, serta tracking status yang diperbarui di setiap tahap proses. Data operasional tersimpan terpusat di PostgreSQL, bukti foto order disimpan di MinIO, dan antarmuka dibangun dengan Next.js serta TailwindCSS agar mudah dipakai di kasir maupun perangkat mobile. Laporan omset dan kinerja operasional dapat dihasilkan otomatis.",
    features: [
      { title: "Pencatatan Order", text: "Input order baru dengan detail layanan, berat, dan nomor antrian otomatis." },
      { title: "Manajemen Layanan & Harga", text: "Kelola daftar layanan, tarif per kilogram, dan paket dalam satu pengaturan." },
      { title: "Tracking Status Real-time", text: "Status order diperbarui dari cuci, setrika, hingga siap ambil — dapat dipantau pelanggan." },
      { title: "Dashboard Operasional", text: "Pemantauan order aktif, beban kerja, dan pendapatan harian secara terpusat." },
      { title: "Laporan Omset", text: "Rekap pendapatan dan layanan terlaris yang dihasilkan otomatis per periode." },
    ],
    stack: ["NextJs", "TailwindCSS", "Express", "Postgres", "Minio"],
    screenshots: ["/images/cover/laundry.webp"],
    result:
      "Hikmah Laundry membuat operasional laundry lebih tertib dan transparan. Pencatatan digital menghilangkan order yang hilang, pelanggan dapat memantau status cucian secara real-time tanpa bertanya berulang kali, dan laporan omset yang otomatis membantu pemilik mengambil keputusan bisnis dengan data yang akurat.",
    link: null,
  },

  17: {
    title: "Distro Muslim — Ecommerce Pakaian Muslim Makassar",
    subtitle: "Toko online khusus pakaian muslim di Makassar dengan katalog produk, keranjang belanja, payment gateway, dan ongkir otomatis via RajaOngkir.",
    heroImage: "/images/cover/distro-makassar.webp",
    company: "Distro Muslim Makassar",
    role: "Fullstack Developer",
    scope: "Ecommerce Development, Payment Integration, Shipping Integration",
    period: "2025",
    overview:
      "Distro Muslim adalah website ecommerce khusus pakaian muslim di Makassar yang dibangun di atas WordPress dengan WooCommerce sebagai engine toko. Toko ini menyediakan katalog produk lengkap dengan kategori, keranjang belanja, checkout, pembayaran online melalui payment gateway, serta perhitungan ongkos kirim otomatis menggunakan RajaOngkir. Integrasi ini memungkinkan penjualan yang sebelumnya lewat chat dan media sosial bertransformasi menjadi toko online yang terukur, dengan manajemen produk dan pesanan yang terpusat di dashboard WooCommerce.",
    challenges: [
      {
        title: "Penjualan Tidak Terukur",
        text: "Penjualan lewat chat dan media sosial membuat data produk, stok, dan pesanan tidak terkelola dengan baik.",
      },
      {
        title: "Ongkir Dihitung Manual",
        text: "Ongkos kirim dihitung satu per satu secara manual sehingga lambat dan sering berbeda dari tarif ekspedisi sebenarnya.",
      },
      {
        title: "Pembayaran Tidak Terintegrasi",
        text: "Tanpa payment gateway, pembayaran dilakukan transfer manual yang rawan keterlambatan dan menurunkan kepercayaan pembeli.",
      },
    ],
    solution:
      "Distro Muslim dibangun dengan WordPress dan WooCommerce sebagai platform ecommerce yang matang, lengkap dengan katalog produk, keranjang, dan manajemen pesanan. Payment gateway diintegrasikan agar pembeli dapat membayar langsung dengan berbagai metode, dan RajaOngkir diintegrasikan untuk menghitung ongkos kirim real-time dari berbagai ekspedisi berdasarkan alamat tujuan. Tampilan toko dirancang sesuai identitas brand pakaian muslim agar nyaman dan meyakinkan.",
    features: [
      { title: "Katalog Produk & Kategori", text: "Pakaian muslim diorganisir dalam kategori dan filter yang memudahkan pencarian." },
      { title: "Keranjang & Checkout", text: "Alur belanja yang jelas dari keranjang hingga checkout dengan form alamat lengkap." },
      { title: "Payment Gateway", text: "Pembayaran online dengan berbagai metode yang terverifikasi otomatis." },
      { title: "Ongkir Otomatis RajaOngkir", text: "Perhitungan ongkos kirim real-time dari berbagai ekspedisi berdasarkan alamat tujuan." },
      { title: "Manajemen Pesanan", text: "Kelola stok, pesanan, dan status pengiriman dari dashboard WooCommerce." },
    ],
    stack: ["WordPress", "WooCommerce", "RajaOngkir"],
    screenshots: ["/images/cover/distro-makassar.webp"],
    result:
      "Distro Muslim menjadi toko online yang profesional dengan alur belanja yang mulus: katalog rapi, ongkir akurat secara real-time, dan pembayaran terintegrasi yang meningkatkan kepercayaan pembeli. Manajemen produk dan pesanan terpusat membuat operasional toko lebih mudah dikelola dan penjualan lebih terukur.",
    link: null,
  },

  18: {
    title: "BisnesLab — Landing Page Produk Digital + Checkout",
    subtitle: "Landing page produk digital dengan checkout screen, memanfaatkan WooCommerce headless sebagai backend commerce dan React untuk antarmuka modern.",
    heroImage: "/images/cover/bisneslab.webp",
    company: "BisnesLab",
    role: "Fullstack Developer",
    scope: "Frontend Development, Headless Commerce, Payment Integration",
    period: "2025",
    overview:
      "BisnesLab adalah landing page produk digital yang dilengkapi checkout screen, dibangun dengan arsitektur headless commerce: frontend React (Next.js) yang modern dan cepat terpisah sepenuhnya dari engine commerce WooCommerce. Produk, keranjang, dan pesanan dikelola melalui WooCommerce API sebagai backend, sementara antarmuka dibuat khusus untuk mendorong konversi — dari penjelasan produk di landing page hingga proses checkout yang singkat dan terintegrasi payment gateway.",
    challenges: [
      {
        title: "Landing Page Tidak Bisa Bertransaksi",
        text: "Halaman promosi statis hanya menampilkan info produk tanpa kemampuan untuk langsung membeli.",
      },
      {
        title: "Checkout yang Panjang Menurunkan Konversi",
        text: "Alur pembelian yang berbelit dan banyak langkah membuat calon pembeli meninggalkan halaman sebelum selesai.",
      },
      {
        title: "Butuh Backend Commerce yang Matang",
        text: "Mengelola produk digital, pesanan, dan pembayaran membutuhkan sistem yang sudah terbukti dan mudah dikelola tim non-teknis.",
      },
    ],
    solution:
      "BisnesLab dibangun dengan pendekatan headless: WooCommerce berperan sebagai backend commerce — mengelola produk digital, keranjang, pesanan, dan pembayaran lewat API — sementara frontend React (Next.js) menyajikan landing page yang menarik dengan checkout screen satu halaman. Checkout dirancang sesingkat mungkin dengan integrasi payment gateway sehingga pembeli dapat menyelesaikan transaksi dalam hitungan menit.",
    features: [
      { title: "Landing Page Produk Digital", text: "Halaman promosi modern dengan hierarki visual dan call-to-action yang jelas." },
      { title: "Checkout Screen", text: "Proses checkout satu halaman yang singkat dan bebas hambatan." },
      { title: "WooCommerce Headless", text: "Backend commerce matang yang mengelola produk, keranjang, dan pesanan via API." },
      { title: "Payment Gateway", text: "Pembayaran online terintegrasi dengan konfirmasi otomatis." },
      { title: "Manajemen Produk & Pesanan", text: "Kelola produk digital dan riwayat pesanan dari dashboard WooCommerce." },
    ],
    stack: ["React", "WooCommerce", "NextJs"],
    screenshots: ["/images/cover/bisneslab.webp"],
    result:
      "BisnesLab menggabungkan kekuatan landing page yang menarik dengan fungsionalitas transaksi yang nyata. Calon pembeli dapat memahami produk dan langsung membeli melalui checkout yang singkat, sementara tim dapat mengelola produk dan pesanan dengan mudah lewat WooCommerce — kombinasi yang meningkatkan konversi tanpa mengorbankan kemudahan operasional.",
    link: null,
  },
};

export default caseStudies;
