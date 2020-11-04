var db = require('../dbConnection'); //reference of dbconnection.js file

var Skill = {
    getallDetails: function (callback) {

        return db.query('select * from skill', callback);
    },
    getDetails: function (Id,callback) {

        return db.query('select * from skill where skill=?',[Id], callback);
    },
    addDetails: function (skill, callback) {
        return db.query('insert into skikll values(?,?,?,?)',
         [
             skill.skillcatagory,
             skill.skill,
             skill.skilllevel,
             skill.iscurrent,
             skill.expeerience
         ], callback);
    },
    deleteDetails: function (Id, callback) {
        return db.query('delete from skill where skill=?', [Id], callback);
    },
    updateDetails: function (Id, skill, callback) {
        return db.query('update skill skillcatagory=?,skilllevel=?,iscurrent=?,experience=? where skill=?', 
        [
            skill.skillcatagory,
            skill.skill,
            skill.skilllevel,
            skill.iscurrent,
            skill.expeerience,
             Id], callback);
    }
};

module.exports = Skill;