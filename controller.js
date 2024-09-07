'use strict';

const response = require('./res');
const connection = require('./koneksi');

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req, res) {
    connection.query('SELECT * FROM mhs', function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// menampilkan data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mhs WHERE id_mhs = ?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

// menambahkan data mahasiswa
exports.tambahmahasiswa = function(req, res) {
    let nama = req.body.nama;
    let prodi = req.body.prodi;
    let fakultas = req.body.fakultas;

    connection.query('INSERT INTO mhs (nama, prodi, fakultas) VALUES(?,?,?)',
        [nama, prodi, fakultas],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menambahkan data!", res);
            }
        });
};

// mengubah data mahasiswa berdasarkan id
exports.ubahmahasiswa = function(req, res) {
    let id = req.body.id_mhs;
    let nama = req.body.nama;
    let prodi = req.body.prodi;
    let fakultas = req.body.fakultas;

    connection.query('UPDATE mhs SET nama=?, prodi=?, fakultas=? WHERE id_mhs=?', [nama, prodi, fakultas, id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil mengubah data!", res);
            }
        });
};

// menghapus data mahasiswa berdasarkan id
exports.hapusmahasiswa = function(req, res) {
    let id = req.body.id_mhs;

    connection.query('DELETE FROM mhs WHERE id_mhs=?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menghapus data!", res);
            }
        }
    );
};