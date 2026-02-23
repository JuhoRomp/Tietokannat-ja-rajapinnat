const db = require('../database');

const borrower = {
  getAll: function(callback) {
    return db.query('select * from borrower', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from borrower where id_borrower=?', [id], callback);
  },
  add: function(borrower, callback) {
    return db.query(
      'insert into borrower (lname,fname,streetaddress) values(?,?,?)',
      [borrower.name, borrower.author, borrower.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from borrower where id_borrower=?', [id], callback);
  },
  update: function(id, borrower, callback) {
    return db.query(
      'update borrower set lname=?,fname=?, streetaddress=? where id_borrower=?',
      [borrower.lname, borrower.fname, borrower.streetaddress, id],
      callback
    );
  }
};
module.exports = borrower;