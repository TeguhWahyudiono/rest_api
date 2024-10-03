let express = require('express');
let auth = require('./auth');
let router = express.Router();
let verifikasi = require('./verifikasi');

// daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

// alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(2), auth.halamanrahasia);

module.exports = router;
