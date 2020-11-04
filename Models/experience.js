var db = require('../dbConnection'); //reference of dbconnection.js file

var Experience = {
    getallDetails: function (callback) {

        return db.query('select * from experience', callback);
    },
    getDetails: function (Id,callback) {

        return db.query('select * from experience where organisation=?',[Id], callback);
    },
    addDetails: function (experience, callback) {
        return db.query('insert into bank values(?,?,?,?,?)',
         [
             experience.id,
             experience.fromdate,
             experience.todate,
             experience.organisation,
            experience.experience,
         ], callback);
    },
    deleteDetails: function (Id, callback) {
        return db.query('delete from bank where account_number=?', [Id], callback);
    },
    updateDetails: function (Id, experience, callback) {
        return db.query('update experience fromdate=?,todate=?,organisation=?,experience=? where id=?', 
        [
            bank.personal_mail,
            bank.birth_place,
            bank.nationality,
            bank.pan_no,
            bank.aadhar_no,
            bank.bank_name,
            bank.payment_type,
            bank.account_number,
            bank.ifsc_code,
            bank.city,
             Id], callback);
    }
};

module.exports = Experience;