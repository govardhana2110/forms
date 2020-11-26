var db = require('../dbConnection'); //reference of dbconnection.js file

var Permanent = {
    getallDetails1: function (callback) {

        return db.query('select * from permanent', callback);
    },
    getDetails1: function (Id,callback) {

        return db.query('select * from permanent where id=?',[Id], callback);
    },
    addDetails1: function (permanent, callback) {
        return db.query('insert into `permanent`(`id`, `dno_street`, `village`, `post_office`, `mandal`, `district`, `pin_code`, `country`, `state`, `city`) values(?,?,?,?,?,?,?,?,?,?)',
         [
             permanent.id,
             permanent.dno_street,
             permanent.village,
             permanent.post_office,
             permanent.mandal,
             permanent.district,
             permanent.pin_code,
             permanent.country,
             permanent.state,
             permanent.city,
         ], callback);
    },
    deleteDetails1: function (Id, callback) {
        return db.query('delete from permanent where id=?', [Id], callback);
    },
    updateDetails1: function (Id, permanent, callback) {
        return db.query('update permanent set dno_street=?,village=?,post_office=?,mandal=?,district=?,pin_code=?,country=?,state=?,city=? where id=?', 
        [
            permanent.dno_street,
             permanent.village,
             permanent.post_office,
             permanent.mandal,
             permanent.district,
             permanent.pin_code,
             permanent.country,
             permanent.state,
             permanent.city,
             Id], callback);
    }
};

module.exports = Permanent;