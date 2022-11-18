var bodyparser=require('body-Parser')
const express= require('express')
const PORT = process.env.PORT || 3001;
const app=express();
var url_db="mongodb://localhost:27017"
var MongoClient=require('mongodb').MongoClient

app.get("/api",(req,res)=>{
    res.send({message:"hello"})
})
app.get("/register",(req,res)=>{
    res.render('form')//res.json({message:"hello server"})
})
app.set('view engine','pug')
app.set('views','./views')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.post('/form',function(req,res)
{
    var forms={firstname:req.body.first,lastname:req.body.last}
    console.log("Form submitted")
    res.json(req.body)
    MongoClient.connect(url_db,function(err,db){
        if(err)throw err
            var dbo=db.db("form")
        dbo.collection('formdata').insertOne(req.body,function(err,res){
            if(err) throw err
            db.close()
        })
    })
})

app.post('/review',(req,res)=>{
    console.log("post")
    var forms={name:req.body.name,comment:req.body.comment}
    console.log(forms)
    console.log("Form submitted")
    res.json(req.body)
    MongoClient.connect(url_db,function(err,db){
        if(err)throw err
            var dbo=db.db("form")
        dbo.collection("review").insertOne(req.body,function(err,res){
            if(err) throw err
            db.close()
            })
        })  
})
app.listen(PORT,()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})