/**
 * Content placeholder data for Arunika Travel Website
 */

// ==========================================
// 1. BERANDA (index.astro) - 6 SECTIONS
// ==========================================
export const homeContent = {
  // Section 1: Hero
  hero: {
    eyebrow: 'Matahari Terbit Istimewa Jogja',
    title: 'Petualangan Autentik di Istimewanya Yogyakarta',
    description:
      'Nikmati paket wisata Jogja lengkap mulai dari keajaiban budaya Candi, keindahan pantai selatan, hingga keeksotikan Jeep Lava Tour Merapi.',
    primaryCta: {
      label: 'Lihat Paket Wisata',
      href: '/paket',
    },
    secondaryCta: {
      label: 'Konsultasi Gratis via WA',
      href: 'https://wa.me/6281234567890?text=Halo%20Arunika%20Travel,%20saya%20mau%20tanya%20paket%20wisata%20Jogja',
    },
    image: {
      src: '/images/hero-jogja.jpg',
      alt: 'Pemandangan Sunset Candi Prambanan Yogyakarta',
    },
  },

  // Section 2: Stats
  stats: {
    items: [
      { value: '5.000+', label: 'Wisatawan Puas' },
      { value: '150+', label: 'Destinasi & Trip' },
      { value: '99.8%', label: 'Rating Kepuasan' },
      { value: '7+', label: 'Tahun Pengalaman' },
    ],
  },

  // Section 3: Paket Terlaris (Featured Packages)
  featuredPackages: {
    eyebrow: 'Favorit Wisatawan',
    title: 'Paket Wisata Jogja Terlaris',
    description:
      'Destinasi pilihan paling populer yang dirancang khusus untuk kenyamanan liburan keluarga dan rombongan Anda.',
    items: [
      {
        id: 'one-day-heritage',
        title: 'One Day Tour Heritage & Merapi',
        duration: '1 Hari',
        price: 'Rp 350.000',
        priceUnit: '/ pax',
        highlights: [
          'Candi Borobudur / Prambanan',
          'Lava Tour Merapi (Jeep)',
          'Belanja Souvenir Malioboro',
        ],
        image: '/images/merapi-lava-tour.jpg',
        imageAlt: 'Lava Tour Merapi Jogja',
        badge: 'Terlaris',
        ctaHref: '/paket#one-day-heritage',
      },
      {
        id: 'adventure-nature-3d2n',
        title: 'Adventure & Nature 3D2N',
        duration: '3 Hari 2 Malam',
        price: 'Rp 1.250.000',
        priceUnit: '/ pax',
        highlights: [
          'Eksplor Goa Jomblang',
          'Gondola Pantai Timang',
          'Sunset Obelix Hills',
          'Hotel Bintang 3 + Makan',
        ],
        image: '/images/goa-jomblang.jpg',
        imageAlt: 'Petualangan Caving Goa Jomblang',
        badge: 'Rekomendasi',
        ctaHref: '/paket#adventure-nature-3d2n',
      },
      {
        id: 'culture-culinary-2d1n',
        title: 'Premium Culture & Culinary 2D1N',
        duration: '2 Hari 1 Malam',
        price: 'Rp 850.000',
        priceUnit: '/ pax',
        highlights: [
          'Kraton Jogja & Tamansari',
          'Tour Kuliner Gudeg Yu Djum',
          'Sunset Tebing Breksi',
          'Hotel Bintang 3',
        ],
        image: '/images/kraton-jogja.jpg',
        imageAlt: 'Wisata Budaya Kraton Yogyakarta',
        badge: 'Hemat',
        ctaHref: '/paket#culture-culinary-2d1n',
      },
    ],
  },

  // Section 4: Value Proposition (Kenapa Memilih Kami)
  valueProp: {
    eyebrow: 'Keunggulan Kami',
    title: 'Mengapa Memilih Arunika Travel?',
    description:
      'Kami berkomitmen memberikan pengalaman perjalanan yang aman, nyaman, dan tak terlupakan selama di Yogyakarta.',
    items: [
      {
        icon: 'Car',
        title: 'Armada Terbaru & Bersih',
        description:
          'Seluruh unit kendaraan dalam kondisi prima, terawat berkala, dan dilengkapi AC yang dingin.',
      },
      {
        icon: 'UserCheck',
        title: 'Driver & Guide Lokal Ramah',
        description:
          'Pengemudi berpengalaman, hafal rute tercepat, dan siap merekomendasikan spot foto terbaik.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Harga Transparan & Jelas',
        description:
          'Tanpa biaya tersembunyi. Seluruh rincian biaya BBM, tol, parkir, dan tiket wisata tertera transparan.',
      },
      {
        icon: 'Compass',
        title: 'Itinerary Fleksibel',
        description:
          'Bebas menyesuaikan jadwal dan tujuan destinasi sesuai keinginan liburan impian Anda.',
      },
    ],
  },

  // Section 5: Testimoni
  testimonials: {
    eyebrow: 'Ulasan Pelanggan',
    title: 'Apa Kata Mereka Tentang Arunika?',
    description:
      'Pengalaman nyata dari para wisatawan yang telah mempercayakan liburan Jogja mereka bersama kami.',
    items: [
      {
        name: 'Rian & Keluarga',
        origin: 'Jakarta',
        avatar: '/images/avatar-1.jpg',
        rating: 5,
        quote:
          'Layanan Arunika Travel top banget! Driver Mas Budi ramah banget, ngejelasin sejarah tiap lokasi dengan detail. Recommended buat trip keluarga!',
      },
      {
        name: 'Dina Pratiwi',
        origin: 'Surabaya',
        avatar: '/images/avatar-2.jpg',
        rating: 5,
        quote:
          'Trip Goa Jomblang & Pantai Timang seru parah! Semua diurusin dari A sampai Z, kita tinggal terima beres dan menikmati pemandangan.',
      },
      {
        name: 'Ahmad Fauzi',
        origin: 'Bandung',
        avatar: '/images/avatar-3.jpg',
        rating: 5,
        quote:
          'Paket custom 3D2N sangat fleksibel. Mobilnya bersih wangi, penjemputan di Bandara YIA tepat waktu. Next time ke Jogja pasti pakai Arunika lagi!',
      },
    ],
  },

  // Section 6: Call To Action (CTA)
  cta: {
    eyebrow: 'Mulai Petualanganmu',
    title: 'Sudah Siap Merencanakan Liburan Impian di Jogja?',
    description:
      'Hubungi tim kami sekarang dan dapatkan penawaran khusus untuk rombongan, trip privat, maupun rombongan keluarga.',
    buttonLabel: 'Chat WhatsApp Sekarang',
    buttonHref:
      'https://wa.me/6281234567890?text=Halo%20Arunika%20Travel,%20saya%20ingin%20konsultasi%20paket%20wisata',
  },
};

