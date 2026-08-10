// ============================================================
// ARSIP PROJECT (Hidden)
// Project yang disembunyikan dari portfolio:
//   - Explora (id 2)
//   - ARMS (id 4)
//   - SIMAsuransi (id 5)
//
// File ini murni cadangan — TIDAK di-import oleh komponen mana pun.
// Untuk mengaktifkan kembali: salin entri kembali ke
// caseStudies.js, Projects.jsx, dan WorkPage.jsx.
// ============================================================

// === Case studies (artikel /article/:id) ===
export const archivedCaseStudies = {
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
};

// === Kartu di halaman /work (WorkPage.jsx) ===
export const archivedWorkProjects = {
  "Web App": [
    {
      id: 2,
      title: "Explora",
      company: "PT Pos Indonesia",
      year: "2023",
      description: "Knowledge Management & Event Management untuk memfasilitasi pertukaran pengetahuan dan pengelolaan acara perusahaan.",
      tags: ["Knowledge Management", "Event Management", "Web App"],
      stack: ["ReactJS", "MaterialUI", "Express", "PostgreSQL"],
      images: ["/images/projects/explora/layar.webp"],
      bgColor: "bg-fuchsia-50/60"
    },
    {
      id: 4,
      title: "ARMS",
      company: "Internal",
      year: "2024",
      description: "Attrition Retention Management System untuk menganalisis dan mengelola retensi karyawan di perusahaan.",
      tags: ["Retention", "Analytics", "Dashboard"],
      stack: ["React", "Python", "PostgreSQL"],
      images: ["/images/projects/arms.webp"],
      bgColor: "bg-amber-50/60"
    },
    {
      id: 5,
      title: "SIMAsuransi",
      company: "Client",
      year: "2023",
      description: "Sistem Informasi Management Asuransi untuk mempermudah proses klaim dan pengelolaan polis asuransi.",
      tags: ["Insurance", "Management", "Web App"],
      stack: ["Angular", "Spring Boot", "Oracle"],
      images: ["/images/projects/simasuransi.webp"],
      bgColor: "bg-blue-50/60"
    },
  ],
};

// === Kartu ringkas di Home (Projects.jsx) ===
export const archivedHomeProjects = {
  "Web App": [
    { id: 2, title: "Explora", desc: "Knowledge Management & Event Management.", stack: ["ReactJS", "MaterialUI", "Express", "PostgreSQL"], img: "/images/projects/explora/header.webp" },
    { id: 4, title: "ARMS", desc: "Attrition Retention Management System.", stack: ["React", "Python", "PostgreSQL"], img: "/images/projects/arms.webp" },
    { id: 5, title: "SIMAsuransi", desc: "Sistem Informasi Management Asuransi.", stack: ["Angular", "Spring Boot", "Oracle"], img: "/images/projects/simasuransi.webp" },
  ],
};
