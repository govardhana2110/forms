var db = require('../dbConnection'); //reference of dbconnection.js file

var Permanent = {
    getallDetails: function (callback) {

        return db.query('select * from permanent', callback);
    },
    getDetails: function (Id,callback) {

        return db.query('select * from permanent where dno_street=?',[Id], callback);
    },
    addDetails: function (permanent, callback) {
        return db.query('insert into permanent values(?,?,?,?,?,?,)',
         [
             permanent.dno_street,
             permanent.village,
             permanent.post_office,
             permanent.mandal,
             permanent.district,
             permanent.pin_code,
         ], callback);
    },
    deleteDetails: function (Id, callback) {
        return db.query('delete from permanent where account_number=?', [Id], callback);
    },
    updateDetails: function (Id, permanent, callback) {
        return db.query('update permanent village=?,post_office=?,mandal=?,district=?,pin_code=? where dno_street=?', 
        [
            permanent.dno_street,
             permanent.village,
             permanent.post_office,
             permanent.mandal,
             permanent.district,
             permanent.pin_code,
             Id], callback);
    }
};

module.exports = Permanent;