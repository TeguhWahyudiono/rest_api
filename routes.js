'use strict';

module.exports = function (app){
    const jsonku = require ('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuamahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahmahasiswa);

    app.route('/ubah')
        .put(jsonku.ubahmahasiswa);

    app.route('/hapus')
        .delete(jsonku.hapusmahasiswa);

    app.route('/tampilmatakuliah')
        .get(jsonku.tampilgroupmatakuliah);
};