SET NAMES UTF8;
DROP DATABASE IF EXISTS ele;
CREATE DATABASE ele CHARSET=UTF8;
USE ele;
#网站的基本信息表
CREATE TABLE ele_site_info(
	site_name VARCHAR(16),
	logo VARCHAR(64),
	copyright VARCHAR(128)
);
INSERT INTO ele_site_info VALUES("饿了么","logo.png","互联网药品信息服务资格证书:(沪)-经营性-2016-0011 | 增值电信业务许可证 : 沪B2-20150033 | 沪ICP备 09007032 | 上海工商行政管理 Copyright ©2008-2018 上海拉扎斯信息科技有限公司, All Rights Reserved.");
#导航条目表
CREATE TABLE ele_navbar_item(
	name VARCHAR(64),
	url VARCHAR(64),
	title VARCHAR(32)
);
INSERT INTO ele_navbar_item VALUES("logo.png","/index.html","饿了么"),
("注册","/index.html","饿了么"),("登录","/index.html","饿了么"),("我要开店","/index.html","饿了么");
#轮播图表
CREATE TABLE ele_carousel_item(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(128),
	url VARCHAR(128),
	title VARCHAR(32)
);
INSERT INTO ele_carousel_item VALUES(NULL,'images/pic1.jpg','/m1.html','清闲谈雅'),
(NULL,'images/pic1.jpg','/m1.html','清闲谈雅'),(NULL,'images/pic1.jpg','/m1.html','清闲谈雅');
#商品列表
CREATE TABLE ele_shops(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(16),
	url VARCHAR(128),
	price DECIMAL(10,2)
);
INSERT INTO ele_shops VALUES("null","凑凑火锅.茶憩（郑州...）","img/shops/d1.jpg","4"),
("null","禾味购脆皮鸡","img/shops/d2.png","0"),("null","太太好粥（郑州店）","img/shops/d3.png","1"),
("null","食韵佳快餐","img/shops/d4.png","3"),("null","味道小厨红烧肉","img/shops/d5.jpg","0.5"),
("null","石磨肠粉（恒大名都店）","img/shops/d6.jpg","4"),("null","米多面多（丰乐路店）","img/shops/d7.jpg","8"),
("null","刘记焖面王","img/shops/d8.jpg","2.5"),("null","福记面馆","img/shops/d9.jpg","4"),
("null","花之韵鲜花店","img/shops/d10.jpg","4"),("null","清和养现熬草本茶","img/shops/d11.jpg","4"),
("null","王记炖肉","img/shops/d12.jpg","0.5"),("null","立源饭店","img/shops/d13.jpg","4"),
("null","老狼大盘鸡（水科路店）","img/shops/d14.jpg","4"),("null","梁小猴铁板炒饭","img/shops/d15.jpg","4"),
("null","传统老北京炸酱面","img/shops/d16.jpg","0"),("null","石磨肠粉（恒大名都店）","img/shops/d6.jpg","4"),
("null","米多面多（丰乐路店）","img/shops/d7.jpg","8"),("null","刘记焖面王","img/shops/d8.jpg","2.5"),
("null","福记面馆","img/shops/d9.jpg","4"),
("null","花之韵鲜花店","img/shops/d10.jpg","4"),("null","清和养现熬草本茶","img/shops/d11.jpg","4"),
("null","王记炖肉","img/shops/d12.jpg","0.5"),("null","立源饭店","img/shops/d13.jpg","4"),
("null","老狼大盘鸡（水科路店）","img/shops/d14.jpg","4");
#用户表
CREATE TABLE ele_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32) UNIQUE KEY NOT NULL,
	upwd VARCHAR(32) NOT NULL,
	email VARCHAR(64) NOT NULL,
	phone VARCHAR(11) NOT NULL,
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender INT 
);
INSERT INTO ele_user VALUES('1','ding',md5('123456'),'1435496@qq.com','18783659612','images/avarar/defult.png','张三','0');