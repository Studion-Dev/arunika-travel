export const siteConfig = {
  // Identitas bisnis
  name: 'Arunika Travel',
  legalName: 'PT Arunika Wisata Jogja',
  tagline: 'Jelajahi Hangat dan Keindahan Jogja Bersama Kami',
  description:
    'Agen perjalanan terpercaya di Yogyakarta. Menyediakan paket wisata Jogja lengkap, tour custom, armada nyaman, dan tour guide lokal berpengalaman.',

  // Domain website (Placeholder)
  url: 'https://arunikatravel.com',

  // Informasi kontak
  contact: {
    whatsapp: '6281234567890', // Tanpa tanda plus agar aman untuk link wa.me
    whatsappFormatted: '0812-3456-7890',
    phone: '+62274123456',
    email: 'halo@arunikatravel.com',
    hours: 'Senin - Minggu: 08.00 - 21.00 WIB',
    address:
      'Jl. Malioboro No. 123, Yogyakarta, D.I. Yogyakarta 55213, Indonesia',
  },

  // Alamat bisnis terperinci (Opsional jika ingin dipecah)
  address: {
    street: 'Jl. Malioboro No. 123',
    city: 'Yogyakarta',
    province: 'D.I. Yogyakarta',
    postalCode: '55213',
    country: 'Indonesia',
  },

  // Media sosial
  social: {
    instagram: 'https://instagram.com/arunikatravel',
    tiktok: 'https://tiktok.com/@arunikatravel',
    facebook: 'https://facebook.com/arunikatravel',
    youtube: 'https://youtube.com/@arunikatravel',
  },

  // Navigasi global (3 Halaman utama)
  navigation: [
    { label: 'Beranda', href: '/' },
    { label: 'Paket Wisata', href: '/paket' },
    { label: 'Kontak', href: '/kontak' },
  ],

  // SEO dan social sharing
  seo: {
    defaultTitle: 'Arunika Travel | Paket Wisata Jogja Terpercaya',
    titleTemplate: '%s | Arunika Travel Yogyakarta',
    defaultDescription:
      'Nikmati keindahan wisata Jogja bersama Arunika Travel. Paket tour murah, fleksibel, armada prima, dan pelayanan ramah khas Yogyakarta.',
    ogImage: '/images/og-image.jpg',
    locale: 'id_ID',
  },
};
