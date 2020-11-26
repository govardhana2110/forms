
var express = require('express');
var router = express.Router();
var experience = require('../Models/Experience');


router.get('/:Id?', function (req, res, next) {
    if(req.params.Id){
experience.getDetails4(req.params.Id,function(err,rows){
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
});
    }
    else{
    experience.getallDetails4(function (err, rows) {
    
    
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
        
    });
}
    
     });
router.post('/', function (req, res, next) {

    experience.addDetails4(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});
//http://localhost:3000/tasks/1
router.delete('/:Id', function (req, res, next) {

    experience.deleteDetails4(req.params.Id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
//http://localhost:3000/tasks/1
router.put('/:Id', function (req, res, next) {

    experience.updateDetails4(req.params.Id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;