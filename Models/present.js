var db = require('../dbConnection'); //reference of dbconnection.js file

var Present = {
    getallDetails2: function (callback) {

        return db.query('select * from present', callback);
    },
    getDetails2: function (Id,callback) {

        return db.query('select * from present where id=?',[Id], callback);
    },
    addDetails2: function (present, callback) {
        return db.query('insert into present values(?,?,?,?,?,?,?,?,?,?)',
         [ present.id,
             present.presentdno_street,
            present.present_village,
            present.presentpost_office,
            present.present_mandal,
            present.present_district,
            present.presentpin_code,
            present.country,
            present.state,
            present.city,
        ], callback);
    },
    deleteDetails2: function (Id, callback) {
        return db.query('delete from present where id=?', [Id], callback);
    },
    updateDetails2: function (Id, present, callback) {
        return db.query('update present set presentdno_street=?, present_village=?,presentpost_office=?,present_mandal=?,present_district=?,presentpin_code=?,country=?,state=?,city=? where id=?', 
        [ 
            present.presentdno_street,
            present.present_village,
            present.presentpost_office,
            present.present_mandal,
            present.present_district,
            present.presentpin_code,
            present.country,
            present.state,
            present.city,
             Id], callback);
    }
};

module.exports = Present;