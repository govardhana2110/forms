var db = require('../dbConnection'); //reference of dbconnection.js file

var Experience = {
    getallDetails4: function (callback) {

        return db.query('select * from experience', callback);
    },
    getDetails4: function (Id,callback) {

        return db.query('select * from experience where organisation=?',[Id], callback);
    },
    addDetails4: function (experience, callback) {
        return db.query('insert into experience values(?,?,?,?,?)',
         [
             experience.id,
             experience.fromdate,
             experience.todate,
             experience.organisation,
            experience.experience,
         ], callback);
    },
    deleteDetails4: function (Id, callback) {
        return db.query('delete from experience where id=?', [Id], callback);
    },
    updateDetails4: function (Id, experience, callback) {
        return db.query('update experience set fromdate=?,todate=?,organisation=?,experience=? where id=?', 
        [
            experience.fromdate,
            experience.todate,
            experience.organisation,
           experience.experience,
             Id], callback);
    }
};

module.exports = Experience;