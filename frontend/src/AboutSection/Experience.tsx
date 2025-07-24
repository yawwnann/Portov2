"use client";

import { InfiniteMovingCards } from "./components/Infinite-Moving-Cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={experiences} direction="right" speed="slow" />
    </div>
  );
}
const experiences = [
  {
    quote:
      "Menguasai backend development menggunakan Node.js untuk server, logika bisnis, dan database. Membuat RESTful API menggunakan Next.js sebagai backend dan integrasi proyek akhir dengan layanan Machine Learning melalui API.",
    name: "Frontend And Backend Developer Cohort",
    title: "Coding Camp 2025 by DBS Foundation - 2025",
  },
  {
    quote:
      "Mengembangkan lebih dari 100 proyek sebagai Pengembang Fullstack (Laravel, React.js) dan Desainer Grafis untuk berbagai klien selama 1,5 tahun. Merancang backend dan frontend aplikasi bisnis, serta membangun UI/UX responsif dan optimal.",
    name: "Freelance Web Developer & Graphic Designer",
    title: "Yogyakarta, Indonesia - 2024–Sekarang",
  },
  {
    quote:
      "Memimpin tim desain untuk produksi konten visual seperti poster, backdrop, dan media sosial. Aktif sebagai Koordinator dalam kegiatan antar-divisi untuk kelancaran acara orientasi mahasiswa baru.",
    name: "Koordinator Desain",
    title: "Kreatif P2K FORBES UAD 2024 - 2024",
  },
  {
    quote:
      "Terlibat dalam pengembangan proyek berbasis game. Menggunakan HTML, Tailwind, JavaScript ActionScript, dan keterampilan grafis lainnya untuk mendukung tim.",
    name: "Programmer",
    title: "PKM UAD 2024 (Program Kreativitas Mahasiswa) - 2024",
  },
  {
    quote:
      "Bertanggung jawab atas pengelolaan dan pelaksanaan materi promosi visual kegiatan UKM, mendesain berbagai aset grafis (poster, pamflet, media sosial), serta mendokumentasikan acara, promosi, dan edukasi UKM.",
    name: "Humas",
    title: "UKM Taekwondo Universitas Ahmad Dahlan - 2023–Sekarang",
  },
];
