var db = require('../dbConnection'); //reference of dbconnection.js file

var Qualification = {
    getallDetails: function (callback) {

        return db.query('select * from qualification', callback);
    },
    getDetails: function (Id,callback) {

        return db.query('select * from qualification where qualification=?',[Id], callback);
    },
    addDetails: function (qualification, callback) {
        return db.query('insert into qualification values(?,?,?,?)',
         [
             qualification.qualification,
             qualification.institute,
             qualification.year,
             qualification.score
         ], callback);
    },
    deleteDetails: function (Id, callback) {
        return db.query('delete from qualification where qualification=?', [Id], callback);
    },
    updateDetails: function (Id, qualification, callback) {
        return db.query('update qualification institute=?,year=?,score=? where qualification=?', 
        [
            qualification.qualification,
            qualification.institute,
            qualification.year,
            qualification.score,
             Id], callback);
    }
};

module.exports = Qualification;