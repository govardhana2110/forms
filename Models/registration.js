var db = require('../dbConnection'); //reference of dbconnection.js file

var Registration = {
    getallDetails: function (callback) {

        return db.query('select * from registrationform', callback);
    },
    getDetails: function (Id,callback) {

        return db.query('select * from registrationform where id=?',[Id], callback);
    },
    addDetails: function (registrationform, callback) {
        return db.query('INSERT INTO `registrationform`(`id`, `name`, `title`, `first_name`, `middle_name`, `last_name`, `user_gender`, `user_dob`, `age`, `official_phone`, `personal_phone`, `extn_ofc_phn`, `fax`, `ofc_mail`, `personal_email`, `photo`, `birth_place`, `relegion`, `cast`, `nationality`, `voter_id`, `PAN`, `aadhar`, `marital_status`, `bank_name`, `account_type`, `payment_type`, `acc_no`, `IFSC`) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
         [
             registrationform.id,
             registrationform.name,
             registrationform.title,
             registrationform.first_name,
             registrationform.middle_name,
             registrationform.last_name,
             registrationform.user_gender,
             registrationform.user_dob,
             registrationform.age,
             registrationform.official_phone,
             registrationform.personal_phone,
             registrationform.extn_ofc_phn,
             registrationform.fax,
             registrationform.ofc_mail,
             registrationform.personal_email,
             registrationform.photo,
             registrationform.birth_place,
             registrationform.relegion,
             registrationform.cast,
             registrationform.nationality,
             registrationform.voter_id,
             registrationform.PAN,
             registrationform.aadhar,
             registrationform.marital_status,
             registrationform.bank_name,
             registrationform.account_type,
             registrationform.payment_type,
             registrationform.acc_no,
             registrationform.IFSC,



         ], callback);
    },
    deleteDetails: function (Id, callback) {
        return db.query('delete from registrationform where id=?', [Id], callback);
    },
    updateDetails: function (Id, registrationform, callback) {
        return db.query('update registrationform set name=?,title=?,first_name=?,middle_name=?,last_name=?,user_gender=?,user_dob=?,age=?,official_phone=?,personal_phone=?,extn_ofc_phn=?,fax=?,ofc_mail=?,personal_email=?,photo=?,birth_place=?,relegion=?,cast=?,nationality=?,voter_id=?,PAN=?,aadhar=?,marital_status=?,bank_name=?,account_type=?,payment_type=?,acc_no=?,IFSC=? where id=?', 
        [
             registrationform.name,
             registrationform.title,
             registrationform.first_name,
             registrationform.middle_name,
             registrationform.last_name,
             registrationform.user_gender,
             registrationform.user_dob,
             registrationform.age,
             registrationform.official_phone,
             registrationform.personal_phone,
             registrationform.extn_ofc_phn,
             registrationform.fax,
             registrationform.ofc_mail,
             registrationform.personal_email,
             registrationform.photo,
             registrationform.birth_place,
             registrationform.relegion,
             registrationform.cast,
             registrationform.nationality,
             registrationform.voter_id,
             registrationform.PAN,
             registrationform.aadhar,
             registrationform.marital_status,
             registrationform.bank_name,
             registrationform.account_type,
             registrationform.payment_type,
             registrationform.acc_no,
             registrationform.IFSC,

             Id], callback);
    }
};

module.exports = Registration;