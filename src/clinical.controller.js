import dao from './clinicals.dao';
// import mongodb from 'mongodb'
var mongodb =require('mongodb')

exports.getAll=(req,res)=>{
    console.log(req.body)
    console.log(mongodb)
    dao.get({patient:mongodb.ObjectID(req.params.patientId)},(err,clinicalData)=>{
        res.send(clinicalData);
    })
}

exports.create=(req,res)=>{
    var clinicals=req.body;
    dao.create(clinicals,(err,clinicals)=>{
        res.send(clinicals);
    })
}