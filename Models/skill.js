var db = require('../dbConnection'); //reference of dbconnection.js file

var Skill = {
    getallDetails5: function (callback) {

        return db.query('select * from skill', callback);
    },
    getDetails5: function (Id,callback) {

        return db.query('select * from skill where id=?',[Id], callback);
    },
    addDetails5: function (skill, callback) {
        return db.query('insert into skill values(?,?,?,?,?,?)',
         [   skill.id,
             skill.skillcatagory,
             skill.skill,
             skill.skilllevel,
             skill.iscurrent,
             skill.experience
         ], callback);
    },
    deleteDetails5: function (Id, callback) {
        return db.query('delete from skill where id=?', [Id], callback);
    },
    updateDetails5: function (Id, skill, callback) {
        return db.query('update skill set skillcatagory=?,skill=?,skilllevel=?,iscurrent=?,experience=? where id=?', 
        [
            skill.skillcatagory,
            skill.skill,
            skill.skilllevel,
            skill.iscurrent,
            skill.experience,
             Id], callback);
    }
};

module.exports = Skill;