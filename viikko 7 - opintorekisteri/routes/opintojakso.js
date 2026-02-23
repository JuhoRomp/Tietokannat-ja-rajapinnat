var express = require('express')
var router = express.Router()
var opintojakso = require('../models/opintojakso_model')

router.get('/', function(req,res){
  opintojakso.getAll(function(err,rows){
    if(err) res.json(err)
    else res.json(rows)
  })
})

router.get('/:id', function(req,res){
  opintojakso.getOne(req.params.id,function(err,row){
    if(err) res.json(err)
    else res.json(row)
  })
})


router.post('/', function(req,res){
  opintojakso.add(req.body,function(err,result){
    if(err) res.json(err)
    else res.json(result)
  })
})


router.delete('/:id', function(req,res){
  opintojakso.delete(req.params.id,function(err,result){
    if(err) res.json(err)
    else res.json(result)
  })
})



router.put('/:id', function(req,res){
  opintojakso.update(req.params.id, req.body,function(err,result){
    if(err) res.json(err)
    else res.json(result)
  })
})

module.exports = router