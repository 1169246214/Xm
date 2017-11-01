/**
 * Created by asus on 2017/11/1.
 */
var express=require('express');
var app=express();
var fs=require('fs');
app.use('/xm',express.static('src'));
var bodyParser=require('body-parser');
app.set('view engine','ejs');
app.get('/home',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render('首页.ejs')
})


app.get('/cy',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render('成员列表.ejs')
})

app.get('/xqa',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render('成员详情a.ejs')
})

app.get('/xqb',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render('成员详情b.ejs')
})

app.get('/xqc',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render('成员详情c.ejs')
})

app.get('/lt',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render('聊天页.ejs')
})

app.get('/yh',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render('用户反馈.ejs')
})

app.listen(3002);