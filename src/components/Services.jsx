import { motion } from 'framer-motion';
import { ShoppingCart, CalendarCheck, ClipboardList, Newspaper, Smartphone, Globe, BarChart3, GraduationCap, Sparkles } from 'lucide-react';

const services = [
  { icon: ShoppingCart, title: "E-Commerce Pribadi", desc: "Toko online dengan katalog produk, keranjang belanja, dan pembayaran yang terintegrasi." },
  { icon: CalendarCheck, title: "Reservation System", desc: "Sistem booking untuk hotel, travel, restoran, atau venue — real-time dan mudah dikelola." },
  { icon: ClipboardList, title: "Management Operasional", desc: "Dashboard pengelolaan inventori, kepegawaian, logistik, dan proses bisnis harian." },
  { icon: Newspaper, title: "Portal Berita", desc: "Portal berita dengan CMS, manajemen kategori, dan optimasi SEO untuk jangkauan maksimal." },
  { icon: Smartphone, title: "Aplikasi Mobile", desc: "Aplikasi Android/iOS untuk layanan bisnis — dari booking hingga absensi berbasis NFC." },
  { icon: Globe, title: "Landing Page & Company Profile", desc: "Halaman profil bisnis yang elegan, cepat, dan dirancang untuk mendorong konversi." },
  { icon: BarChart3, title: "Dashboard & Analitik", desc: "Visualisasi data real-time yang membantu Anda mengambil keputusan berbasis data." },
  { icon: GraduationCap, title: "Sistem Informasi Sekolah & Instansi", desc: "Sistem absensi, data kepegawaian, dan layanan informasi untuk sekolah maupun instansi." },
];

export default function Services() {
  return (
    <section className="py-24 relative bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h2 className="text-2xl md:text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">What I Can Build For You</h2>
            <p className="text-slate-500 dark:text-slate-400 text-[15px] mt-1">Solusi digital yang bisa Anda dapatkan — dari toko online hingga sistem informasi instansi.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              className="group bg-[#f8fafc] dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 rounded-[24px] p-7 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:shadow-[0_12px_40px_-12px_rgba(99,102,241,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-600/10 flex items-center justify-center mb-5 group-hover:bg-indigo-600 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold text-[16px] mb-2.5">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-[13.5px] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
