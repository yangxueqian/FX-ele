<template>
  <div id="outside">
    <header>
        <nav>
          <ul>
            <li><a href="#/index">首页</a></li>
            <li><a href="">我的订单</a></li>
            <li><a href="">加盟合作</a></li>
            <li><a href="">我的客服</a></li>
            <li><a href="">规则中心</a></li>
            <li><a href="">手机应用</a></li>
            <li><a href="#/login" id="user">请登录</a></li>
          </ul>
        </nav>
    </header>
    <div id="d0">
      <div id="d01"><a href="">更多信息<img src="" alt=""/></a></div>—
      <div id="d02"><a href="">购物车<img src="" alt=""/></a></div>—
      <div id="d03">
        <a href="">联系我们<img src="" alt=""/></a>
        <a href="">二维码<img src="" alt=""/></a>
      </div>
    </div>
    <section>
      <div>
        <div>
          <span id="sp1">当前位置：
            <a href="" class="a1">硅谷广场</a>
            <a href="" class="a2">[切换地址]</a>
          </span>
        </div>
        <input type="text" placeholder="搜索商家,美食..." id="i1">
      </div>
      <div><img src="img/product/xiaohai.png" alt=""></div>
      <div id="d1">
        <span>商家分类：</span>
        <div id="sjfl">
          <ul><a href=""><li>全部商家</li></a>
            <a href=""><li>美食</li></a>
            <a href=""><li>快餐便当</li></a>
            <a href=""><li>特色菜系</li></a>
            <a href=""><li>异国料理</li></a>
            <a href=""><li>小吃夜宵</li></a>
            <a href=""><li>甜品饮品</li></a>
            <a href=""><li>果蔬生鲜</li></a>
            <a href=""><li>商店超市</li></a>
            <a href=""><li>鲜花绿植</li></a>
            <a href=""><li>医药健康</li></a>
            <a href=""><li>早餐</li></a>
            <a href=""><li>午餐</li></a>
            <a href=""><li>下午茶</li></a>
            <a href=""><li>晚餐</li></a>
            <a href=""><li>夜宵</li></a>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
          </div>
        </div>
        <div id="d2">
          <div v-for="item in list" :key="item.pid">
            <div class="shops">
              <img :src="'http://127.0.0.1:3000/'+item.url" class="star" alt=""><p>{{psTime.toFixed(0)}}分钟</p>
            </div>
            <ul>
              <li>{{item.title}}</li>
              <li><img src="../../public/img/star.png" alt="" width="60px" height="16px"></li>
              <li>配送费￥{{item.price}}</li>
            </ul>
          </div>
        </div> 
    </section>
    <footer>
      <div>
        <ul>
          <li><h3>用户帮助</h3></li>
          <li><a href="">我的客服</a></li>
        </ul>
        <ul>
          <li><h3>商务合作</h3></li>
          <li><a href="">我要开店</a></li>
          <li><a href="">加盟指南</a></li>
          <li><a href="">市场合作</a></li>
          <li><a href="">开放平台</a></li>
        </ul>
        <ul>
          <li><h3>关于我们</h3></li>
          <li><a href="">饿了么介绍</a></li>
          <li><a href="">加入我们</a></li>
          <li><a href="">联系我们</a></li>
          <li><a href="">规则中心</a></li>
          <li><a href="">隐私政策</a></li>
        </ul>
        <ul id="u1">
          <li>24小时客服热线 : 10105757</li>
          <li>关注我们：</li>
        </ul>
        <ul id="u2">
          <li>
            <a href=""><img src="img/product/eleapp.png" alt=""></a>
          </li>
          <li>
            <h3>下载手机版</h3>
            <p>扫一扫，手机订餐方便</p>
          </li>
        </ul>
      </div>
      <p>
        <span>
          <a href="">我要开店</a>|
          <a href="">联系我们</a>|
          <a href="">服务条款和协议</a>|
          <a href="">隐私政策</a>|
          <a href="">营业执照</a>|
          <a href="">加入我们</a>|
          <a href="">蜂鸟配送</a>|
          <a href="">失信人员查询</a>
        </span>
        <br>互联网药品信息服务资格证书: <a href="">	(沪)-经营性-2016-0011</a>	 | 增值电信业务许可证 : <a href="">沪B2-20150033 </a>	| <a href="">沪ICP备 09007032 </a>	| 上海工商行政管理 Copyright ©2008-2018 上海拉扎斯信息科技有限公司, All Rights Reserved.
        <br><a href="http://www.zx110.org/picp/?sn=310100103568"><img src="img/product/f1.jpg" alt="沪公网备" height="39px"></a><a href="http://www.shjbzx.cn/"><img src="img/product/f2.png" alt="上海市互联网违法不良信息举报中心" height="39px"></a>
        <br>违法和不良信息举报电话 021-60663655
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
    return{
            list:[],
            pno:'',
            pageSize:'',
            psTime:Math.random()*40+15
    }
  },
  created(){
        this.getMore();
    },
    methods:{
        //加载更多  加载下一页数据
        getMore(){
            // 1:修改当前页码+1
            this.pno++;
            // 2:发送请求get
            var url = "http://127.0.0.1:3000/products?";
            url+="pno="+this.pno;
            url+="&pageSize="+this.pageSize;
            // 3:获取下一页数据保存 list
            this.axios.get(url).then(result=>{
                var rows = this.list.concat(result.data.data);
                this.list = rows;
            });
        }
        // handleUser(){
        //             //1:发送ajax请求给 服务器
        //             var url = "http://127.0.0.1:3000/user";
        //             this.axios.get(url).then
        //             (res=>{
        //                 if(res.data.code==1){
        //                   		user.innerHTML='uname';
				// 			          }
        //             });
        //         }
    }
  //   created(){
  //           this.handleUser();
  // }
}
</script>
<style scoped>
@import url("../assets/css/animate.css");
@import url("../assets/css/normalize_zh.css");
*{margin:0;padding:0;}
		div{box-sizing:border-box;}
		section,footer{width:77.541%;margin:0 auto}
		ul{list-style:none;}
		a{text-decoration:none}
		#outside{background:#f7f7f7;}
		#d0{width: 50px;height: 750px;
			background:#333333;
			position:fixed;
			right: 0;top: 0;
			display: flex;
			flex-direction: column;
			
			align-items: center;
			color: #fff;
		}
    #d0 div{margin:70px 0}
		#d0 a{color:#fff;font-size:12px}
		#d01{width: 20%}
		#d02{width:20% }
		#d03{width: 50%}
		header{width:100%;height:60px;background:#1e89e0;}
		header nav{width:77.541%;margin:0 auto;}
		header ul:before{content:url(../assets/logo_up.png);}
		header ul{
			height:60px;
			display:flex;
			list-style:none;
			align-items:center;
			}
		header ul li{width:400px;}
		header ul li a{text-decoration:none;color:#fff;}
		section>div:first-child{height:40.6px;font-size:12px;margin-top:10px;display:flex;justify-content:space-between;}
		section>div:first-child>input{height:30px;width:300px;outline:none;} 
		section>div:first-child>div{margin-top:5px;}
		section>div:nth-child(2){text-align:right;position:relative;height:55px;}
		section>div:nth-child(2)>img{width:186px;height:55px;position:absolute;bottom:-5px;right:1px;animation:wobble 1s;}
	  #sp1 .a1{color:#333;margin-right: 7px}
		#sp1 .a1:hover{color:#0089DC}
		#sp1 .a2{color:#0089DC}
    #sp1{color:#999}
    
		#d1{
			width:100%;
			height:93.8px;
			background:#fff;
			font-size:14px;
			display:flex;
			justify-content:space-between;
			align-items:center;
		}
		#d1 span{align-self:baseline;width:75px;margin:20px 0 0 20px;color:#999;}
		#sjfl{font-size:14px;width:1100px;}
		#sjfl ul{
			width:100%;
			height:50px;
			list-style:none;
			display:flex;
			flex-wrap:wrap;
			justify-content:space-between;
			align-items:center;
			}
		#sjfl ul li{margin:-2px 30px 15px 0;color:#666}
		#sjfl ul>li{width:86px;}
		#d2{display:flex;background:#fff;margin-top:20px;
			flex-wrap:wrap;
			justify-content:space-between;
			font-size:12px;
			color:#666;
		}
		#d2>div{width:294.5px;height:136.56px;padding:20px;display:flex;}
		#d2 .shops>img{width:70px;height:70px;margin-bottom:10px;margin-right:15px;}
		#d2 ul>li{height:20px;}
		#d2 ul>li:first-child{color:#333;font-size:16px;font-weight:600}
		footer{margin-top:84px;}
		footer>div{
			display:flex;
			justify-content:space-between;
		}
		footer ul{list-style:none;}
		footer ul a{font-size:12px;color:#999;display:block;height:24px;}
		footer ul>li>h3{font-size:14px;color:#333;font-weight:normal;height:29.6px;}
		#u1>li{color:#666;font-size:14px;display:block;height:36px;}
		#u2>li>h3{font-size:16px;margin-top:23px;font-weight:bold;}
		#u2>li>p{color:#666;font-size:12px;}
		#u2 img{width:90px;height:90px;margin-right:20px;}
		footer>div>ul:last-child{
			display:flex;
			justify-content:space-between;
		}
		footer p{
			font-size:11px;
			color:#999;
			text-align:center;
			height:150px;
			line-height:25px;
		}
		footer a{
			color:#666666;
    }
    footer p span a{margin:0 8px;}
</style>
