const db = require('../database')

const opintojakso = {

 getAll:function(callback){
  return db.query('select * from opintojakso',callback)
 },

 getOne: function(id, callback){
  return db.query(
   'select * from opintojakso where idOpintojakso=?',
   [id],
   callback
  )
 },

 add:function(data,callback){
   return db.query(
    'insert into opintojakso (Koodi,Laajuus,Nimi) values (?,?,?)',
    [
      data.Koodi,
        data.Laajuus,
      data.Nimi
    ],
    callback
   )
 },

 delete:function(id,callback){
  return db.query(
   'delete from opintojakso where idOpintojakso=?',
   [id],
   callback
  )
 },

 update:function(id,data,callback){
   return db.query(
    'update opintojakso set Koodi=?, Laajuus=?,Nimi=? where idOpintojakso=?',
    [
      data.Koodi,
      data.Laajuus ,
      data.Nimi,
      id
    ],
    callback
   )
 }

}

module.exports = opintojakso