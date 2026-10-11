export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Ahmad Marwan',
            child: 'Putra ke Dua',
            father: 'Bapak Kasmin',
            mother: 'Ibu Ratmi',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Chitiyar Retno Ade ugi lestari',
            child: 'Putri ke Dua',
            father: 'Alm. Bapak Chandra Anang Sugiarto',
            mother: 'Alm. Ibu Jarmini',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Oktober',
            date: '18',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Oktober',
            date: '18',
            day: 'Minggu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Dusun Kedunpeting RT 02 RW 04, Desa Kedungwaru,Kecamatan kunduran, Kabupaten Blora, Jawa Tengah',
    },

    link: {
        calendar: 'https://calendar.app.google/X3UNMUUG8sWBYMqe7',
        map: 'https://maps.app.goo.gl/ZTrZyUo4vzAuYPxD7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        // {
        //     id: 4,
        //     image: './src/assets/images/4.png'
        // },
        // {
        //     id: 5,
        //     image: './src/assets/images/5.png'
        // }
    ],

    bank: [
        // {
        //     id: 1,
        //     name: 'Lorem Ipsum',
        //     icon: './src/assets/images/bca.png',
        //     rekening: '12345678'
        // },
        {
            id: 2,
            name: 'Ahmad Marwan',
            icon: './src/assets/images/bri.png',
            rekening: '583501061874535 '
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxFnJwiSe73tlYt7BsCXAYtCuh8wXO-NQ-eTsXzV5zPbrRXleQVzULiyxqtw7z9lJod/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
