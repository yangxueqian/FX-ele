//1:加载模块 
const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const pool = require("./pool");
//5:加载跨域访问模块
const cors = require("cors");
//2:创建服务器端对象
var app =express();
//3:监听端口3000
app.listen(3000);
//4：托管静态资源到public目录下
app.use(express.static('public'));
//6:配置跨域访问模块 
//origin        允许访问的域名
//credentials   跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}));
//配置 session 模块
app.use(session({
  secret:"128位字符串",
  resave:"true",
  saveUninitialized:true
}));

// 功能1：登录
app.get("/login",(req,res)=>{
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  var sql = "SELECT uid FROM ele_user";
  sql +=" WHERE uname = ? AND upwd = md5(?)";
   pool.query(sql,[uname,upwd],(err,result)=>{
   if(err)throw err;
   // 判断用户登录成功
   if(result.length==0){
   res.send({code:-1,msg:"用户名或密码有误"});
   }else{
   //登录成功
     // 1:将登录成功凭据保存session
     //如果登录成功，result=[{id:1}],取出result数组中登录成功的id序号作为登录成功的凭据保存到session中
     req.session.uid = result[0].uid;
     req.session.uname = uname;
     console.log(req.session);
     //2.将成功消息发送脚手架
   res.send({code:1,msg:"登录成功"})
   }
 })
 console.log("1个用户已登录！");
});
//功能2：商品的分页显示
app.get("/products",(req,res)=>{
  // 1:参数 pno pageSize
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  // 2:允许使用默认值 0 8
  if(!pno){pno=0}
  if(!pageSize){pageSize=20}
  // 3：sql
  var sql = " SELECT pid,title,price,url";//三板斧:3：需要查询的列写在SELECT后
  sql+=" FROM ele_shops LIMIT ?,?";//三板斧1：从哪几张表中进行多表查询，将他们的表名放在FROM后，并且为每张表创建别名（在本来的表名后空格，然后写出别名）
  // 4:json
  // http://127.0.0.1:3000/products
  var offset = (pno-1)*pageSize;
  var ps = parseInt(pageSize);
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result});
  })
})
//功能3：用户注册
app.get("/reg",(req,res)=>{
  var una = req.query.uname;
  var upwd = req.query.upwd;
  var email = req.query.email;
  var phone = req.query.phone;
  var gender = req.query.gender;
  console.log(una,upwd,email,phone,gender);
  var sql0 = 'SELECT uid FROM ele_user WHERE uname=?';
  pool.query(sql0,una,(err,result)=>{
    if(err)throw err;
    if(result.length==0){
     var sql = `INSERT INTO ele_user VALUES("null",?,md5(?),?,?,"null","null",?)`;
      pool.query(sql,[una,upwd,email,phone,gender],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
        res.send({code:1,msg:"注册成功"})
        }else{
        res.send({code:-1,msg:"注册失败，请检查网络！"});
        }
      })
      console.log("1个用户已注册！");
    }else{
     res.send({code:-1,msg:"用户名不可用！"});
    }
  })
})
//检查用户是否登录
app.get("/user",(req,res)=>{
  var uid=req.session.uid
  if(!uid){
    res.send({code:-1,msg:"请先登录"});
    return;
  }
});