const mongoose = require("mongoose");

// Record Schema
const RecordSchema = mongoose.Schema({
  id: {
    type: Number
  },
  createTime: {
    type: Date
  },
  updateTime: {
    type: Date
  },
  description: {
    type: String
  }
});

const Record = module.exports = mongoose.model("Record", RecordSchema);

module.exports.getRecordById = function(id, callback) {
  Record.findById(id, callback);
}

module.exports.addRecord = function(record, callback) {
  record.save(callback);
}

module.exports.updateRecord = function(record, callback) {
  Record.findByIdAndUpdate(
    record.id,
    {
      $set: {
        descritption: record.description,
        updateTime: record.updateTime
      }
    },
    {new: true},
    callback
  );
}

module.exports.deleteRecord = function(id, callback) {
  Record.findByIdAndRemove(id, callback);
}

module.exports.getRecordList = function(callback) {
  Record.find({}, callback);
}

/* 
new style
export class Record {

}
*/
