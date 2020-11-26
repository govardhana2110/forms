var db = require('../dbConnection'); //reference of dbconnection.js file

var Qualification = {
    getallDetails3: function (callback) {

        return db.query('select * from qualification', callback);
    },
    getDetails3: function (Id,callback) {

        return db.query('select * from qualification where id=?',[Id], callback);
    },
    addDetails3: function (qualification, callback) {
        return db.query('insert into qualification values(?,?,?,?,?)',
         [   qualification.id,
             qualification.qualification,
             qualification.institute,
             qualification.year,
             qualification.score
         ], callback);
    },
    deleteDetails3: function (Id, callback) {
        return db.query('delete from qualification where id=?', [Id], callback);
    },
    updateDetails3: function (Id, qualification, callback) {
        return db.query('update qualification set qualification=? ,institute=?,year=?,score=? where id=?', 
        [  
            qualification.qualification,
            qualification.institute,
            qualification.year,
            qualification.score,
             Id], callback);
    }
};

module.exports = Qualification;