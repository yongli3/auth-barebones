const express = require('express');
const router = express.Router();
const passport = require("passport");
const Record = require('../models/record');

router.post("/", (req, res) => {
  let now = Date.now();
  let record = new Record({
    description: req.body.description,
    updateTime: now,
    createTime: now
  });

  Record.addRecord(record, (err, record) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: err
      });
    }
    res.json({
      success: true,
      record: record
    });
  
  });
});

router.put("/:id", (req, res) => {
  let now = Date.now();
  let uid = req.params.id;
  let record = new Record({
    _id: uid,
    description: req.body.description,
    updateTime: now
  });

  Record.updateRecord(record, (err, record) => {
    if(err) {
      console.log(err);
      res.json({
        success: false,
        msg: err
      });
    }

    res.json({
      success: true,
      record: record
    });
  });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  console.log('delete record ' + id);

  Record.deleteRecord(id, (err, record) => {
    if(err) {
      res.json({
        success: false,
        msg: err
      });
    }

    res.json({
      success: true,
      record: record
    });
  });
});

router.get("/records", /*passport.authenticate("jwt", {session: false}),*/ (req, res) => {
  Record.getRecordList((err, recordList) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: err
      });
    }

    res.json({
      success: true,
      records: recordList
    });
  });
});


module.exports = router;
