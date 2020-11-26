
var express = require('express');
var router = express.Router();
var permanent = require('../Models/Permanent');


router.get('/:Id?', function (req, res, next) {
    if(req.params.Id){
permanent.getDetails1(req.params.Id,function(err,rows){
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
});
    }
    else{
    permanent.getallDetails1(function (err, rows) {
    
    
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

    permanent.addDetails1(req.body, function (err, rows) {
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

    permanent.deleteDetails1(req.params.Id, function (err, rows) {
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

    permanent.updateDetails1(req.params.Id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;