<template>
  <div>
    <header>
      <nav>	
        <h4>
          <a href=""><img src="img/index/logo.png" alt="" width="11.5%"></a>
          <div>
			<span id="user">
				<a href="#/reg">注册</a> <span>|</span>
				<a href="#/login">登录</a>
			</span>
			<a href=""><button class="b1">我要开店</button></a>
          </div>
        </h4>
      </nav>
    </header>
    <section class="s1">
      <div class="big">
        <img src="img/index/logo.png" alt="" width="15%">
      </div>
      <div>
          <select name="" id="" size="1">
            <option value="">郑州</option>
            <option value="">北京</option>
            <option value="">上海</option>
            <option value="">广州</option>
          </select>
        <input type="text" v-model="kwords" @keydown.13="search" :placeholder="placeholder" size="50px">
        <button class="b2" @click="search">搜索</button>
      </div>
    </section>
    <section class="s2" height="100px">
        <fieldset>
          <legend>扫码下载APP</legend>
          <img src="img/index/erweima.png" alt="" width="130px">
        </fieldset>
        <aside>
          <table style="text-align:left">
            <tr>
              <td>新用户首次下单</td>
            </tr>
            <tr>
              <td class="d2"><b>最高立减30元</b></td>
            </tr>
            <tr>
              <td>立即下载app，享更多优惠吧！</td>
            </tr>
          </table>
        </aside>
    </section>
    <footer>
      <p style="line-height:25px">
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
        <br><a href="http://www.zx110.org/picp/?sn=310100103568"><img src="img/index/f1.jpg" alt="沪公网备" height="39px"></a><a href="http://www.shjbzx.cn/"><img src="img/index/f2.png" alt="上海市互联网违法不良信息举报中心" height="39px"></a>
        <br>违法和不良信息举报电话 021-60663655
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
	  return{ 
		  placeholder:"|请输入您的收货地址（写字楼、小区、街道或者学校）",
		  kwords:""
	  }
  },
  methods:{
	  search(){
		  console.log(`查找到${this.kwords}相关的内容...`)
	  }
  },
  watch:{	//监视函数，监视变量的变化，经常用于搜素帮助
	  kwords(){
		  this.search();
	  }
  }
}
</script>
<style scoped>
*{
		margin:0;
	  padding:0;
}
	a{
		text-decoration: none;
	}
	ul{
		list-style:none;
	}
	header{
		background:#008de1;
		color:#ffffff;
		height:100px;
	}
	nav{
		width:83%;
		margin-left:11%;
		padding-top:25px;
	}
	nav>h4>div{
		width:246px;
		float:right;
		padding-top:25px;
		color:#ffffff;
	}
	nav div a{
		margin:0 8px;
	}
	nav div span{
		font-size: 14px;
	}
	header a{
	color:#ffffff;
	font-weight:100;
	font-size:14px;
	}
	.b1{
		background:#5DB423;
		border:0;
		border-radius: 2px;
		width:76px;
		height:26px;
		margin-left:20px;
		color:#ffffff;
		font-size:12px;
	}
	.q2{
		text-align:right;
	}
	.s1{
		height:400px;
		text-align:center;
		background:#008de1;
	}
	.s1>div:last-child{
		display:flex;
		justify-content:center;
		margin-top:38px;
	}
	.s1 input{
		height: 55px;
		width:415px;
		border: none;
		font-size: 16px;
	}
	select{
		width:100px;
		border: none;
		height:55px;
		font-size:20px;
		font-family:'Times New Roman',Times,serif;
		text-align-last:center;
	}
	.b2{
		border:0;
		background:#f74342;
		color:#fff;
		width:128px;
		height:55px;
		font-size:20px;
		margin-left:10px;
	}
	.big{
		text-align:center;
		padding-top:70px;
	}
	
	.d1{
		width:700px;
		height:300px;
	}
	.s2{
		display:flex;
		justify-content:center;
		margin:60px 0 80px 0;
	}
	.s2>fieldset {   
		border:1px solid grey; 
		border-radius: 5px;  
		line-height: 30px!important;  
		width:150px;
		height: 169px;
		text-align:center;
		margin-right:20px;
		padding: 5px;
		position: relative;
	}
	.s2>fieldset img{
		position: absolute;
		left:15px;
		top:32px;
	}
	.s2>fieldset legend { 
		width: 80px; 
		font-size: 13px;
		color:grey;  
	}
	aside{
		width:290px;
		/* margin-right:13%; */
		margin-top:45px;
		
	}
	.d2{
		color:red;
		font-size:28px;
	}
	footer p{
		font-size:12px;
		color:#999;
		text-align:center;
		height:150px;
	}
	footer p span a{
		margin: 0 5px;
	}
	footer a{
	color:#666666;
	}
</style>