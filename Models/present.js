var db = require('../dbConnection'); //reference of dbconnection.js file

var Present = {
    getallDetails: function (callback) {

        return db.query('select * from present', callback);
    },
    getDetails: function (Id,callback) {

        return db.query('select * from present where presentdno_street=?',[Id], callback);
    },
    addDetails: function (present, callback) {
        return db.query('insert into present values(?,?,?,?,?,?)',
         [ present.presentdno_street,
            present.present_village,
            present.presentpost_office,
            present.present_mandal,
            present.present_district,
            present.presentpin_code], callback);
    },
    deleteDetails: function (Id, callback) {
        return db.query('delete from present where presentdno_street=?', [Id], callback);
    },
    updateDetails: function (Id, present, callback) {
        return db.query('update present present_village=?,presentpost_office=?,present_mandal=?,present_district=?,presentpin_code=? where presentdno_street=?', 
        [
            present.presentdno_street,
            present.present_village,
            present.presentpost_office,
            present.present_mandal,
            present.present_district,
            present.presentpin_code,
             Id], callback);
    }
};

module.exports = Present;