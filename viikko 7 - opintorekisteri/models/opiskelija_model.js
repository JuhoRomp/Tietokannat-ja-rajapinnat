const db = require('../database')

const opiskelija = {

    getAll: function(callback){
    return db.query('select  * from opiskelija', callback)
  },

getOne: function(id, callback){
    return db.query(
      'select * from opiskelija  where idOpiskelija=?',
         [id],
      callback
    )
  },

  add: function(data, callback){
     return db.query(
      'insert into opiskelija ( Etunimi, Sukunimi, Osoite, Luokkatunnus) values (?,?,?,?)',
        [
         data.Etunimi,
         data.Sukunimi,
         data.Osoite,
         data.Luokkatunnus
      ],
          callback
    )
  },

  delete: function(id, callback){
    return db.query(
      'delete from opiskelija where  idOpiskelija=?',
      [id],
      callback
    )
  },

  update: function(id, data, callback){
    return db.query(    
      ' update opiskelija set Etunimi=?, Sukunimi=?, Osoite=?, Luokkatunnus=? where idOpiskelija=?',
      [ 
        data.Etunimi,
        data.Sukunimi,
           data.Osoite,
           data.Luokkatunnus,
        id
      ] ,
      callback
     )
  }

}

module.exports = opiskelija