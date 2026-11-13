import newProjects from './newProjects';

// Sumber tunggal untuk angka statistik (dipakai Hero dan Stats).
// Tahun mulai karir: 2020 (IT Support, DKP Sulsel).
const CAREER_START_YEAR = 2020;
// Jumlah project yang ditampilkan di web: newProjects + 11 web lama + 4 mobile.
const SHOWN_PROJECTS = newProjects.length + 11 + 4;

export const siteStats = {
  years: `${new Date().getFullYear() - CAREER_START_YEAR}+`,
  projects: `${Math.floor(SHOWN_PROJECTS / 5) * 5}+`,
  brands: '30+',
};