// ==========================================
// 2. HALAMAN PAKET (paket.astro) - 4 SECTIONS
// ==========================================
export const packagesContent = {
  // Section 1: Header
  header: {
    title: 'Pilihan Paket Wisata Yogyakarta',
    subtitle:
      'Temukan paket liburan terfavorit yang dirancang khusus untuk memenuhi kebutuhan perjalanan Anda.',
  },

  // Section 2: Paket Grid
  packagesGrid: {
    categories: [
      { id: 'all', label: 'Semua Paket' },
      { id: '1-day', label: '1 Hari (One Day)' },
      { id: '2d1n', label: '2 Hari 1 Malam' },
      { id: '3d2n', label: '3 Hari 2 Malam' },
      { id: 'custom', label: 'Custom Trip' },
    ],
    items: [
      {
        id: 'one-day-heritage',
        category: '1-day',
        title: 'One Day Heritage & Merapi',
        duration: '1 Hari (08.00 - 20.00)',
        price: 'Rp 350.000',
        minPax: 'Min. 4 Pax',
        description:
          'Eksplorasi warisan sejarah dan petualangan memicu adrenalin di kaki Gunung Merapi.',
        inclusions: [
          'Transport AC Standar Pariwisata',
          'Driver merangkap Guide',
          'Tiket Masuk Candi & Jeep Merapi',
          'Air Mineral & Parkir',
        ],
        image: '/images/merapi-lava-tour.jpg',
      },
      {
        id: 'one-day-beach',
        category: '1-day',
        title: 'One Day Exotic Gunungkidul Beaches',
        duration: '1 Hari (07.00 - 19.00)',
        price: 'Rp 325.000',
        minPax: 'Min. 4 Pax',
        description:
          'Menikmati keindahan pasir putih Pantai Drini, Mesra, dan sunset menawan di HeHa Ocean View.',
        inclusions: [
          'Transport AC Pariwisata',
          'Driver & BBM',
          'Tiket Masuk Semua Destinasi',
          'Air Mineral',
        ],
        image: '/images/pantai-gunungkidul.jpg',
      },
      {
        id: 'culture-culinary-2d1n',
        category: '2d1n',
        title: '2D1N Culture & Culinary Experience',
        duration: '2 Hari 1 Malam',
        price: 'Rp 850.000',
        minPax: 'Min. 2 Pax',
        description:
          'Perpaduan sempurna antara wisata sejarah, kerajinan lokal, dan santap kuliner khas Jogja.',
        inclusions: [
          'Hotel Bintang 3 (1 Malam)',
          'Makan 4x Sesuai Program',
          'Transport Private AC',
          'Tiket Wisata & Guide',
        ],
        image: '/images/kraton-jogja.jpg',
      },
      {
        id: 'adventure-nature-3d2n',
        category: '3d2n',
        title: '3D2N Ultimate Jogja Adventure',
        duration: '3 Hari 2 Malam',
        price: 'Rp 1.250.000',
        minPax: 'Min. 2 Pax',
        description:
          'Pengalaman lengkap menjelajahi goa, pantai ekstrem, candi ikonik, dan pusat perbelanjaan.',
        inclusions: [
          'Hotel Bintang 3 (2 Malam)',
          'Makan 7x Sesuai Program',
          'Peralatan Caving & Gondola',
          'Penjemputan YIA/Stasiun',
        ],
        image: '/images/goa-jomblang.jpg',
      },
    ],
  },

  // Section 3: How To Book
  howToBook: {
    eyebrow: 'Prosedur Mudah',
    title: '4 Langkah Mudah Memesan Trip',
    subtitle:
      'Proses reservasi cepat tanpa ribet untuk kenyamanan persiapan liburan Anda.',
    steps: [
      {
        step: '01',
        title: 'Pilih Paket atau Custom',
        description:
          'Pilih paket yang tersedia atau diskusikan kebutuhan itinerary custom Anda.',
      },
      {
        step: '02',
        title: 'Konsultasi & Tanggal',
        description:
          'Hubungi tim admin via WhatsApp untuk konfirmasi ketersediaan armada & tanggal.',
      },
      {
        step: '03',
        title: 'Pembayaran DP',
        description:
          'Lakukan konfirmasi pemesanan dengan deposit (DP) yang aman dan terverifikasi.',
      },
      {
        step: '04',
        title: 'Siap Berlibur!',
        description:
          'Tim kami akan menjemput Anda di Stasiun/Bandara YIA sesuai jadwal kedatangan.',
      },
    ],
  },

  // Section 4: CTA
  cta: {
    title: 'Punya Destinasi Impian Sendiri di Jogja?',
    description:
      'Konsultasikan rencana perjalanan custom Anda bersama tim ahli kami secara gratis.',
    buttonLabel: 'Buat Itinerary Custom',
    buttonHref:
      'https://wa.me/6281234567890?text=Halo%20Arunika%20Travel,%20saya%20mau%20custom%20itinerary%20wisata%20Jogja',
  },
};

