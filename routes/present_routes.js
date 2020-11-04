
var express = require('express');
var router = express.Router();
var present = require('../Models/Present');


router.get('/:Id?', function (req, res, next) {
    if(req.params.Id){
present.getDetails(req.params.Id,function(err,rows){
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
});
    }
    else{
    present.getallDetails(function (err, rows) {
    
    
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

    present.addDetails(req.body, function (err, rows) {
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

  present.deleteDetails(req.params.Id, function (err, rows) {
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

    present.updateDetails(req.params.Id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;