// ==========================================
// 3. HALAMAN KONTAK (kontak.astro) - 3 SECTIONS
// ==========================================
export const contactContent = {
  // Section 1: Header
  header: {
    title: 'Hubungi Arunika Travel',
    subtitle:
      'Ada pertanyaan atau siap merencanakan liburan? Tim kami selalu siap melayani Anda.',
  },

  // Section 2: About / Profil Singkat
  about: {
    eyebrow: 'Mengenal Kami',
    title: 'Tentang Arunika Travel Yogyakarta',
    description:
      'Arunika Travel adalah penyedia jasa tour & travel lokal terpercaya yang berbasis di Kota Yogyakarta. Terinspirasi dari kata "Arunika" yang berarti cahaya matahari terbit, kami berkomitmen memberikan sinar hangat keramahan Jogja serta pengalaman liburan yang berkesan bagi setiap wisatawan.',
    missionPoints: [
      'Menyajikan pilihan destinasi wisata beragam dan autentik.',
      'Menjamin kenyamanan & keamanan armada kendaraan terawat.',
      'Memberikan pelayanan ramah dan profesional berstandar tinggi.',
    ],
  },

  // Section 3: Contact Info & Form
  contactSection: {
    title: 'Kirim Pesan atau Diskusi Trip',
    subtitle:
      'Isi formulir di bawah atau hubungi kami langsung via nomor kontak di samping.',
    form: {
      namePlaceholder: 'Nama Lengkap',
      emailPlaceholder: 'Alamat Email',
      phonePlaceholder: 'Nomor WhatsApp',
      datePlaceholder: 'Rencana Tanggal Wisata',
      messagePlaceholder:
        'Tuliskan kebutuhan wisata Anda (jumlah peserta, destinasi, dll)...',
      submitButton: 'Kirim Pesan via WhatsApp',
    },
  },
};
